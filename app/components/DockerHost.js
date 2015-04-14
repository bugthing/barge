
import React from 'react/addons'
import Docker from '../docker'
import DockerMenu from './DockerMenu'

export default React.createClass({

    getInitialState: function() {
      this.getContainers()
      return {hostValue: Docker.host, portValue: Docker.port}
    },

    setPort: function(event) {
      let dockerPort = event.target.value
      let that = this
      console.log("setPort - " + dockerPort)
      Docker.fetch('_ping', this.state.hostValue, dockerPort).then( (res) => {
        that.setState({portValue: dockerPort})
        Docker.host = this.state.hostValue
        Docker.port = this.state.portValue
        that.getContainers()
      })
      that.setState({portValue: dockerPort})
    },

    setHost: function(event) {
      let dockerHost = event.target.value
      let that = this
      console.log("setHost - " + dockerHost)
      Docker.fetch('_ping', dockerHost, this.state.portValue).then( (res) => {
        that.setState({hostValue: dockerHost})
        Docker.host = this.state.hostValue
        Docker.port = this.state.portValue
        that.getContainers()
      })
      that.setState({hostValue: dockerHost})
    },

    reset: function(event) {
      Docker.host = null
      Docker.port = null
      this.setState({hostValue: Docker.host, portValue: Docker.port})
    },

    getContainers: function() {
      if(Docker.host && Docker.port) {
        let that = this
        Docker.fetch('containers/json').then( (containers) => {
          that.setProps({containers: containers})
        })
      }
    },

    render: function() {
        let value = this.state.value;
        let that = this

        if(Docker.host && Docker.port) {
            return  <div>
                Docker Host: {Docker.host} {Docker.port}
                <a onClick={this.reset} > x </a>
                <DockerMenu containers={this.props.containers}/>
              </div>
        } else {
            return  <div>
                Docker host information:
                Host:<input type="text" value={this.state.hostValue} onChange={this.setHost} />
                Port:<input type="text" value={this.state.portValue} onChange={this.setPort} />
              </div>
        }
    }
})
