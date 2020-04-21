function rad(d) { return d * Math.PI/180  }

const simpleArc = d3.arc()
  .startAngle(rad(-90))
  .endAngle(rad(90))
  .innerRadius(d => d.rad)
  .outerRadius(d => d.rad + d.thick)

const complexArc = d3.arc()
  .startAngle(d => rad(d.s))
  .endAngle(d => rad(d.e))
  .innerRadius(d => d.rad)
  .outerRadius(d => d.rad + d.thick)

const pieArc = d3.arc()
  .innerRadius(d => d.data.rad)
  .outerRadius(d => d.data.rad + d.data.thick)

const pie = d3.pie()
.startAngle(rad(-90))
.endAngle(rad(90))
.value(d => d.value)
.padAngle(.02)

function arrow(w, h) {
  return `M 0,0 L0,${h} L${-w},0 z`
}

// scales

const scaleYellow = d3.scaleLinear()
  .domain(yellowArcData)
  .range(gradYellow)

const scaleHashCircle = d3.scaleLinear()
  .domain([0, hash.length])
  .range([0, 1])

const scaleYellowCircle = d3.scaleLinear()
  .domain([0, yellowArcData.length])
  .range([0, 1])

const scaleOneToDegrees = d3.scaleLinear()
  .domain([0, 1])
  .range([90, 270])