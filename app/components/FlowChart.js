import React from 'react'
import ReactDOM from 'react-dom'
import d3 from 'd3'
import ActionCreators from '../action-creators'
import Store from '../store'

class Chart extends React.Component {
    static propTypes = {
    	chart: React.PropTypes.object
    }

    constructor(props) {
        super()
        this.focusNode = this.focusNode.bind(this)
        this.drawChart = this.drawChart.bind(this)
    }

	focusNode(n) {
    	ActionCreators.focusNode(n.uuid)
	}

    render() {
		return <svg width={this.props.width} height={this.props.height}></svg>
    }

    componentDidMount() {
        this.drawChart();
        Store.addChangeListener(this.drawChart)
    }

    componentWillUnmount() {
        Store.removeChangeListener(this.drawChart)
    }

    drawChart() {
		// TBA - fix link.. why no lines?
		//var links = [{source: 1, target: 0, value: 1}, {source: 2, target: 0, value: 8}, {source: 3, target: 0, value: 10}];
		//var nodes = [{name: "Myriel", group: 0}, {name: "Napoleon", group: 1}, {name: "Steve", group: 1},{name: "Dave", group: 1}];

        let suite = this.props.chart

		let nodes = []
        suite.containers.forEach( (c) => {
            nodes.push({name: c.uuid, uuid: c.uuid})
        })

		let links = []
        let findIndexByUUID = (list, uuid) => {
            let c = -1
            for(let i=0; i<list.length; i++) { if(list[i].uuid === uuid) c = i }
            return c
        }
        suite.containers.forEach( (c) => {
            if( c.links !== undefined ) {
                let cIndex = findIndexByUUID(nodes, c.uuid)
                c.links.forEach( (l) => {
                    let dIndex = findIndexByUUID(nodes, l.uuid)
                    links.push({source: cIndex, target: dIndex})
                })
            }
        })

		var el = ReactDOM.findDOMNode(this);

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
            .style("stroke-width", (d) => { return Math.sqrt(d.value); })
            .attr("x1", (d) => { return d.source.x; })
            .attr("y1", (d) => { return d.source.y; })
            .attr("x2", (d) => { return d.target.x; })
            .attr("y2", (d) => { return d.target.y; });

        var node = vis.selectAll("circle.node")
            .data(nodes)
          .enter().append("svg:circle")
            .attr("class", "node")
            .attr("cx", (d) => { return d.x; })
            .attr("cy", (d) => { return d.y; })
            .attr("r", 5)
            .style("fill", (d) => { return fill(d.group); })
            .call(force.drag);

        node.append("svg:title")
            .text((d) => { return d.name; });

        node.on("click", this.focusNode);

        vis.style("opacity", 1e-6)
           .transition()
           .duration(1000)
           .style("opacity", 1);

        force.on("tick", () => {
          link.attr("x1", (d) => { return d.source.x; })
              .attr("y1", (d) => { return d.source.y; })
              .attr("x2", (d) => { return d.target.x; })
              .attr("y2", (d) => { return d.target.y; });
          node.attr("cx", (d) => { return d.x; })
              .attr("cy", (d) => { return d.y; });
        });
    }
}

class FlowChart extends React.Component {
    render() {
        let chart = this.props.suite

        return <Chart width={this.props.width} height={this.props.height} chart={chart} />
    }
}
export default FlowChart
