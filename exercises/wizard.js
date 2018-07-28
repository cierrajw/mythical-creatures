//can't pass in a falsey through the object in ES5

function Wizard(object){

  this.name = object.name;
  this.bearded = object.bearded;
  this.isRested = true;
  this.spellCounter = 0;

  if(object.bearded === false){
    this.bearded = false;
  }
  else{
    this.bearded = true;
  }
}

Wizard.prototype.incantation = function(spell){

  return spell.toUpperCase();

}

Wizard.prototype.cast = function(){

  if(this.spellCounter < 3){
    this.spellCounter++;
    return 'MAGIC BULLET';
  }
  else{
    this.Rested = false;
    return 'I SHALL NOT CAST!';
  }

}

module.exports = Wizard;