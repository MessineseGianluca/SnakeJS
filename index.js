import { initGameGraphic } from './graphic';
import { keyPressedLogic } from './keys';
import { setup, draw } from './game_logic';

const sketch = (s) => {
  s.setup = setup;
  s.draw = draw;
  s.keyPressed = keyPressedLogic;
}

initGameGraphic(sketch);