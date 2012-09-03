/** define all 'microfunctions' for loading info **/
// Hero's microfunctions
function loadHeroImage(hero) {
	var large_hero_image = hero.img;
	document.getElementById("hero-image").innerHTML = '<img id="hero" src="images/people/' + large_hero_image + '" />';
}

function loadHeroName(hero) {
	var hero_name = hero.name;
	document.getElementById("hero-name").innerHTML = hero_name;
}

function loadHeroLvl(hero) {
	var hero_level = "Lvl. " + hero.lvl;
	document.getElementById("hero-level").innerHTML = hero_level; 
}

function loadHeroHp(hero) {
	var hero_hpdivs = '<span>HP</span><div id="hero-hp-bar"></div>';
	document.getElementById("hero-hp-bar-wrapper").innerHTML = hero_hpdivs;
	
	var hero_hpbar = '<div class="hp-bar" style="width:' + (130 - (130 * (1 - (hero.hp / hero.total_hp)))) + 'px;"></div>';
	document.getElementById("hero-hp-bar").innerHTML = hero_hpbar;
}

function loadHeroExp(hero) {
	var hero_expdivs = '<span>Exp</span><div id="hero-exp-bar"></div>';
	document.getElementById("hero-exp-bar-wrapper").innerHTML = hero_expdivs;
	
	var hero_expbar = '<div class="exp-bar" style="width:' + ((hero.exp / hero.lvl_up_exp) * 130) + 'px;"></div>';
	document.getElementById("hero-exp-bar").innerHTML = hero_expbar;
}

function loadHeroAttacks(hero,enemy) {
	var hero_attacks = hero.attacks; // an array
	var attacksHTML = "";
	for (var i = 0; i < hero_attacks.length; i += 1) {
		var thisAttack = hero_attacks[i];
		attacksHTML += '<div onclick="move(' + hero.objectname + ', ' + enemy.objectname + ', ' + thisAttack.objectname + ')" class="menu-option">' + thisAttack.name + '</div>';
	}
	document.getElementById("bottom-panel-wrapper").innerHTML = attacksHTML;
}

// Enemy microfunctions (pass in the person object)
function loadEnemyImage(enemy) {
	var large_enemy_image = enemy.img;
	document.getElementById("enemy-image").innerHTML = '<img id="enemy" src="images/people/' + large_enemy_image + '" />';
}

function loadEnemyName(enemy) {
	var enemy_name = enemy.name;
	document.getElementById("enemy-name").innerHTML = enemy_name;
}

function loadEnemyLvl(enemy) {
	var enemy_level = "Lvl. " + enemy.lvl;
	document.getElementById("enemy-level").innerHTML = enemy_level;
}

function loadEnemyHp(enemy) {
	// insert hp divs
	var enemy_hpdivs = '<span>HP</span><div id="enemy-hp-bar"></div>';
	document.getElementById("enemy-hp-bar-wrapper").innerHTML = enemy_hpdivs;
	// insert hp bar
	var enemy_hpbar = '<div class="hp-bar" style="width:' + (130 - (130 * (1 - (enemy.hp / enemy.total_hp)))) + 'px;"></div>';
	document.getElementById("enemy-hp-bar").innerHTML = enemy_hpbar;
}

function clearEnemyInfo() {
	document.getElementById("enemy-image").innerHTML = "";
	document.getElementById("enemy-name").innerHTML = "";
	document.getElementById("enemy-level").innerHTML = "";
	document.getElementById("enemy-hp-bar-wrapper").innerHTML = "";
}

// Other microfunctions
function loadOptionsMenu() {

	var fightOption = '<div onclick="startBattle(ourhero,enemyList[enemyCounter])" class="menu-option">Fight</div>';
	var restOption = '<div onclick="rest(ourhero)" class="menu-option">Rest</div>';
	var packOption = '<div onclick="" class="menu-option">Pack</div>';
	var goalsOption = '<div onclick="" class="menu-option">Goals</div>';
	var options = fightOption + restOption + packOption + goalsOption;
					
	document.getElementById("bottom-panel-wrapper").innerHTML = options;
}

/** define packages of microfunctions for frequent use **/

// for loading the screen with basic info (use when starting game, after a battle, a change, etc)
function loadStandardScreen() {
	// load hero data
	loadHeroImage(ourhero);
	loadHeroName(ourhero);
	loadHeroLvl(ourhero);
	loadHeroHp(ourhero);
	loadHeroExp(ourhero);
	// load other things
	loadOptionsMenu();
	// clear any residual enemy info
	clearEnemyInfo();
}

// for refreshing the screen with critical info during a battle
function loadBattleScreen(hero,enemy) {
// use of this function could be pared down...
// currently all of this is reloaded after every attack.
// revisit this in the case of performance issues

	/* load hero data */
	loadHeroLvl(hero);
	loadHeroHp(hero);
	loadHeroExp(hero);
	loadHeroAttacks(hero,enemy);
  
	/* load enemy data */
	loadEnemyImage(enemy);
	loadEnemyName(enemy);
	loadEnemyLvl(enemy);
	loadEnemyHp(enemy);
	
	// Idea:  determine which enemy the data will be brought in from
	//
	// - this is a function or something that will return the name of the enemy
	// - var minion = function();
	// - the minion variable will be used to build the object reference for the enemy.
}