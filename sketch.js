function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  for (let i = 0; i < 16; i++) {
   stroke(40, 120, 50);
    strokeWeight(2.5);
    line(0, -230, 0, -280);

    fill(230, 120, 40);
    circle(0, -280, 12);
    rotate(22.5);
  }

  rotate(360 / 32);
  for (let i = 0; i < 16; i++) {
    fill(235, 75, 125);
    ellipse(0, -240, 50, 65);

    fill(245, 205, 35);
    ellipse(0, -225, 26, 35);
    rotate(360 / 16);
  }
  fill(240, 100, 145);
  circle(0, 0, 420);

  fill(245, 215, 50);
  circle(0, 0, 390);

  fill(235, 105, 55);
  circle(0, 0, 360);

  for (let i = 0; i < 24; i++) {
    fill(255);
    noStroke();
    circle(0, -165, 8);
    rotate(360 / 24);
  }  

  fill(245, 195, 190);
  circle(0, 0, 300);

  for (let i = 0; i < 8; i++) {
    stroke(40, 120, 50);
    strokeWeight(2.5);
    line(0, -20, 0, -130);

    fill(230, 120, 140);
    stroke(0);
    strokeWeight(1);
    ellipse(0, -130, 15, 22);
    fill(225, 60, 80);
    ellipse(0, -50, 20, 60);

    rotate(360 / 8);
  }

  rotate(360 / 16);
  for (let i = 0; i < 8; i++) {
    fill(245, 135, 155);
    ellipse(0, -75, 50, 110);
    rotate(360 / 8);
  }

  fill(245, 205, 35);
  circle(0, 0, 36);
}