import d3 from 'd3'

let Graph = function(el, width, height) {

	this.addNode = (node) => {
	    nodes.push(node);
	    update();
	};

	this.addLink = (sourceId, targetId) => {
	    links.push({ 'source': findNode(sourceId),'target': findNode(targetId) });
	    update();
	};

	this.removeNode = (id) => {
	    let i = 0;
	    let n = findNode(id);
	    while (i < links.length) {
	        if ((links[i]['source'] == n)||(links[i]['target'] == n)) {
	            links.splice(i,1);
	        }
	        else i++;
	    }
	    nodes.splice(findNodeIndex(id),1);
	    update();
	};

	this.removeLink = (source,target) => {
	    for(let i=0;i<links.length;i++) {
	        if(links[i].source.id == source && links[i].target.id == target) {
	            links.splice(i,1);
	            break;
	        }
	    }
	    update();
	};

	this.nodeClick = (d) => {
            console.log('clicked node:' + d.id)
    };

	this.removeAllLinks = () => {
	    links.splice(0,links.length);
	    update();
	};

	this.removeAllNodes = () => {
	    nodes.splice(0,nodes.length);
	    update();
	};

	let findNode = (id) => {
	    for (let i in nodes) {
	        if (nodes[i]['id'] === id) return nodes[i];
        }
	};

	let findNodeIndex = (id) => {
	    for (let i=0;i<nodes.length;i++) {
	        if (nodes[i].id==id) return i
	    };
	};

	let vis = d3.select(el).append('svg')

	let force = d3.layout.force();

	let nodes = force.nodes(),
	    links = force.links();

	let update = () => {

	    let link = vis.selectAll('line').data(links)

	    link.enter().append('line')
	        .attr('id', (d) => { return d.source.id + '-' + d.target.id;})
            .style('stroke', function(d) { return '#E54236' })

	    link.append('title').text( (d) => { return d.value })

	    link.exit().remove();

	    let node = vis.selectAll('g.node')
	        .data(nodes, (d) => { return d.id });

	    node.on('click', this.nodeClick)

	    let nodeEnter = node.enter().append('g')
	        .attr('class', 'node')
            .style('fill', function(d) { return d.group == 1 ? '#E54236' : '#29B6F6'; })
	        .call(force.drag)

	    nodeEnter.append('svg:circle')
	    .attr('r', 20)
	    .attr('id', (d) => { return + d.id })
	    .attr('class','nodeStrokeClass')

	    nodeEnter.append('svg:text').text( (d) => { return d.id })

	    node.exit().remove()

	    force.on('tick', (e) => {
            let root = nodes[0]
            if(!root) return undefined // might be empty
  	        root.fixed = true
  	        root.x = width / 2
  	        root.y = 20

	        node.attr('transform', (d) => { return 'translate(' + d.x + ',' + d.y + ')' })

	        link
            .attr('x1', (d) => { return d.source.x; })
	        .attr('y1', (d) => { return d.source.y; })
	        .attr('x2', (d) => { return d.target.x; })
	        .attr('y2', (d) => { return d.target.y; })
	    });

	    force
	    .linkDistance(width/5.05)
	    .size([width, height])
        .gravity(0)
        .charge(0)
	    .start();
	};

	update()
}

export default Graph
