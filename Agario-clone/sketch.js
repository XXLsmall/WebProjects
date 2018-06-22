//Basic script

var blob;

var blobs = [];
var zoom = 1;

//On setup 
function setup() {
  //Create the canvas
  createCanvas(600, 600);
  //Create a new blob
  blob = new Blob(0, 0, 64);
  //Create the food
  for (var i = 0; i < 50; i++){
    //Get random coordinates
  	var x = random(-width, width);
  	var y = random(-height, height);
    //Add a blob to the array
  	blobs[i] = new Blob(x, y, 16);
  }
}

function draw() {
  //Black background
  background(0);
  
  translate(width/2, height/2);
  var newzoom = 64 / blob.r;
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);

  //Draw all the food
  for (var i = blobs.length-1; i >= 0; i--) {
  	blobs[i].show();
    //When a food is eated
  	if (blob.eats(blobs[i])) {
  		blobs.splice(i, 1);
  	}
  }
  
  blob.show();
  blob.update();
}