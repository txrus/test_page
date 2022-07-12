let cols, rows;
const w = 40;
const grid = []; // การสร้าง array ของ js 
let current;
function setup() {
  createCanvas(400, 400);
  cols = floor(width / w);
  rows = floor(height / w);
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let cell = new Cell(i, j); // ลักษณะเหมือนการสร้าง object เลยแหะ น่าจะเป็น object จำนวน cell(ตาราง) จะถูกสร้างตามตัว cols row  
      // ต่อไปสร้างตัวแปร array ซะ ! เพื่อที่จะเก็บค่าของ cell แต่ละ loop คำถามจะทำไปทำไม ทำไปเพราะเดี๋ยวเราต้องใช้ตำแหน่งของแต่ละ cell มาละระบุที่อยู่ของ ตัว maze runner
      grid.push(cell); // ใส่ตำแหน่งของ cell มองค่า i j เป็นตำแหน่ง x y 
    }
  }
  current = grid[int(random(0, grid.length))];
}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1
  }
  return i + j * cols;
}

function draw() {
  background(51);
  for (let i = 0; i < grid.length; i++) {
    grid[i].show();

  }

  current.visited = true;
  let next = current.checkNeightbors();
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
    let neighbors = [];
    let top = grid[index(i, j - 1)];
    let right = grid[index(i + 1, j)];
    let bottom = grid[index(i, j + 1)];
    let left = grid[index(i - 1, j)];

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
      let r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else {
      return undefined;
    }
  }

  this.show = function() {
    let x = this.i * w;
    let y = this.j * w;
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
      fill(0, 255, 0, 100);
      rect(x, y, w, w);
    }

  }
}
function refreshPage() {
  window.location.reload();
}
