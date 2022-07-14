let vector;
function setup() {
  createCanvas(windowWidth, windowHeight)
  vector = new Vector(width / 2, height / 2);
  // put setup code here
}

function draw() {
  background(0);
  vector.update();
  vector.show();
}
