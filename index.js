let snake;
let food;

function setup() {
  createCanvas(screenWidth, screenHeight);
  snake = new Snake();
  food = new Food();
  frameRate(frameR);
}

function draw() {
  background(0);
  snake.update();
  snake.show();
  food.show();  
  food.checkIfEatenAndUpdate(snake.getCoordinates());  
  snake.checkSnakePosition(screenWidth, screenHeight);
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
