/* Define javascript classes for objects in the game world 
 * This file should be loaded 1st
 *
 */

/* 'person' classes */
function person(thename, theobjectname, level, hitpoints, attack, defense, attacks, filename) {
  /* define properties */
  this.name = thename;
  this.objectname = theobjectname; //exact (case sensitive) name of the object
  this.lvl = level; // level
  this.hp = hitpoints;
  this.total_hp = hitpoints;
  this.exp = 0; // initial # of exp points
  this.lvl_up_exp = 100; // # of exp points needed to level up
  this.atk = attack; // default attack
  this.def = defense; // default defense
  this.attacks = attacks; // array of learned attacks
  this.img = filename; // filename of large image
  this.gold = 20; // amount of gold -- default is 20 pieces
  //this.ele = elements; // array of elements -- inactive
}

/* attack class, for creating different attacks */
function attack(thename, theobjectname, power, accuracy) {
  this.name = thename; // attack name, like punch, or kick
  this.objectname = theobjectname; // exact (case sensitive) name of the object
  this.pwr = power; // attack power
  this.accr = accuracy; // attack accuracy
  this.type = 'offensive'; // attack type (offensive, defensive, alchemy, etc. -- default is offensive)
}

/* eventually we can pass in attack type and conditionally
   allow different types of attacks do different things */

/* types of items */
// - upgrades (one-time use that increases your stats, inculding rares)
// - health (one-time use that increases your health)
// - gear (items you can equipt to increase your stats / abilities -- ex. you can equip a rock in order to have the option to do rock alchemy moves)
// - special (???)
//
// Each type of item should eventually have a class