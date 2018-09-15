import { game_graphic } from './graphic';
import { screenWidth, screenHeight } from './config';

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

export {
  printCustomText,
  showScorePanel,
};