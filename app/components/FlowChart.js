
import React from 'react/addons'
import d3 from 'd3'

//var json = {
//    flow: [
//        {
//            name: 'Node A',
//            sections: [
//                {
//                    name: 'Section A'
//                },
//                {
//                    name: 'Section B',
//                    joins: ['Node B']
//                }
//            ]
//        },
//        {
//            name: 'Node B'
//        }
//    ]
//}

class NodeJoin extends React.Component {
    render() {
        var path = "M 10 25 L 10 75 L 60 75 L 10 25"

        return <path d={path} stroke="red" strokeWidth="2" fill="none" />
    }
}

class Node extends React.Component {
    render() {
        return <circle cx={this.props.cx} cy={this.props.cy} r={this.props.r}></circle>
    }
}
Node.propTypes = { cx: React.PropTypes.number, cy: React.PropTypes.number, r: React.PropTypes.number }
Node.defaultProps = { cx: 40, cy: 60, r: 10 }

class DataFlow extends React.Component {
    render() {
        var i = 1 
        var nodes = this.props.nodes.map(function(node, i) {
            i = i + 1 
            return <Node cx={node} key={i} />
        })
        return  <g>{nodes}</g>
    }
}
DataFlow.propTypes = { nodes: React.PropTypes.array }
DataFlow.defaultProps = { nodes: [] }

class Chart extends React.Component {
    render() {
        return <svg width={this.props.width} height={this.props.height}>{this.props.children}</svg>
    }
}

class FlowChart extends React.Component {
    render() {
      return <Chart width={this.props.width} height={this.props.height}>
            <DataFlow nodes={[20, 150]} />
            <NodeJoin />
        </Chart>
    }
}

export default FlowChart
