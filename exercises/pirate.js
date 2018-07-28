
function Pirate(name, job){
  this.name = name;
  this.job = 'Scallywag';
  this.cursed = false;
  this.heinousCounter = 0;
}

Pirate.prototype.commitHeinousAct = function(){
  
  this.heinousCounter ++;


  this.cursed = true;
}

module.exports = Pirate;