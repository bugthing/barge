import React from 'react'
import {observer} from 'mobservable-react'
import ReactDOM from 'react-dom'

import ActionCreators from '../action-creators'
import Store from '../store'
import Graph from '../Graph'

@observer
class FlowChart extends React.Component {
    static propTypes = {
    	suite: React.PropTypes.object,
    	container: React.PropTypes.object,
        width: React.PropTypes.number,
        height: React.PropTypes.number,
    };

    static defaultProps = {
    	suite: {},
    	container: {},
        width: 300,
        height: 300,
    };

    constructor(props) {
        super(props)
        this.focusNode = this.focusNode.bind(this)
        this.chartNodesAndLinks = this.chartNodesAndLinks.bind(this)
    }

	focusNode(n) {
    	ActionCreators.focusNode(n.id)
	}

    chartNodesAndLinks() {
        let suite = this.props.suite
        let container = this.props.container

		let nodes = []
        suite.containers.forEach( (c) => {
            let group = 0
            let name = c.id
            if(c.id === container.id) group = 1
            nodes.push({id: c.id, name: name, group: group})
        })

		let links = []
        suite.containers.forEach( (c) => {
            if( c.links !== undefined ) {
                c.links.forEach( (l) => { links.push({sourceId: c.id, targetId: l.id}) })
            }
        })

		return {nodes: nodes, links: links}
    }

    componentDidMount() {
		console.log('FLOW start')
		let chart = new Graph(ReactDOM.findDOMNode(this), this.props.width, this.props.height);
		chart.nodeClick = this.focusNode
		this.setState({chart: chart})
    }

    componentDidUpdate() {
		console.log('FLOW update')
		let chart = this.state.chart
		let chartData = this.chartNodesAndLinks()
		chart.removeAllNodes()
		chart.removeAllLinks()
		chartData.nodes.forEach( (n) => { chart.addNode(n) })
		chartData.links.forEach( (l) => { chart.addLink(l.sourceId, l.targetId) })
    }

    componentWillUnmount() {
		console.log('FLOW remove')
    }

    render() {
		return <svg width={this.props.width} height={this.props.height}></svg>
    }
}

export default FlowChart
