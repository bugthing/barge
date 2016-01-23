import React from 'react'

class StartHere extends React.Component {
    clickStartHandler() {
        ActionCreators.startSuite()
    }

    render() {
        return <div className="container">
          <div className="row center"></div>
          <div className="row center">
            <a className="waves-effect waves-light btn e2e-startbutton" onClick={this.clickStartHandler.bind(this)}>Start Here</a>
          </div>
          <div className="row center"></div>
        </div>
    }
}

export default StartHere
