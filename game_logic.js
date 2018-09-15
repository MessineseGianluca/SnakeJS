const { screenWidth, screenHeight, cellDimension } = require('./config');

function checkIfEatenAndUpdate(snake, food) {
  if(food.isEaten(snake.getCoordinates())) {
    snake.grow();
    food.update();
  }
}

function checkSnakePosition(snake) {
  const head = snake.getHeadBlock();
  if(head.x >= screenWidth) {
    snake.changeHeadXCoordinate(0);
  } else if(head.x < 0) {
    snake.changeHeadXCoordinate(screenWidth - cellDimension);
  } else if(head.y >= screenHeight) {
    snake.changeHeadYCoordinate(0);
  } else if(head.y < 0) {
    snake.changeHeadYCoordinate(screenHeight - cellDimension);
  }
}

function printCustomText(fontSize, color, sentence, x, y, P5) {
  P5.textSize(fontSize);
  P5.fill(color);
  P5.text(sentence, x, y);
}

module.exports = {
  checkIfEatenAndUpdate,
  checkSnakePosition,
  printCustomText,
};