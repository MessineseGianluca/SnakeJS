const { screenWidth, screenHeight, frameR } = require('./config');
const { Snake } = require('./snake/snake');
const { Food } = require('./food/food');
const { 
  checkIfEatenAndUpdate, 
  checkSnakePosition, 
  printCustomText 
} = require('./game_logic');

import { game_graphic, initGameGraphic } from './graphic';

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
      keyPressedWhileGameLost(s.keyCode);
    } else if(isGamePaused) {
      keyPressedWhilePaused(s.keyCode);
    } else {
      keyPressedWhilePlaying(s.keyCode);
    }
  }
}

initGameGraphic(sketch);

function initializeData() {
  isGameLost = false;
  snake = new Snake();
  food = new Food();
}

function keyPressedWhilePlaying(keyCode) {
  if(keyCode === game_graphic.UP_ARROW && !snake.isGoingDown()) {
    snake.goUp();
  } else if(keyCode === game_graphic.DOWN_ARROW && !snake.isGoingUp()) {
    snake.goDown();
    snake.changeSnakeDirection(0, 1)
  } else if(keyCode === game_graphic.RIGHT_ARROW && !snake.isGoingLeft()) {
    snake.goRight();
  } else if(keyCode === game_graphic.LEFT_ARROW && !snake.isGoingRight()) {
    snake.goLeft();
  } else if(keyCode === game_graphic.ESCAPE) {
    game_graphic.noLoop();
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
  if(keyCode === game_graphic.ESCAPE) {
    game_graphic.loop();
    changePauseStatus();
  }
}

function changePauseStatus() {
  isGamePaused = !isGamePaused;
}

function restartGame() {
  initializeData();
  game_graphic.loop();
}

function endGame() {
  isGameLost = true;
  snake.clearBlocks();

  game_graphic.textAlign(game_graphic.CENTER, game_graphic.CENTER);
  printCustomText(
    screenWidth * 0.1,
    255,
    'Game Lost',
    screenWidth * 0.5,
    screenHeight * 0.4,
    game_graphic,
  );
  printCustomText(
    screenWidth * 0.03,
    255,
    'Press space-bar to restart',
    screenWidth * 0.5,
    screenHeight * 0.5,
    game_graphic,
  );

  game_graphic.noLoop();
}

function showScorePanel(score) {
  game_graphic.textAlign(game_graphic.LEFT, game_graphic.CENTER);
  const scoreText = 'score: ';
  printCustomText(
    screenWidth * 0.05,
    255,
    scoreText.concat(score),
    screenWidth * 0.01,
    screenHeight * 0.02,
    game_graphic,
  );
}