
import React from 'react/addons'
import d3 from 'd3'
import _ from 'underscore'

//class Bar extends React.Component {
//    render() {
//        return <rect fill={this.props.color}
//            width={this.props.width} height={this.props.height} 
//            x={this.props.offset} y={this.props.availableHeight - this.props.height} />
//    }
//}
//
//class DataSeries extends React.Component {
//    getDefaultProps() {
//      return {
//        title: '',
//        data: []
//      }
//    }
//
//    render() {
//        var props = this.props;
//
//        var yScale = d3.scale.linear()
//          .domain([0, d3.max(this.props.data)])
//          .range([0, this.props.height]);
//
//        var xScale = d3.scale.ordinal()
//          .domain(d3.range(this.props.data.length))
//          .rangeRoundBands([0, this.props.width], 0.05);
//
//        var bars = _.map(this.props.data, function(point, i) {
//          return <Bar height={yScale(point)} width={xScale.rangeBand()} offset={xScale(i)} availableHeight={props.height} color={props.color} key={i} />
//        });
//
//        return  <g>{bars}</g>
//    }
//}


class NodeCircle extends React.Component {
    render() {
        return <circle cx={this.props.cx} cy={this.props.cy} r={this.props.r}></circle>
    }
}
NodeCircle.propTypes = { cx: React.PropTypes.number, cy: React.PropTypes.number, r: React.PropTypes.number }
NodeCircle.defaultProps = { cx: 40, cy: 60, r: 10 }

class DataFlow extends React.Component {
    render() {
        var nodes = _.map(this.props.nodes, function(node, i) { 
            return <NodeCircle cx={node}/>
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

class BarChart extends React.Component {
            //<DataSeries data={[ 3, 10, 5, 8, 15, 18 ]} width={this.props.width} height={this.props.height} color="cornflowerblue" />
    render() {
      return <Chart width={this.props.width} height={this.props.height}>
            <DataFlow nodes={[20, 150]} color="cornflowerblue" />
        </Chart>
    }
}

export default BarChart
