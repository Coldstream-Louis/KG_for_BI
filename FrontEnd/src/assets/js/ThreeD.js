function show3d (nodes, links) {
  const elem = document.getElementById('3d-graph')
  const Graph = ForceGraph3D()
  (elem)
    .graphData({nodes, links})
    .nodeLabel('name')
    .linkLabel('type')
    .linkWidth(1)
    .linkDirectionalParticles(2)
    .nodeAutoColorBy('id')
    .onNodeHover(node => elem.style.cursor = node ? 'pointer' : null)
    .onNodeClick(node => {
      // Aim at node from outside it
      const distance = 40
      const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z)
      Graph.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
        node, // lookAt ({ x, y, z })
        3000  // ms transition duration
      )
    })
  var threeDGraph = document.getElementById('3d-graph')
  document.onkeydown = function keyboard (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0]
    if (e && e.keyCode === 27) {
      alert('Quit 3D Mode')
      threeDGraph.style.display = 'none'
    }
  }
}

function show3d2 (nodes, links) {
  console.log(2)
  let highlightNodes = []
  let highlightLink = null
  const elem = document.getElementById('3d-graph')
  const Graph = ForceGraph3D()
  (elem)
    .graphData({nodes, links})
    .nodeLabel('name')
    .linkLabel('type')
    .linkWidth(link => link === highlightLink ? 4 : 1)
    .linkDirectionalParticles(link => link === highlightLink ? 4 : 0)
    .linkDirectionalParticles(2)
    .nodeAutoColorBy('id')
    .nodeColor(node => highlightNodes.indexOf(node) === -1 ? '' : 'rgb(255,0,0,1)')
    .onNodeHover(node => {
      // no state change
      if ((!node && !highlightNodes.length) || (highlightNodes.length === 1 && highlightNodes[0] === node)) return;
      highlightNodes = node ? [node] : [];
      updateGeometries();
    })
    .onLinkHover(link => {
      // no state change
      if (highlightLink === link) return;
      highlightLink = link;
      highlightNodes = link ? [link.source, link.target] : [];
      updateGeometries()
    })
    .onNodeClick(node => {
      // Aim at node from outside it
      const distance = 40
      const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
      Graph.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
        node, // lookAt ({ x, y, z })
        3000  // ms transition duration
      )
    })
  function updateGeometries () {
    Graph.nodeRelSize(4) // trigger update of 3d objects in scene
  }
  var threeDGraph = document.getElementById('3d-graph')
  document.onkeydown = function keyboard (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0]
    if (e && e.keyCode === 27) {
      alert('Quit 3D Mode')
      threeDGraph.style.display = 'none'
    }
  }
}

export {show3d, show3d2}
