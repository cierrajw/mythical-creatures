function Werewolf(name, location){
  this.name = name;
  this.location = location;
  this.human = true;
  this.wolf = false;
  this.hungry = false;
}

Werewolf.prototype.change = function(wolf){

  // if(this.human){
    // this.hungry = false;
    this.human = !this.human;
    this.wolf = !this.wolf;

    this.hungry = !this.hungry;


}

Werewolf.prototype.eat = function(victim){

  if(this.hungry){
    // this.hungry = false;
    victim.alive = false;
  }

}


module.exports = Werewolf;

//the human variable is a boolean value and so you can toggle 
//and reassign it to a specific value 
//you can write a function that will switch the boolean value/variable/property etc.

// variable ' false'
// if(variable){} ---> this is true, so "variable" would be true here

// this: function Blah({name: 'christal'}){

// }

// is the same as:

// this.name = (theObject){
//   this.name = theObject.name;
// }