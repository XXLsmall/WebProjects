var colonne;
var righe;
var w = 60;
var griglia = [];


function setup() {
  createCanvas(600, 600);
  colonne = width/w;
  righe = height/w;
  
  for(var j = 0; j < righe; j++) {
  		for(var i = 0; i < colonne; i++) {
  			var cella = new Griglia(i, j);
  			griglia.push(cella);
  		}
  }
  
}

function draw() {
  background(51);
  for(var i = 0; i < griglia.length; i++) {
  	griglia[i].show();
  }
  
}

function Griglia(i, j) {
	this.i = i;
	this.j = j;
	
	this.show = function() {
		var x = this.i*w;
		var y = this.j*w;
		stroke(255);
		noFill();
		rect(x, y, w, w);
	}
	
}