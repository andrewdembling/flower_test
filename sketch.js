var angle=0;
var angle2=0;

function setup() {
  createCanvas(600,600)
}

function draw() {

background(0,0,255)

  angleMode(degrees);
  
  
push();
  translate(mouseX,mouseY);
  rotate(angle+90);
  fill(255,0,0);
  rect(0,0,60,60);
  pop();
  angle += 0.01;
  
  push();
  translate(mouseX,mouseY);
  rotate(angle2);
  fill(255,0,0);
  rect(0,0,60,60);
  pop();
  angle2 += 0.01;
  
  push();
  translate(mouseX,mouseY);
  rotate(angle2+90);
  fill(255,0,0);
  rect(0,0,60,60);
  pop();
  angle += 0.01;
  
   push();
  translate(mouseX,mouseY);
  rotate(angle);
  fill(255,0,0);
  rect(0,0,60,60);
  pop();
  angle += 0.01;

   push();
  translate(mouseX,mouseY);
  rotate(angle+180);
  fill(255,0,0);
  rect(0,0,60,60);
  pop();
  angle += 0.01;

push();
  translate(mouseX,mouseY);
  rotate(angle2+180);
  fill(255,0,0);
  rect(0,0,60,60);
  pop();
  angle += 0.01;
  
  push();
  translate(mouseX,mouseY);
  rotate(angle2+270);
  fill(255,0,0);
  rect(0,0,60,60);
  pop();
  angle += 0.01;
  
  push();
  translate(mouseX,mouseY);
  rotate(angle+270);
  fill(255,0,0);
  rect(0,0,60,60);
  pop();
  angle += 0.01;
  
   push();
  translate(mouseX,mouseY);
  rotate(-angle);
  fill(255,0,0);
  rect(0,0,60,60);
  pop();
  angle += 0.01;
  
  push();
  translate(mouseX,mouseY);
  rotate(-angle+90);
  fill(255,0,0);
  rect(0,0,60,60);
  pop();
  angle += 0.01;
  
  push();
  translate(mouseX,mouseY);
  rotate(-angle2);
  fill(255,0,0);
  rect(0,0,60,60);
  pop();
  angle2 += 0.01;
  
  push();
  translate(mouseX,mouseY);
  rotate(-angle2+90);
  fill(255,0,0);
  rect(0,0,60,60);
  pop();
  angle += 0.01;
  

   push();
  translate(mouseX,mouseY);
  rotate(-angle+180);
  fill(255,0,0);
  rect(0,0,60,60);
  pop();
  angle += 0.01;

push();
  translate(mouseX,mouseY);
  rotate(-angle2+180);
  fill(255,0,0);
  rect(0,0,60,60);
  pop();
  angle += 0.01;
  
  push();
  translate(mouseX,mouseY);
  rotate(-angle2+270);
  fill(255,0,0);
  rect(0,0,60,60);
  pop();
  angle += 0.01;
  
  push();
  translate(mouseX,mouseY);
  rotate(-angle+270);
  fill(255,0,0);
  rect(0,0,60,60);
  pop();
  angle += 0.01;
  
  fill(0,255,0);
  triangle(200,600,400,600,mouseX,mouseY);
  
    fill(255,200,0);
  ellipse(mouseX,mouseY,75,75);
    }
  