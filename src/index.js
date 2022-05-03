import _ from 'lodash';
import {sketch} from './p5Stuff';
// console.log(p5)
const p5 = require('p5');
let p5js = new p5(sketch);

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());


