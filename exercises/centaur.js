
function Centaur(name, breed){
  this.name = name;
  this.breed = breed;
  this.cranky = false;
  this.standing = true;
  this.layingDown = false;
  this.runCount = 0;
  this.shootCount = 0;
}

Centaur.prototype.shoot = function(){

  this.shootCount++;

  if (this.shootCount >= 3) {
    this.cranky = true;
  }

  if (this.cranky || this.layingDown) {
    return 'NO!';
  } else if(this.standing){
    return 'Twang!!!';
  }

}

Centaur.prototype.run = function(running){

  this.runCount ++;

  if(this.runCount >= 3){
    this.cranky = true;
  }

  if(this.layingDown){
    return running = 'NO!'
  } 

  return running = "Clop clop clop clop!!!";

}

Centaur.prototype.sleep = function(){

  this.layingDown = true;
  
  if(this.standing){
    this.layingDown = false;
    return 'NO!';
  }  
  else{
    this.layingDown = true;
    this.standing = false;
    this.cranky = false;
    this.shootCount = 0;
    return 'ZZZZ';
  }
}


Centaur.prototype.standUp = function(){
  this.standing = true;
  this.layingDown = false;
}

Centaur.prototype.layDown = function(){
  this.layingDown = true;
  this.standing = false;
}

Centaur.prototype.drinkPotion = function(){


  if(this.layingDown || this.cranky === false){
    this.cranky = true;
    return 'Not while I\'m laying down!';
  }
}



module.exports = Centaur;