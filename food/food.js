import { game_graphic } from '../graphic';
import { getRandomPoint } from '../util/util';
import { 
  screenWidth, 
  screenHeight, 
  cellDimension 
} from '../config';

let food = new Food();

function Food() {
  this.x = getRandomPoint(screenWidth, cellDimension);
  this.y = getRandomPoint(screenHeight, cellDimension);
  this.dim = cellDimension;

  this.update = function() {
    this.x = getRandomPoint(screenWidth, cellDimension);
    this.y = getRandomPoint(screenHeight, cellDimension);
  }

  this.isEaten = function(snakeCoordinates) {
    let eaten = false;
    if(this.x === snakeCoordinates.x && this.y === snakeCoordinates.y) {
      eaten = !eaten;
    }
    return eaten;
  }
}

export { food };