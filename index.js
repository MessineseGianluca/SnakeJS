let snake;
let food;
const xScreen = 600;
const yScreen = 600;

function setup() {
  createCanvas(xScreen, yScreen);
  snake = new Snake();
  frameRate(10);
}

function draw() {
  background(0);
  snake.update();
  snake.show();
  justChanged = snake.checkSnakePosition(xScreen, yScreen);
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    snake.changeSnakeDirection(0, -1);
  } else if(keyCode === DOWN_ARROW) {
    snake.changeSnakeDirection(0, 1)
  } else if(keyCode === RIGHT_ARROW) {
    snake.changeSnakeDirection(1, 0);
  } else if(keyCode === LEFT_ARROW) {
    snake.changeSnakeDirection(-1, 0);
  }
}
