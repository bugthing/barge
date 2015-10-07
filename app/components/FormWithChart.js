import React from 'react/addons'

import Store from '../store'

import FlowChart from './FlowChart'
import ContainerForm from './ContainerForm'

class FormWithChart extends React.Component {

    render() {

        var chartjson = Store.getSuite().chartjson;
        var container = Store.getSuite().container;

        return <div>
          <div className="section no-pad-bot" id="index-banner">
            <div id='chart' className="container">
              <FlowChart width={600} height={100} chart={chartjson} />
            </div>
          </div>
          <div className="container">
            <div id='content' className="section">
              <ContainerForm container={container} />
            </div>
          </div>
        </div>
    }
}

export default FormWithChart
