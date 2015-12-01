import d3 from 'd3'
import React from 'react'
import ReactDOM from 'react-dom'
import ActionCreators from '../action-creators'
import Store from '../store'

class FlowChart extends React.Component {
    static propTypes = {
    	suite: React.PropTypes.object,
    	container: React.PropTypes.object,
        width: React.PropTypes.number,
        height: React.PropTypes.number
    }

    constructor(props) {
        super(props)
        this.focusNode = this.focusNode.bind(this)
        this.drawChart = this.drawChart.bind(this)
    }

	focusNode(n) {
    	ActionCreators.focusNode(n.id)
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
		// TBA - fix link.. why I see no lines?

        let suite = this.props.suite
        let container = this.props.container

		let nodes = []
        suite.containers.forEach( (c) => {
            let group = 0
            let name = c.id
            if(c.id === container.id) {
                group = 1
                name = 'FOCUS'
            }
            nodes.push({name: name, id: c.id, group: group})
        })

		let links = []
        let findIndexByID = (list, id) => {
            let c = -1
            for(let i=0; i<list.length; i++) { if(list[i].id === id) c = i }
            return c
        }
        suite.containers.forEach( (c) => {
            if( c.links !== undefined ) {
                let cIndex = findIndexByID(nodes, c.id)
                c.links.forEach( (l) => {
                    let dIndex = findIndexByID(nodes, l.id)
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

export default FlowChart
