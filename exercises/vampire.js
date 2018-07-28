function Vampire(name, pet){

	this.name = name;
	this.pet = pet || "bat";
}

//if vampire is thirsty
//return the function as true
Vampire.prototype.thirsty = function(){
	return true;
}

//if vampire has drink property
//then this.thirsty is false
Vampire.prototype.drink = function(){
	this.thirsty = false;
}

module.exports = Vampire;