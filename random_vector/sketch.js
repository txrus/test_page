
function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0);
}

function draw() {
  translate(width / 2, height / 2); // translate คือ ตั้งให้ค่า arguement เป็นค่า 0, 0 หรือ default

  //let v = createVector(random(-100, 100), random(-100, 100));
  let v = p5.Vector.random2D();
  v.mult(random(50, 100));

  strokeWeight(4);
  stroke(255, 50);
  line(0, 0, v.x, v.y);
}
