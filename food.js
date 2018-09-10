function getRandomPoint(rangeEnd, scl) {
  const randValue = Math.floor((Math.random() * rangeEnd));
  return randValue - (randValue % scl);
}

function Food() {
  this.x = getRandomPoint(screenWidth, snakeDim);
  this.y = getRandomPoint(screenHeight, snakeDim);
  this.dim = snakeDim;

  this.show = function() {
    fill(255, 0, 0); // red color 
    rect(this.x, this.y, this.dim, this.dim);
  }

  this.checkIfEatenAndUpdate = function(snakeCoordinates) {
    if(this.isEaten(snakeCoordinates)) {
      this.update();
    }
  }

  this.update = function() {
    this.x = getRandomPoint(screenWidth, snakeDim);
    this.y = getRandomPoint(screenHeight, snakeDim);
  }

  this.isEaten = function(snakeCoordinates) {
    this.x === snakeCoordinates.x && this.y === snakeCoordinates.y ? eaten = true : eaten = false;
    return eaten;
  }
}