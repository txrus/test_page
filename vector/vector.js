class Vector {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));
  }

  update() {
    // ใช้ function add ได้
    this.pos.add(this.vel);
    //this.pos.x = this.pos.x + this.vel.x;
    //this.pos.y = this.pos.y + this.vel.y;


  }

  show() {
    stroke(255, 100);
    strokeWeight(2);
    ellipse(this.pos.x, this.pos.y, 32);
  }
}
