function Particle() {
	this.x = x;
	this.y = y;
	
	this.update = function() {
		this.x = random(-10, 10);
		this.y = random(-10, 10);
		this.r = 10;
		
		this.x = costrain(this.x, 0, width);
		this.y = costrain(this.y, 0, height);
	}
	
	this.show = function() {
		noStroke();
		var px = floor(this.x / vScale);
		var py = floor(this.y / vScale);
		var col = video.get(px, py);
		//console.log(col);
		fill(col[0], col[1], col[2], slider.value());
		ellipse(this.x, this.y, this.r, this.r);
	}
}