function Hobbit(name){
  this.name = name;
  this.age = 0;
  var birthdayCounter = 0;
  this.disposition = "homebody";
  this.adult = false;
  this.isShort = true;
  this.hasRing = this.name === 'Frodo';
  this.old = false;

  // or 

  // if(this.name === "Frodo"){
  //   this.hasRing = true;
  // }

}

Hobbit.prototype.celebrateBirthday = function(){

  this.age++;

  if(this.age >= 33){
    this.adult = true;
  }

  if(this.age > 100){
  this.old = true;
  }

}



module.exports = Hobbit;