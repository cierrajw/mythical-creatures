function Dragon(name, rider, color){
	this.name = name;
	this.rider = rider;
	this.color = color;
	this.hungry = true;
	this.eatCount = 0;
}

Dragon.prototype.eat = function(){
	this.eatCount++;
	if(this.eatCount >= 3){
		this.hungry = false;
	}
}

module.exports = Dragon;