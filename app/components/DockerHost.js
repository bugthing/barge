
import React from 'react/addons'
import Docker from '../docker'
import DockerMenu from './DockerMenu'

export default React.createClass({

    getInitialState: function() {
        this.getContainers()
        return {hostValue: Docker.host, portValue: Docker.port}
    },

    setPort: function(event) {
        this.setState({portValue: event.target.value})
    },

    setHost: function(event) {
        this.setState({hostValue: event.target.value})
    },

    reset: function(event) {
        Docker.host = null
        Docker.port = null
        this.setState({hostValue: Docker.host, portValue: Docker.port})
    },

    componentWillUpdate: function(nextProps, nextState) {
        if((nextState.hostValue !== this.state.hostValue) || (nextState.portValue !== this.state.portValue)) {
            console.log('Pinging:' + nextState.hostValue + ' -- ' + nextState.portValue)
            let that = this
            Docker.fetch('_ping', nextState.hostValue, nextState.portValue).then( (res) => {
              Docker.host = nextState.hostValue
              Docker.port = nextState.portValue
              that.getContainers()
            })
        }
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
            return <div>
                Docker Host: {Docker.host} {Docker.port}
                <a onClick={this.reset} > x </a>
                <DockerMenu containers={this.props.containers}/>
              </div>
        } else {
            return <div>
                Docker host information:
                Host:<input type="text" value={this.state.hostValue} onChange={this.setHost} />
                Port:<input type="text" value={this.state.portValue} onChange={this.setPort} />
              </div>
        }
    }
})
