
import React from 'react/addons'
import Docker from '../docker'
import DockerMenu from './DockerMenu'

export default React.createClass({
    getInitialState: () => {
      return {value: Docker.host}
    },
    handleChange: function(event) {
      let dockerHost = event.target.value
      let that = this

      Docker.fetch('_ping', dockerHost).then( (host) => {
        Docker.host = dockerHost
        that.setState({value: dockerHost})
      })
    },
    resetHost: function(event) {
      Docker.host = null
      this.setState({value: Docker.host})
    },
    render: function() {
        let value = this.state.value;
        let that = this

        if(Docker.host) {

            Docker.fetch('containers/json').then( (containers) => {
              that.setProps({containers: containers})
            })

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
