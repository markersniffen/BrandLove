// get main DIV
const container = d3.select('#box');
let aim = 0;

// get width/height
let height = container._groups[0][0].offsetHeight;
let width = container._groups[0][0].offsetWidth;
console.log(width, height)
const padLeft = 10;
const padRight = 10;
const padBottom = 10;
const padTop = 10;
let innerWidth = width - padLeft - padRight;
let innerHeight = height - padTop - padBottom;

const t1 = d3.transition().duration(100)
const t8 = d3.transition().duration(800)

///// COLORS /////

red = '#FA4435';
green = '3AAA54';
blue = '537FC1';
yellow = 'F7BC17';

gradYellow = ['FFEECF', 'FEE0A5', 'FDD37D', 'F7BC17'];
gradGreen = ['C4E2C9', green];
gradBlue = ['D3E3F5', blue];
gradRed = ['F7BC17', 'EF7332', red];

lightGrey = 'E7E7E8'
gradGrey = ['767677', '5F6469']

//// SHAPES /////
const bigArrowPath = "M100,35C72.89,25.93,55.75,14.35,40.46,0l5.04,15H0v20v20h45.5l-5.04,15C55.75,55.65,72.89,44.07,100,35z"


//// DATA /////

let hash = Array(18).fill({value: 1, rad: 80, thick: 33});
let yellowArcData = Array(4).fill({value: 1, rad: 130, thick: 80});


let pointerData = [
  {h: 100, w: 7, c: gradGrey[0]},
  {h: 100, w: -7, c: gradGrey[1]}
];

