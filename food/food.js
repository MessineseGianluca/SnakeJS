const { getRandomPoint } = require('../util/util');
const { screenWidth, screenHeight, cellDimension } = require('../config');

function Food() {
  this.x = getRandomPoint(screenWidth, cellDimension);
  this.y = getRandomPoint(screenHeight, cellDimension);
  this.dim = cellDimension;

  this.show = function(p5) {
    p5.fill(255, 0, 0); // red color 
    p5.rect(this.x, this.y, this.dim, this.dim);
  }

  this.update = function() {
    this.x = getRandomPoint(screenWidth, cellDimension);
    this.y = getRandomPoint(screenHeight, cellDimension);
  }

  this.isEaten = function(snakeCoordinates) {
    this.x === snakeCoordinates.x && this.y === snakeCoordinates.y ? eaten = true : eaten = false;
    return eaten;
  }
}

module.exports = {
  Food,
};