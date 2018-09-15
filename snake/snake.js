import { cellDimension } from '../config';
import { snakeBlock } from './snake_block';

let snake = new Snake();

function Snake() {
  this.dim = cellDimension;
  this.xSpeed = 1;
  this.ySpeed = 0;
  
  this.snakeBlocks = [];

  this.update = function() {
    const tempCoordinates = this.getHeadBlock();
    this.snakeBlocks[0].x += this.xSpeed * this.dim;
    this.snakeBlocks[0].y += this.ySpeed * this.dim;

    for(let i = 1; i < this.snakeBlocks.length; i++) {
      let swapX = this.snakeBlocks[i].x;
      let swapY = this.snakeBlocks[i].y;
      this.snakeBlocks[i].x = tempCoordinates.x;
      this.snakeBlocks[i].y = tempCoordinates.y;
      tempCoordinates.x = swapX;
      tempCoordinates.y = swapY;
    }
  }

  this.changeHeadXCoordinate = function(x) {
    this.snakeBlocks[0].x = x;
  }

  this.changeHeadYCoordinate = function(y) {
    this.snakeBlocks[0].y = y;
  }

  this.goUp = function() {
    this.changeSnakeDirection(0, -1);
  }

  this.goDown = function() {
    this.changeSnakeDirection(0, 1);
  }

  this.goRight = function() {
    this.changeSnakeDirection(1, 0);
  }

  this.goLeft = function() {
    this.changeSnakeDirection(-1, 0);
  }

  this.isGoingUp = function() {
    return this.xSpeed === 0 && this.ySpeed === -1;
  }

  this.isGoingDown = function() {
    return this.xSpeed === 0 && this.ySpeed === 1;
  }

  this.isGoingRight = function() {
    return this.xSpeed === 1 && this.ySpeed === 0;
  }

  this.isGoingLeft = function() {
    return this.xSpeed === -1 && this.ySpeed === 0;
  }

  this.bitesItself = function() {
    const head = this.getHeadBlock();
    const snakeBlocksWithoutHead = this.snakeBlocks.slice(1);
    return snakeBlocksWithoutHead.find(function(currentBlock) {
      return currentBlock.x === head.x && currentBlock.y === head.y;
    });
  }

  this.changeSnakeDirection = function(xDir, yDir) {
    this.xSpeed = xDir;
    this.ySpeed = yDir;
  }

  this.getCoordinates = function() {
    return this.getHeadBlock();
  }

  this.getHeadBlock = function() {
    return {
      x: this.snakeBlocks[0].x,
      y: this.snakeBlocks[0].y,
    }
  }

  this.grow = function() {
    const head = this.getHeadBlock();
    this.addNewBlock(head);
  }

  this.addNewBlock = function(coordinates) {
    const newBlock = new snakeBlock();
    newBlock.x = coordinates.x + this.xSpeed * this.dim;
    newBlock.y = coordinates.y + this.ySpeed * this.dim;
    this.snakeBlocks.unshift(newBlock);
  }

  this.clearBlocks = function() {
    this.snakeBlocks = [];
  }

  this.init = function() {
    this.snakeBlocks.push(new snakeBlock(0, 0));
  }

  this.getLength = function() {
    return this.snakeBlocks.length;
  }
}

export { snake };