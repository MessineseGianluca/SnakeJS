import { getRandomPoint } from '../util/util';
import { screenWidth, screenHeight, cellDimension } from '../config';

function snakeBlock() {
  this.x = getRandomPoint(screenWidth, cellDimension);
  this.y = getRandomPoint(screenHeight, cellDimension);
}

export { snakeBlock };