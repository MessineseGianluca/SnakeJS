import { game_graphic } from './graphic';
import * as game from './game_status';
import { snake } from './snake/snake';
import { food } from './food/food';


function keyPressedLogic() {
  if(game.lost) {
    keyPressedWhileGameLost(game_graphic.keyCode);
  } else if(game.pause) {
    keyPressedWhilePaused(game_graphic.keyCode);
  } else {
    keyPressedWhilePlaying(game_graphic.keyCode);
  }
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
    game.changePauseStatus();
  }
}

function keyPressedWhilePaused(keyCode) {
  if(keyCode === game_graphic.ESCAPE) {
    game_graphic.loop();
    game.changePauseStatus();
  }
}

function keyPressedWhileGameLost(keyCode) {
  let spaceBarCode = 32;
  if(keyCode === spaceBarCode) {
    game.changeLostStatus();
    snake.init();
    food.update();
    game_graphic.loop();
  }
}

export { keyPressedLogic };