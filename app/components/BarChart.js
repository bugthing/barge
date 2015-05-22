
import React from 'react/addons'
import d3 from 'd3'
import _ from 'underscore'

class Chart extends React.Component {
    render() {
        return <svg width={this.props.width} height={this.props.height}>{this.props.children}</svg>
    }
}

class Bar extends React.Component {
    getDefaultProps() {
        return {
          width: 0,
          height: 0,
          offset: 0
        }
    }

    render() {
        return <rect fill={this.props.color}
            width={this.props.width} height={this.props.height} 
            x={this.props.offset} y={this.props.availableHeight - this.props.height} />
    }
}


class DataSeries extends React.Component {
    getDefaultProps() {
      return {
        title: '',
        data: []
      }
    }

    render() {
        var props = this.props;

        var yScale = d3.scale.linear()
          .domain([0, d3.max(this.props.data)])
          .range([0, this.props.height]);

        var xScale = d3.scale.ordinal()
          .domain(d3.range(this.props.data.length))
          .rangeRoundBands([0, this.props.width], 0.05);

        var bars = _.map(this.props.data, function(point, i) {
          return <Bar height={yScale(point)} width={xScale.rangeBand()} offset={xScale(i)} availableHeight={props.height} color={props.color} key={i} />
        });

        return  <g>{bars}</g>
    }
}

class BarChart extends React.Component {
    render() {
      return <div>
        <Chart width={this.props.width} height={this.props.height}>
          <DataSeries data={[ 30, 10, 5, 8, 15, 10 ]} width={this.props.width} height={this.props.height} color="cornflowerblue" />
        </Chart>
        </div>
    }
}

export default BarChart
