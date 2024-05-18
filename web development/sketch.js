//The setup function only happens once
var pedo=0;


function setup() {
	var cnv = createCanvas(500, 500); //create a 500px X 500px canvas
  cnv.style('margin-left', '450px')
  background(random(68,97,75),pedo); 
}

//The draw function happens over and over again
function draw() {
  //an RGB color for the canvas' background
  //circle
  stroke(68,79,97) // an RGB color for the circle's border
  strokeWeight(3);
  fill(mouseX,68,79,97); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),random(height),25,25); // center of canvas, 20px dia
  fill(72,61,139);
  strokeWeight(5);
  rect(mouseX-25,mouseY+25,50,50);
  fill(115,42,57);
  stroke(100,149,237);
  textSize(pedo); 
  textFont('Italic');
  text('whip',200,260);
  stroke(188,143,143);

}

function mousePressed(){
  if (pedo>=100){
    pedo=0;
    }else{
    pedo=pedo+5;
  }
}
