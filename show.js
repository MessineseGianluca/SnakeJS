import { game_graphic } from './graphic';
import { screenWidth, screenHeight, cellDimension } from './config';
import { snake } from './snake/snake';
import { food } from './food/food';


function printCustomText(fontSize, color, sentence, x, y) {
  game_graphic.textSize(fontSize);
  game_graphic.fill(color);
  game_graphic.text(sentence, x, y);
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

function showSnake() {
  snake.snakeBlocks.forEach(block => {
    game_graphic.fill(0, 255, 0);
    game_graphic.rect(block.x, block.y, cellDimension, cellDimension);
  });
}

function showFood() {
  game_graphic.fill(255, 0, 0); // red color 
  game_graphic.rect(food.x, food.y, cellDimension, cellDimension);
}

export {
  printCustomText,
  showScorePanel,
  showSnake,
  showFood,
};