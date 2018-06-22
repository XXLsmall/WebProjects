//Blobs scripts

//Called on new creation of a Blob (setup)
//x = xPos, y = yPos, r = ray
function Blob(x, y, r) {
	//Vector with coordinates
	this.pos = createVector(x, y);
	this.r = r;
	
	//Update default function
	this.update = function() {
		//Velocity Vector
		var vel = createVector(mouseX-width/2, mouseY-height/2);
		vel.sub(this.pos);
		vel.setMag(3);
		this.pos.add(vel);
	}
	
	//On event eat
	this.eats = function(other) {
		var d = p5.Vector.dist(this.pos, other.pos);
		if(d < this.r + other.r) {
			var sum = PI * this.r * this.r + PI * other.r * other.r;
			this.r = sqrt(sum/PI);
			
			//this.r += other.r*0.2;
			return true;
		} else {
			return false;
		}
	}
	//Show default function
	this.show = function() {
		//Draw white
		fill(255);
		//Create the graphic Blob
		ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
	}
}