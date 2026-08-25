function setup() {
  createCanvas(600, 600);
  background(240,240,240);
  noStroke();
  angleMode(DEGREES);
  
}

function draw() {
  translate(width/2,height/2);
  fill(1,33,1);
  circle(0,0,580);
  fill(255,125,0);
  circle(0,0,560);
  
   for(let i=0;i<12;i++) {
    rotate(30);
     fill(255,249,225);
    
    ellipse(0,-180,160,200);
  }
  for(let i=0;i<12;i++) {
    rotate(30);
    fill(255,188,0);
    ellipse(0,-170,160,200);
  }
//green rect
for(let i=0;i<12;i++) {
    rotate(30);
    fill(1,33,1);
    rect(0,-180,200,130);
}
//green
  for(let i=0;i<12;i++) {
    rotate(30);
    fill(1,33,1);
    ellipse(0,-140,150,190) }

for(let i=0;i<12;i++) {
  rotate(30);
  fill(255,249,225);
  ellipse(0,-130,150,190);
}
//pink  
  for(let i=0;i<12;i++) {
  rotate(30);
  fill(255,102,178);
  ellipse(0,-110,150,190);
}
    for(let i=0;i<12;i++) {
  rotate(30);
  fill(255);
  ellipse(0,-100,150,190); }

 fill(1,33,1);
  circle(0,0,370); 
  //off white
  fill(255,249,225);
  circle(0,0,360); 
  

  for(let i=0;i<12;i++) {
    rotate(45);
    fill(1,22,1);
  rect(0,0,127,127); }
  
fill(153,0,0);
  circle(0,0,250);

for(let i = 0; i < 6; i++) {
  rotate( 60);
  fill(255,125,0);
  ellipse(0,-65,45,120);
}
for(let i = 0; i < 6; i++) {
  push();
  rotate(i * 60 + 30);
  fill(255,188,0);
  ellipse(0,-55,35,100);
  pop();
}
fill(1,33,1);
circle(0,0,45);

fill(255,102,178);
circle(0,0,30);
  
fill(255,249,225);
circle(0,0,15);

}