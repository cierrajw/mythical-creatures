function Unicorn(name, color) {

	this.name = name;
	this.color = color || "white";
}

function Unicorn(){
	
}
Unicorn.prototype.isWhite = function (){
	if(this.color != "white"){
		return false;
	}

}
Unicorn.prototype.says = function(said){

	return `**;* ${said} *;**`;
}

module.exports = Unicorn;