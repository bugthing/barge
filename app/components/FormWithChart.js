import React from 'react'

import FlowChart from './FlowChart'
import SuiteForm from './SuiteForm'
import ContainerForm from './ContainerForm'

import ActionCreators from '../action-creators'

class FormWithChart extends React.Component {
    static propTypes = {
    	suite: React.PropTypes.object,
    	container: React.PropTypes.object
    }

    constructor(props) {
        super(props)
        this.clickOkHandler = this.clickOkHandler.bind(this)
    }

    clickOkHandler() {
        ActionCreators.saveSuite( this.props.suite );
    }

    render() {
        let suite = this.props.suite
        let container = this.props.container

        return <div>
          <div className="container">
            <div id='content' className="section">
              <SuiteForm suite={suite} />
            </div>
          </div>
          <div className="section no-pad-bot" id="index-banner">
            <div id='chart' className="container">
              <FlowChart width={600} height={200} suite={suite} container={container}/>
            </div>
          </div>
          <div className="container">
            <div id='content' className="section">
              <ContainerForm container={container} />
            </div>
          </div>
          <div className="row center">
                <a className="waves-effect waves-light btn e2e-startbutton" onClick={this.clickOkHandler.bind(this)}>OK</a>
          </div>
        </div>
    }
}

export default FormWithChart
