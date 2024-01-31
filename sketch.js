//https://morgan-maumus.github.io/CSC2463---Assignment-1.4/

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 128);
  
  const w = color(255, 255, 255);
  fill(w);
  noStroke();
  circle(200, 200, 200);
  
  const g = color(0, 128, 0);
  fill(g);
  noStroke();
  circle(200, 200, 190);
  
  const p = color(255, 0, 255);
 
  stroke(w);
  strokeWeight(3);
  triangle(200, 108, 250, 276, 170, 215);
  triangle(150, 276, 289, 176, 170, 215);
  triangle(111, 176, 289, 176, 170, 215);
  
  const r = color(255,0,0);
  noStroke();
  fill(r);
  triangle(200, 108, 250, 276, 170, 215);
  triangle(150, 276, 289, 176, 170, 215);
  triangle(111, 176, 289, 176, 170, 215);

}