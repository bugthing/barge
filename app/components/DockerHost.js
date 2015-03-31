
import React from 'react/addons'
import Docker from '../docker'

export default React.createClass({
    getInitialState: () => {
      return {value: Docker.host};
    },
    handleChange: function(event) {
      let dockerHost = event.target.value
      if(Docker.ping(dockerHost)) {
        Docker.host = dockerHost
        this.setState({value: Docker.host});
      }
    },
    resetHost: function(event) {
      Docker.host = null
      this.setState({value: Docker.host});
    },
    render: function() {
        let value = this.state.value;
        if(Docker.host) {
            return  <div>
                Docker Host: {Docker.host}
                <a onClick={this.resetHost} > x </a>
              </div>
        } else {
            return  <div>
                Enter the docker host here:
                <input type="text" value={value} onChange={this.handleChange} />
              </div>
        }
    }
})
