import { game_graphic } from './graphic';
import { 
  screenWidth, 
  screenHeight, 
  cellDimension, 
  frameRate 
} from './config';
import { snake } from './snake/snake';
import { food } from './food/food';
import { 
  printCustomText, 
  showScorePanel, 
  showSnake, 
  showFood 
} from './show';
import * as game from './game_status';

function setup() {
  game_graphic.createCanvas(screenWidth, screenHeight);
  game_graphic.frameRate(frameRate);
  snake.init();
}

function draw() {
  game_graphic.background(0);
  snake.update();
  showSnake(game_graphic);
  showFood(game_graphic);
  showScorePanel(snake.getLength());
  checkSnakePosition();
  checkIfEatenAndUpdate();
  if(snake.bitesItself()) {
    endGame();
  }
}

function checkIfEatenAndUpdate() {
  if(isFoodEaten()) {
    snake.grow();
    food.update();
  }
}


function isFoodEaten() {
  const snakeCoordinates = snake.getCoordinates();
  const foodCoordinates = food.getCoordinates();
  let eaten = false;
  if(
    foodCoordinates.x === snakeCoordinates.x && 
    foodCoordinates.y === snakeCoordinates.y
  ) {
    eaten = true;
  }
  return eaten;
}

function checkSnakePosition() {
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

function endGame() {
  game.changeLostStatus();
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

export {
  setup,
  draw,
};