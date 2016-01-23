import React from 'react'
import {observer} from 'mobservable-react'

import SuiteForm from './SuiteForm'
import FlowChart from './FlowChart'
//import ContainerForm from './ContainerForm'

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

    currentSuite = () => {
		return this.props.app.suites[this.props.app.currentSuiteIndex()]
    };

    render() {
		let suite = this.currentSuite()
        let container = suite.containers[0]
   //     let container = this.props.container

   //           <ContainerForm container={container} />
  //           <a className="waves-effect waves-light btn" onClick={this.clickOkHandler.bind(this)}>OK</a>
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
            </div>
          </div>
          <div className="row center">
          </div>
        </div>
    }
}

export default FormWithChart
