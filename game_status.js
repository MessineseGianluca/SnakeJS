let pause = false;
let lost = false;

function changePauseStatus() {
  pause = !pause;
}

function changeLostStatus() {
  lost = !lost;
}

export {   
  pause,
  lost,
  changePauseStatus,
  changeLostStatus,
};