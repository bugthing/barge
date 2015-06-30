import React from 'react/addons'

import ActionCreators from '../action-creators'

class StartHere extends React.Component {
    static propTypes = {
        initialSuite: React.PropTypes.object
    }
    static defaultProps = { initialSuite: {} }

    constructor(props) {
        super()
        this.state = { suite: props.initialSuite }
    }

    clickStartHandler() {
        ActionCreators.startSuite( this.state.suite );
    }

    render() {
        return <div className="container">
          <div className="row center"></div>
          <div className="row center">
            <a className="waves-effect waves-light btn" onClick={this.clickStartHandler.bind(this)}>Start Here</a>
          </div>
          <div className="row center"></div>
        </div>
    }
}

export default StartHere
