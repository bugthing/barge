import React from 'react'
import ReactDOM from 'react-dom'

import Graph from '../graph'

function chartNodesAndLinks(suite, container) {
  let nodes = [];

  if( typeof suite.containers === 'undefined') suite.containers = [];

  suite.containers.forEach( (c) => {
      let group = 0
      let name = c.id
      if(c.id === container.id) group = 1
      nodes.push({id: c.id, name: name, group: group})
  })

  let links = [];
  suite.containers.forEach( (c) => {
      if( c.links !== undefined ) {
          c.links.forEach( (l) => { links.push({sourceId: c.id, targetId: l.id}) })
      }
  })

  return {nodes: nodes, links: links}
}

export const FlowChart = React.createClass({
    getDefaultProps: function() {
      return {
        width: 300,
        height: 300,
        suite: {},
        container: {}
      };
    },

    componentDidMount: function() {
      let chart = new Graph(ReactDOM.findDOMNode(this), this.props.width, this.props.height);
      this.setState({chart: chart})
    },

    componentDidUpdate() {
	  //console.log('FLOW update')
	  let chart = this.state.chart
	  let chartData = chartNodesAndLinks(this.props.suite, this.props.container)
	  chart.removeAllNodes()
	  chart.removeAllLinks()
	  chartData.nodes.forEach( (n) => { chart.addNode(n) })
	  chartData.links.forEach( (l) => { chart.addLink(l.sourceId, l.targetId) })
    },

    render: function() {
      let width = this.props.width;
      let height = this.props.height;

      return <svg width={width} height={height}></svg>
    }
});

export default FlowChart;
