import React from 'react/addons'
import d3 from 'd3'

import ActionCreators from '../action-creators'

class Chart extends React.Component {
    static propTypes = {
    	chart: React.PropTypes.object
    }

    constructor(props) {
        super()
        this.focusNode = this.focusNode.bind(this)
    }

	focusNode() {
		console.log('Focus node')
        // TBA - fire new action (eg. FocusNode)
    	ActionCreators.loadSuite(1);
	}

    render() {
		return <svg width={this.props.width} height={this.props.height}></svg>
    }

    componentDidMount() {
		// TBA - generate node/links from suite
		var links = [{source: 1, target: 0, value: 1}, {source: 2, target: 0, value: 8}, {source: 3, target: 0, value: 10}];
		var nodes = [{name: "Myriel", group: 0}, {name: "Napoleon", group: 1}, {name: "Steve", group: 1},{name: "Dave", group: 1}];

		var el = React.findDOMNode(this);

        var w = this.props.width,
            h = this.props.height,
            fill = d3.scale.category20();

        var vis = d3.select(el);

        var force = d3.layout.force()
            .charge(-120)
            .linkDistance(30)
            .nodes(nodes)
            .links(links)
            .size([w, h])
            .start();

        var link = vis.selectAll("line.link")
            .data(links)
          .enter().append("svg:line")
            .attr("class", "link")
            .style("stroke-width", function(d) { return Math.sqrt(d.value); })
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        var node = vis.selectAll("circle.node")
            .data(nodes)
          .enter().append("svg:circle")
            .attr("class", "node")
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; })
            .attr("r", 5)
            .style("fill", function(d) { return fill(d.group); })
            .call(force.drag);

        node.append("svg:title")
            .text(function(d) { return d.name; });

        node.on("click", this.focusNode);

        vis.style("opacity", 1e-6)
          .transition()
            .duration(1000)
            .style("opacity", 1);

        force.on("tick", function() {
          link.attr("x1", function(d) { return d.source.x; })
              .attr("y1", function(d) { return d.source.y; })
              .attr("x2", function(d) { return d.target.x; })
              .attr("y2", function(d) { return d.target.y; });
          node.attr("cx", function(d) { return d.x; })
              .attr("cy", function(d) { return d.y; });
        });
    }
}

class FlowChart extends React.Component {
    render() {
        let chart = this.props.suite.chartjson

        return <Chart width={this.props.width} height={this.props.height} chart={chart} />
    }
}
export default FlowChart
