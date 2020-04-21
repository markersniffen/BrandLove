///// RENDER /////

function render() {
  

  height = container._groups[0][0].offsetHeight;
  width = container._groups[0][0].offsetWidth;
  innerWidth = width - padLeft - padRight;
  innerHeight = height - padTop - padBottom;

  svg = container.selectAll('#svg').data([null])
   .join(
      enter => enter
      .append('svg')
      .attr('id', 'svg')
      .style('background-color', 'none')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewbox', `0 0 ${width} ${height}`),
      update => update
      .attr('viewbox', `0 0 ${width} ${height}`)
   )

  // setup padded group
  let pad = svg.selectAll('#pad').data([null])
  .join('g')
  .attr('id', 'pad')
  .attr('transform', `translate(${padLeft}, ${padTop})`) 

  let center = pad.selectAll('#center').data([null])
  .join('g')
  .attr('id', 'center')
  .attr('transform', `translate(${innerWidth/2}, ${innerHeight/2})`) 

  //////////////////
  ///// SHAPES /////
  //////////////////
  
  // Shape variables
  const yellowThick = 40;

  // yellowArrowBegin
  yellowArrowBegin = center.selectAll('#yellowArrowBegin').data([{rad: 120, thick: 3}])
  .join('rect')
  .attr('id', 'yellowArrowBegin')
  .attr('x', -innerWidth/2)
  .attr('y', 0)
  .attr('width', innerWidth/2)
  .attr('height', yellowThick)
  .style('fill', gradYellow[0])

  // yellowArc
  let yellowArc = center.selectAll('#yellowArc').data([{rad: 215, thick: 35}])
  .join('path')
  .attr('id', 'yellowArc')
  .attr('d', simpleArc)
  .style('fill', gradYellow[1])
  
  // blueArc
  const blueArcRad = 240;
  const blueArcPad = 100;

  let blueArc = center.selectAll('#blueArc').data([{rad: blueArcRad, thick: 12, s: -95, e: 90 }])
  .join('path')
  .attr('id', 'blueArc')
  .attr('d', complexArc)
  .style('fill', blue)

  let blueArcBox = center.selectAll('#blueArcBox').data([{rad: blueArcRad, thick: 12}])
  .join('rect')
  .attr('id', 'blueArcBox')
  .attr('x', -innerWidth/2 + blueArcPad)
  .attr('y', 10)
  .attr('width', innerWidth/2  - blueArcRad - blueArcPad)
  .attr('height', d => d.thick)
  .style('fill', blue)


  // blueArcLabels


  // greenArc
  const greenArcRad = 220;
  const greenArcPad = 100;

  let greenArc = center.selectAll('#greenArc').data([{rad: 220, thick: 8, s: -98, e: 90 }])
  .join('path')
  .attr('id', 'greenArc')
  .attr('d', complexArc)
  .style('fill', green)

  let greenArcBox = center.selectAll('#greenArcBox').data([{rad: greenArcRad, thick: 8}])
  .join('rect')
  .attr('id', 'greenArcBox')
  .attr('x', -innerWidth/2 + greenArcPad)
  .attr('y', 24)
  .attr('width', innerWidth/2  - greenArcRad - greenArcPad)
  .attr('height', d => d.thick)
  .style('fill', green)


  // greenArcLabels

  // yellowPie
  let yellowPie = center.selectAll('#yellowPie').data(pie(yellowArcData))
  .join('path')
  .attr('id', 'yellowPie')
  .attr('d', pieArc)
  .style('fill', (d,i) => { if (scaleYellowCircle(i) < aim) { return gradYellow[i] } else { return lightGrey } } )
 
 
  // yellowPieLabels

  // blackEdge
  let blackEdge = center.selectAll('#blackEdge').data([{rad: 120, thick: 3}])
  .join('path')
  .attr('id', 'blackEdge')
  .attr('class', 'blackArc')
  .attr('d', simpleArc)

  // greyHash
  let greyHash = center.selectAll('#greyHash').data(pie(hash))
  .join('path')
  .attr('id', 'greyHash')
  .attr('d', pieArc)
  .style('fill', (d,i) => { if (scaleHashCircle(i) < aim) { return yellow } else { return lightGrey } } )



  // centerDot

  const centerDotRad = 40;
  let centerDot = center.selectAll('#centerDot').data([{rad: 40, thick: 3}])
  .join('path')
  .attr('id', 'centerDot')
  .attr('class', 'blackArc')
  .attr('d', simpleArc)

  // yellowArrowEnd
  yellowArrowEnd = center.selectAll('#yellowArrowEnd').data([{rad: 120, thick: 3}])
  .join('rect')
  .attr('id', 'yellowArrowEnd')
  .attr('x',0)
  .attr('y', 0)
  .attr('width', innerWidth/2 - 100)
  .attr('height', yellowThick)
  .style('fill', gradYellow[3])

  bigArrow = center.selectAll('#bigArrow').data([null])
  .join('path')
  .attr('id', 'bigArrow')
  .attr('d', bigArrowPath)
  .attr('transform', `translate(${innerWidth/2 - 100}, ${-15})`)
  .style('fill', yellow)


  // pointer
  let pointerAim = 180;
  let pointer = center.selectAll('.pointer').data(pointerData)
  .join('path')
  .attr('d', d => arrow(d.w, d.h))
  .attr('class', 'pointer')
  .style('fill', d => d.c)
  .attr('transform', `rotate(${scaleOneToDegrees(aim)})`)

  // centerTinyDot

  const centerTinyDotRad = 15;

  let centerTinyDot = center.selectAll('#centerTinyDot').data([null])
  .join('circle')
  .attr('id', 'centerDot')
  .attr('class', 'blackEdge')
  .attr('r', centerTinyDotRad)

}




///// OPERATIONS /////


function getMousePos(e) {
  return {x:e.clientX,y:e.clientY};
}
document.onmousemove=function(e) {
  var m = getMousePos(e);
  aim = m.x / width;
  console.log(aim)
  render();
};




render();


window.addEventListener('resize', render);