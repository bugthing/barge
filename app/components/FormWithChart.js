import React from 'react/addons'

import FlowChart from './FlowChart'
import SuiteForm from './SuiteForm'

class FormWithChart extends React.Component {
    static propTypes = {
    	suite: React.PropTypes.object
    }

    static defaultProps = {
        suite: undefined
    }

    render() {

        var suite = this.props.suite;
        var chartjson = this.props.suite.chartjson;

        return <div>
          <div className="section no-pad-bot" id="index-banner">
            <div id='chart' className="container">
              <FlowChart width={600} height={100} chart={chartjson} />
            </div>
          </div>
          <div className="container">
            <div id='content' className="section">
              <SuiteForm suite={suite} />
            </div>
          </div>
        </div>
    }
}

export default FormWithChart