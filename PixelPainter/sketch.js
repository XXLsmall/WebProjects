var video;
var vScale = 16;

var particles = [];

var slider;

function setup() {
  createCanvas(640, 480);
  //pixelDensity(1);
  video = loadImage("img.png");
  background(0);
  /*video.size(width/vScale, height/vScale);
  for (var i = 0; i < 100; i++) {
  	particles[i] = new Particle(random(width), random(height));
  }
  slider = createSlider(0, 255, 127);
  background(51);*/
}

function draw() {
  //background(51);
  //image(video, 0, 0);
  /*video.loadPixels();
  for (var i = 0; i < particles.length; i++) {
  	partcles[i].update();
  	particles[i].show();
  }*/
  for (var i = 0; i < 100; i++) {
  var x = random(width);
  var y = random(height);
  
  c = video.get(int(x), int(y));
  fill(c);
  noStroke();
  ellipse(x, y, 10, 10);
  }
}