let snake;
let food;
let isGamePaused = true;
let isGameLost = false;

function setup() {
  createCanvas(screenWidth, screenHeight);
  initializeData();
  frameRate(frameR);
}

function draw() {
  background(0);
  snake.update();
  snake.show();
  food.show();
  showScorePanel(snake.getLength());
  checkIfEatenAndUpdate(food, snake);
  snake.checkSnakePosition(screenWidth, screenHeight);
  if(snake.bitesItself()) {
    endGame();
  }
}

function initializeData() {
  isGameLost = false;
  snake = new Snake();
  food = new Food();
}

function checkIfEatenAndUpdate() {
  if(food.isEaten(snake.getCoordinates())) {
    snake.grow();
    food.update();
  }
}

function keyPressed() {
  if(isGameLost) {
    keyPressedWhileGameLost(keyCode);
  } else if(isGamePaused) {
    keyPressedWhilePaused(keyCode);
  } else {
    keyPressedWhilePlaying(keyCode);
  }
}

function keyPressedWhilePaused(keyCode) {
  if(keyCode === UP_ARROW && !snake.isGoingDown()) {
    snake.goUp();
  } else if(keyCode === DOWN_ARROW && !snake.isGoingUp()) {
    snake.goDown();
    snake.changeSnakeDirection(0, 1)
  } else if(keyCode === RIGHT_ARROW && !snake.isGoingLeft()) {
    snake.goRight();
  } else if(keyCode === LEFT_ARROW && !snake.isGoingRight()) {
    snake.goLeft();
  } else if(keyCode === ESCAPE) {
    noLoop();
    changePauseStatus();
  }
}

function keyPressedWhileGameLost(keyCode) {
  let spaceBarCode = 32;
  if(keyCode === spaceBarCode) {
    restartGame();
  }
}

function keyPressedWhilePlaying(keyCode) {
  if(keyCode === ESCAPE) {
    loop();
    changePauseStatus();
  }
}

function changePauseStatus() {
  isGamePaused = !isGamePaused;
}

function restartGame() {
  initializeData();
  loop();
}

function endGame() {
  isGameLost = true;
  snake.clearBlocks();

  textAlign(CENTER, CENTER);
  printCustomText(
    screenWidth * 0.1,
    255,
    'Game Lost',
    screenWidth * 0.5,
    screenHeight * 0.4,
  );
  printCustomText(
    screenWidth * 0.03,
    255,
    'Press space-bar to restart',
    screenWidth * 0.5,
    screenHeight * 0.5,
  );

  noLoop();
}

function printCustomText(fontSize, color, sentence, x, y) {
  textSize(fontSize);
  fill(color);
  text(sentence, x, y);
}

function showScorePanel(score) {
  textAlign(LEFT, CENTER);
  const scoreText = 'score: ';
  printCustomText(
    screenWidth * 0.05,
    255,
    scoreText.concat(score),
    screenWidth * 0.01,
    screenHeight * 0.02,
  );
}