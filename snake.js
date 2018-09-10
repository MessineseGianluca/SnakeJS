function Snake() {
  this.dim = snakeDim;
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;
  
  this.update = function() {
    this.x = this.x + this.xSpeed * this.dim;
    this.y = this.y + this.ySpeed * this.dim;        
  }

  this.show = function() {
    fill(255);
    rect(this.x, this.y, this.dim, this.dim);
  }

  this.checkSnakePosition = function(xScreen, yScreen) {
    if(this.x >= xScreen) {
      this.x = 0;
    } else if(this.x < 0) {
      this.x = xScreen - this.dim;
    } else if(this.y >= yScreen) {
      this.y = 0;
    } else if(this.y < 0) {
      this.y = yScreen - this.dim;
    }
  }

  this.changeSnakeDirection = function(xDir, yDir) {
    this.xSpeed = xDir;
    this.ySpeed = yDir;
  }

  this.getCoordinates = function() {
    return { 
      x: this.x, 
      y: this.y 
    };
  }
}
