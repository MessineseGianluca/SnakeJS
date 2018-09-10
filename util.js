function getRandomPoint(rangeEnd, scl) {
  const randValue = Math.floor((Math.random() * rangeEnd));
  return randValue - (randValue % scl);
}