import d3 from 'd3'

let d3FlowChart = {}

d3FlowChart.create = (el, props, state, clickCB) => {
    console.log('CHART CREATE')

    let w = props.width,
        h = props.height,
        nodes = state.nodes,
        links = state.links,
        fill = d3.scale.category20()

    //this.update(el, state);

    let vis = d3.select(el)

    let force = d3.layout.force()
        .charge(-120)
        .linkDistance(30)
        .nodes(nodes)
        .links(links)
        .size([w, h])
        .start();

    let link = vis.selectAll("line.link")
        .data(links)
      .enter().append("svg:line")
        .attr("class", "link")
        .style("stroke-width", (d) => { return Math.sqrt(d.value); })
        .attr("x1", (d) => { return d.source.x; })
        .attr("y1", (d) => { return d.source.y; })
        .attr("x2", (d) => { return d.target.x; })
        .attr("y2", (d) => { return d.target.y; });

    let node = vis.selectAll("circle.node")
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

    node.on("click", clickCB);

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

d3FlowChart.update = (el, state) => {
    console.log('CHART UPDATE')
}

d3FlowChart.destroy = (el) => {
    console.log('CHART DESTROY')
}

export default d3FlowChart
