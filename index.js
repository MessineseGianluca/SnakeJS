import * as p5 from 'p5/lib/p5.min';

const { screenWidth, screenHeight, frameR } = require('./config');
const { Snake } = require('./snake/snake');
const { Food } = require('./food/food');
const { checkIfEatenAndUpdate, checkSnakePosition, printCustomText } = require('./game_logic');

let snake;
let food;
let isGamePaused = false;
let isGameLost = false;

const sketch = (s) => {
  s.setup = () => {
    s.createCanvas(screenWidth, screenHeight);
    s.frameRate(frameR);
    initializeData();
  }

  s.draw = () => {
    s.background(0);
    snake.update();
    snake.show(s);
    food.show(s);
    showScorePanel(snake.getLength());
    checkSnakePosition(snake);
    checkIfEatenAndUpdate(snake, food);
    if(snake.bitesItself()) {
      endGame();
    }
  }

  s.keyPressed = () => {
    if(isGameLost) {
      keyPressedWhileGameLost(P5.keyCode);
    } else if(isGamePaused) {
      keyPressedWhilePaused(P5.keyCode);
    } else {
      keyPressedWhilePlaying(P5.keyCode);
    }
  }
}

const P5 = new p5(sketch); 

function initializeData() {
  isGameLost = false;
  snake = new Snake();
  food = new Food();
}

function keyPressedWhilePlaying(keyCode) {
  if(keyCode === P5.UP_ARROW && !snake.isGoingDown()) {
    snake.goUp();
  } else if(keyCode === P5.DOWN_ARROW && !snake.isGoingUp()) {
    snake.goDown();
    snake.changeSnakeDirection(0, 1)
  } else if(keyCode === P5.RIGHT_ARROW && !snake.isGoingLeft()) {
    snake.goRight();
  } else if(keyCode === P5.LEFT_ARROW && !snake.isGoingRight()) {
    snake.goLeft();
  } else if(keyCode === P5.ESCAPE) {
    P5.noLoop();
    changePauseStatus();
  }
}

function keyPressedWhileGameLost(keyCode) {
  let spaceBarCode = 32;
  if(keyCode === spaceBarCode) {
    restartGame();
  }
}

function keyPressedWhilePaused(keyCode) {
  if(keyCode === P5.ESCAPE) {
    P5.loop();
    changePauseStatus();
  }
}

function changePauseStatus() {
  isGamePaused = !isGamePaused;
}

function restartGame() {
  initializeData();
  P5.loop();
}

function endGame() {
  isGameLost = true;
  snake.clearBlocks();

  P5.textAlign(P5.CENTER, P5.CENTER);
  printCustomText(
    screenWidth * 0.1,
    255,
    'Game Lost',
    screenWidth * 0.5,
    screenHeight * 0.4,
    P5,
  );
  printCustomText(
    screenWidth * 0.03,
    255,
    'Press space-bar to restart',
    screenWidth * 0.5,
    screenHeight * 0.5,
    P5,
  );

  P5.noLoop();
}

function showScorePanel(score) {
  P5.textAlign(P5.LEFT, P5.CENTER);
  const scoreText = 'score: ';
  printCustomText(
    screenWidth * 0.05,
    255,
    scoreText.concat(score),
    screenWidth * 0.01,
    screenHeight * 0.02,
    P5,
  );
}