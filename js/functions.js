// define the functions to hide initial startup windows
function newgameButton() {
	document.getElementById('newgame').classList.add('hide');
}

function backstory() {
	document.getElementById('backstory').classList.add('hide');
	loadStandardScreen();
}

// define dialog functionality (pass in three strings)
function dialog(messagetxt,buttontxt,buttonFunction) {
	var dialogHTML = '<p id="message"></p><div id="dialog-button" class="small-button" onclick="' + buttonFunction +'"></div>';
	document.getElementById('dialog-window').innerHTML = dialogHTML; // drops the dialog HTML into the page
	document.getElementById('message').innerHTML = messagetxt;
	document.getElementById('dialog-button').innerHTML = buttontxt;
	document.getElementById('dialog-window').classList.add('promote');
	document.getElementById('dialog-window').classList.remove('hide');
}

// generic function to close a dialog box
function closeDialog() {
	document.getElementById('dialog-window').classList.add('hide');
	document.getElementById('dialog-window').classList.remove('promote');
}

// define rest action
function rest(hero) {
	hero.hp = hero.total_hp; // restore hp to total or maximum value
	loadHeroHp(hero);
}

/** Battle Related Functions **/

function startBattle(hero,enemy) {
	dialog("An enemy approaches","ok","whoseTurn = continueBattle(" + hero.objectname + "," + enemy.objectname + ",whoseTurn)");
	loadBattleScreen(hero,enemy); 
}

// decides what comes next, after the move was made (triggered by clicking 'ok' on a battle dialog box)
function continueBattle(hero,enemy,whose_turn) {
	// Close the current dialog box
	closeDialog();
	// Check for casualties
	if (hero.hp <= 0) {
		// hero is dead. end game.
		dialog("You have been defeated. Game over.","Bummer","document.location.reload()");
	} else if (enemy.hp <= 0) {
		// enemy is dead. end battle sequence
		dialog("You have won the fight!","Good", "enemyCounter += 1; endBattle(" + hero.objectname + "," + enemy.objectname + ")");
		whose_turn = "undetermined";
		return whose_turn;
	} else {	// nobody is dead, so continue battle
		// Determine whose turn it is
		if (whose_turn === "undetermined") {
			// compare levels to see who goes first
			if (hero.lvl >= enemy.lvl) {
				whose_turn = "hero";
			} else {
				whose_turn = "enemy";
			}
		} 
		
		if (whose_turn === "enemy") {
			/** Enemy's turn **/
			// randomly select which move to use
			var rand = Math.random();
			var chosen_attack_number = Math.floor((rand * enemy.attacks.length)); // random int between 0 and number of attack choices
			var chosen_attack = enemy.attacks[chosen_attack_number];
			
			// run the move
			move(enemy, hero, chosen_attack);
			whose_turn = "hero"; // set value so next turn is hero's turn
		} else {
			// Hero's turn
			whose_turn = "enemy"; // set value so next turn is enemy's turn
		}
	}
	
return whose_turn;
}

// define the 'move' function which is executed when someone makes a move
function move(attacker, defender, theattack) { 

  // To do
  // - bar drop animations (see end of load.js for idea, and use jquery for delays)
  
  /** attacker attacks **/
  // formula for determining the damage of the attack
  var advantage = 1 + (0.2 * (attacker.atk - defender.def));
  if (advantage < 0) { advantage = 0.01; } // negetive advantage causes an attack to give hp to the enemy. this temporary fix throttles the amount of advantage you can have.
  var damage = advantage * theattack.pwr; // damage in decimal
  damage = damage * (0.01 * (90 + (Math.random() * 20))); // damage in decimal with randomization
  damage = Math.floor(damage); // final damage as an integer
  
  // determine if the attack hits (accuracy check)
  var acc_check = Math.random() * 100;
  if (acc_check < theattack.accr) {
	// the attack was successful
	var theMessage = attacker.name + " used " + theattack.name + ". <br />" + attacker.name + "'s attack was successful.";
	dialog(theMessage,"ok","whoseTurn = continueBattle(ourhero,enemyList[enemyCounter],whoseTurn)");
	//set the defender's hit points
	defender.hp = defender.hp - damage;
    if (defender.hp < 0) {
      defender.hp = 0;
    }  
  } else {
    // the attack was not successful
	var theMessage = attacker.name + " used " + theattack.name + ". <br />" + attacker.name + "'s  attack missed.";
	dialog(theMessage,"ok","whoseTurn = continueBattle(ourhero,enemyList[enemyCounter],whoseTurn)");
  }

  //refreshes screen
  loadBattleScreen(ourhero,enemyList[enemyCounter]); 
}

// function that calculates experience and leveling up (with dialog boxes)
function endBattle(hero,enemy) {
	// grant exp points
	var exp_earned = 40 + (3 * enemy.lvl);
    hero.exp = hero.exp + exp_earned;
	var message = "You earned " + exp_earned + " experience points."
	
	// test to see if you leveled up
	if (hero.exp >= hero.lvl_up_exp) {
	  // reset experience bar
	  hero.exp = hero.exp - hero.lvl_up_exp;
	  
	  // increase level by 1
	  hero.lvl = hero.lvl + 1;
	  message += " You are now a level " + hero.lvl + " alchemist!";
	
	  // increase stats
	  hero.atk = hero.atk + Math.floor(1.7 + (0.1 * hero.lvl) - (0.06 * hero.lvl));
	  hero.def = hero.def + Math.floor(1.7 + (0.1 * hero.lvl) - (0.06 * hero.lvl));
	  message += " Your stats: Attack - " + hero.atk + ". Defense - " + hero.def + ".";
	  
	  // recalculate experience to level up
	  hero.lvl_up_exp = 100 * hero.lvl;
	  
	} else {
	  // you didn't level up
	}
	
	// it looks better to load these before the rest of the standard screen
	loadHeroExp(hero);
	loadHeroLvl(hero);
	
	dialog(message,"Nice!","closeDialog(); loadStandardScreen();");
	//loadStandardScreen(); // refresh screen (with new exp bar / level)
}