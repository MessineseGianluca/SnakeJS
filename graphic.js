import * as p5 from 'p5/lib/p5.min';

let game_graphic; 

function initGameGraphic(sketch) {
  game_graphic = new p5(sketch);
}

export { game_graphic, initGameGraphic };