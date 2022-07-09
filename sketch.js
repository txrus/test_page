var cols, rows;
var w = 40;
var grid = []; // การสร้าง array ของ js 
var current;
function setup() {
  createCanvas(400, 400);
  cols = floor(width / w);
  rows = floor(height / w)
  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var cell = new Cell(i, j); // ลักษณะเหมือนการสร้าง object เลยแหะ น่าจะเป็น object จำนวน cell(ตาราง) จะถูกสร้างตามตัว cols row  
      // ต่อไปสร้างตัวแปร array ซะ ! เพื่อที่จะเก็บค่าของ cell แต่ละ loop คำถามจะทำไปทำไม ทำไปเพราะเดี๋ยวเราต้องใช้ตำแหน่งของแต่ละ cell มาละระบุที่อยู่ของ ตัว maze runner
      grid.push(cell);
    }
  }
  current = grid[0];
}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1
  }
  return i + j * cols;
}

function draw() {
  background(51);
  for (var i = 0; i < grid.length; i++) {
    grid[i].show();

  }

  current.visited = true;
  var next = current.checkNeightbors();
  if (next) {
    next.visited = true;
    current = next;
  }
}


function Cell(i, j) {
  this.i = i;
  this.j = j;
  this.walls = [false, true, true, true]; // มองเป็นตัวเปิดปิด  top right bottom left
  this.visited = false;

  this.checkNeightbors = function() {
    var neighbors = [];
    var top = grid[index(i, j - 1)];
    var right = grid[index(i + 1, j)];
    var bottom = grid[index(i, j + 1)];
    var left = grid[index(i - 1, j)];

    if (top && !top.visited) {
      neighbors.push(top);
    }
    if (right && !right.visited) {
      neighbors.push(right);
    }
    if (bottom && !bottom.visited) {
      neighbors.push(bottom);
    }
    if (left && !left.visited) {
      neighbors.push(left);
    }
    if (neighbors.length > 0) {
      var r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else {
      return undefined;
    }
  }

  this.show = function() {
    var x = this.i * w;
    var y = this.j * w;
    stroke(255);
    if (this.walls[0]) {
      line(x, y, x + w, y + w);
    }
    if (this.walls[1]) {
      line(x + w, y, x + w, y + w);
    }
    if (this.walls[2]) {
      line(x + w, y + w, x, y + w);
    }
    if (this.walls[3]) {
      line(x, y + w, x, y);
    }
    if (this.visited) {
      fill(255, 255, 0, 100);
      rect(x, y, w, w);
    }

  }
}
