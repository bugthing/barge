import React from 'react'
import ReactDOM from 'react-dom'
import ActionCreators from '../action-creators'
import Store from '../store'
import d3FlowChart from '../d3FlowChart'

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
        this.chartNodesAndLinks = this.chartNodesAndLinks.bind(this)
        this.drawChart = this.drawChart.bind(this)
    }

	focusNode(n) {
    	ActionCreators.focusNode(n.id)
	}

    chartNodesAndLinks() {
        let suite = this.props.suite
        let container = this.props.container
		let nodes = []
		let links = []

        let findIndexByID = (list, id) => {
            let c = -1
            for(let i=0; i<list.length; i++) { if(list[i].id === id) c = i }
            return c
        }

        suite.containers.forEach( (c) => {
            let group = 0
            let name = c.id
            if(c.id === container.id) group = 1
            nodes.push({name: name, id: c.id, group: group})
        })

        suite.containers.forEach( (c) => {
            if( c.links !== undefined ) {
                let cIndex = findIndexByID(nodes, c.id)
                c.links.forEach( (l) => {
                    let dIndex = findIndexByID(nodes, l.id)
                    links.push({source: cIndex, target: dIndex})
                })
            }
        })

		return {nodes: nodes, links: links}
    }

    drawChart() {
		let el = ReactDOM.findDOMNode(this);
		let chartData = this.chartNodesAndLinks();

        //d3FlowChart.destroy(el)
    	d3FlowChart.create(el, {
    	  	width: this.props.width,
    	  	height: this.props.height,
    	}, chartData, this.focusNode)
    }

    componentDidMount() {
		this.drawChart()
		Store.addChangeListener(this.drawChart)
    }

    componentDidUpdate() {
		//let el = ReactDOM.findDOMNode(this);
		//let chartData = this.chartNodesAndLinks();
        //d3FlowChart.update(el, chartData)
    }

    componentWillUnmount() {
		//let el = ReactDOM.findDOMNode(this);
        //d3FlowChart.destroy(el);

        Store.removeChangeListener(this.drawChart)
    }

    render() {
		return <svg width={this.props.width} height={this.props.height}></svg>
    }
}

export default FlowChart
