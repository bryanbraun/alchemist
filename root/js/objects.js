/** Define the objects & variables in our world **/

/* define attacks in our world */
// function attack(thename,theobjectname,power,accuracy)
var punch = new attack("Punch", "punch", 10, 100);
var kick = new attack("Kick", "kick", 12, 90);
var rockThrow = new attack("Rock Throw", "rockThrow", 14, 80);
var rockSlide = new attack("Rock Slide", "rockSlide", 16, 82);
var waterJet = new attack("Water Jet","waterJet", 10, 100);
var waterBlast = new attack("Water Blast", "waterBlast", 18, 85);
var fireBall = new attack("Fireball", "fireBall", 13, 100);
var flameThrower = new attack("Flame Thrower", "flameThrower", 20, 90);
var obliviate = new attack("Obliviate", "obliviate", 25, 30);

// define attack packages (arrays with variable names of attack objects)
var basic_attacks = [punch,kick];
var basic_fire_attacks = [punch,fireBall,flameThrower];
var basic_stone_attacks = [punch,rockThrow,rockSlide];
var basic_water_attacks = [punch,waterJet,waterBlast];
var epic_attacks = [obliviate];

// define people
// person(thename, theobjectname, level, hitpoints, attack, defense, attacks, filename)
var ourhero = new person("Our Hero", "ourhero", 1, 40, 5, 5, basic_attacks, 'hero.jpg');
var minion = new person("Minion", "minion", 1, 30, 3, 3, basic_attacks, 'minion.jpg');
var minion2 = new person("Minion", "minion2", 2, 38, 4, 3, basic_attacks, 'minion.jpg');
var minion3 = new person("Minion", "minion3", 2, 30, 4, 4, basic_attacks, 'minion.jpg');
var minion4 = new person("Minion", "minion4", 3, 50, 5, 6, basic_attacks, 'minion.jpg');
var minion5 = new person("Minion", "minion5", 4, 30, 6, 7, basic_attacks, 'minion.jpg');
var minion6 = new person("Minion", "minion6", 5, 40, 7, 8, basic_attacks, 'minion.jpg');
var minion7 = new person("Minion", "minion7", 6, 40, 8, 8, basic_attacks, 'minion.jpg');
var waterMinion = new person("Water Minion", "waterMinion", 1, 35, 3, 3, basic_water_attacks, 'waterminion.png');
var waterMinion2 = new person("Water Minion", "waterMinion2", 2, 38, 4, 3, basic_water_attacks, 'waterminion.png');
var waterMinion3 = new person("Water Minion", "waterMinion3", 3, 42, 5, 4, basic_water_attacks, 'waterminion.png');
var waterMinion4 = new person("Water Minion", "waterMinion4", 4, 55, 6, 7, basic_water_attacks, 'waterminion.png');
var waterMinion5 = new person("Water Minion", "waterMinion5", 5, 60, 7, 7, basic_water_attacks, 'waterminion.png');
var stoneMinion = new person("Stone Minion", "stoneMinion", 1, 35, 3, 3, basic_stone_attacks, 'stoneminion.png');
var stoneMinion2 = new person("Stone Minion", "stoneMinion2", 2, 38, 4, 3, basic_stone_attacks, 'stoneminion.png');
var stoneMinion3 = new person("Stone Minion", "stoneMinion3", 3, 40, 5, 4, basic_stone_attacks, 'stoneminion.png');
var stoneMinion4 = new person("Stone Minion", "stoneMinion4", 4, 40, 6, 6, basic_stone_attacks, 'stoneminion.png');
var stoneMinion5 = new person("Stone Minion", "stoneMinion5", 5, 42, 7, 7, basic_stone_attacks, 'stoneminion.png');
var fireMinion = new person("Fire Minion", "fireMinion", 1, 35, 3, 3, basic_fire_attacks, 'fireMinion.png');
var fireMinion2 = new person("Fire Minion", "fireMinion2", 2, 38, 5, 4, basic_fire_attacks, 'fireminion.png');
var fireMinion3 = new person("Fire Minion", "fireMinion3", 3, 40, 6, 6, basic_fire_attacks, 'fireminion.png');
var fireMinion4 = new person("Fire Minion", "fireMinion4", 4, 40, 7, 8, basic_fire_attacks, 'fireminion.png');
var fireMinion5 = new person("Fire Minion", "fireMinion5", 5, 42, 9, 9, basic_fire_attacks, 'fireminion.png');
var epicMinion = new person("Epic Minion", "epicMinion", 20, 150, 25, 25, epic_attacks, 'minion.jpg'); // impossible last boss

// define other stuff
var enemyCounter = 0; // determines which enemy you are on
var whoseTurn = "undetermined"; // tells us to calculate who goes first in a battle
var enemyList = [minion,
				 minion2,
				 waterMinion,
				 stoneMinion2,
				 minion3,
				 waterMinion2,
				 minion4,
				 stoneMinion,
				 waterMinion3,
				 stoneMinion4,
				 minion5,
				 fireMinion,
				 waterMinion4,
				 stoneMinion3,
				 minion6,
				 fireMinion3,
				 stoneMinion5,
				 minion7,
				 fireMinion4,
				 waterMinion5,
				 fireMinion5,
				 epicMinion
				]; // list of enemies to fight

