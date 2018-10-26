class Bit {
	constructor(x, y, d, status) {
		this.x = x;
		this.y = y;
		this.r = d/2;
		this.status = status;
	}

	clicked()	{
		if (mouseX > this.x - this.r && mouseX < this.x + this.r)
		{
            if (mouseY > this.y - this.r && mouseY < this.y + this.r)
			{
				this.status = !this.status;
			}
		}
	}



	show() {
		if(this.status == true)
			fill(255);
		else
			fill(51);

		noStroke();
			ellipse(this.x, this.y, this.r*2);

	}
}