import React from 'react'
import {observer} from 'mobservable-react'

import SuiteForm from './SuiteForm'
import FlowChart from './FlowChart'
import ContainerForm from './ContainerForm'

@observer
class FormWithChart extends React.Component {
    static propTypes = {
    	app: React.PropTypes.object
    };
    static defaultProps = {
        app: undefined
    };

    onSuiteChange = (form) => {
     	this.props.app.editSuite(form.name)
    };

    onOkClick = () => {
     	this.props.app.saveSuite()
    };

    currentSuite = () => {
		return this.props.app.suites[this.props.app.currentSuiteIndex()]
    };
    currentContainer = () => {
               return this.props.app
               .suites[this.props.app.currentSuiteIndex()]
               .containers[this.props.app.currentContainerIndex()]
    };

    render() {
		let suite = this.currentSuite()
        let container = this.currentContainer()

        return <div>
          <div className="container">
            <div id='content' className="section">
              <SuiteForm suite={suite} onChange={this.onSuiteChange}/>
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
            <a className="waves-effect waves-light btn" onClick={this.onOkClick}>OK</a>
          </div>
        </div>
    }
}

export default FormWithChart
