
import React from 'react/addons'
import Docker from '../docker'
import DockerMenu from './DockerMenu'

export default React.createClass({
    getInitialState: function() {
      this.getContainers()
      return {value: Docker.host}
    },
    handleChange: function(event) {
      let dockerHost = event.target.value
      let that = this

      Docker.fetch('_ping', dockerHost).then( (res) => {
        Docker.host = dockerHost
        this.getContainers()
        that.setState({value: dockerHost})
      })
    },
    resetHost: function(event) {
      Docker.host = null
      this.setState({value: Docker.host})
    },

    getContainers: function() {
      if(Docker.host) {
        let that = this
        Docker.fetch('containers/json').then( (containers) => {
          that.setProps({containers: containers})
        })
      }
    },

    render: function() {
        let value = this.state.value;
        let that = this

        if(Docker.host) {
            return  <div>
                Docker Host: {Docker.host}
                <a onClick={this.resetHost} > x </a>
                <DockerMenu containers={this.props.containers}/>
              </div>
        } else {
            return  <div>
                Enter the docker host here:
                <input type="text" value={value} onChange={this.handleChange} />
              </div>
        }
    }
})
