<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="js/classes.js"></script>
	<script type="text/javascript" src="js/objects.js"></script>
    <script type="text/javascript" src="js/functions.js"></script>
    <script type="text/javascript" src="js/load.js"></script>
	<!--  <script type="text/javascript" src="js/battle.js"></script> -->
	<link rel="stylesheet" type="text/css" href="css/styles.css" />
	</head>
  <body>
    <div id="wrapper">
	  <!-- temporary screens, like those used for starting the game -->
	  <div id="newgame">
	    <img src="images/newgame-screen.png" class="image-center" />
		<div class="newgame-button" onclick="newgameButton()">New Game</div>
	  </div>
	  <div id="backstory">
	    <p>There is only one law of Alchemy:</p>
		<ul><li>Alchemy can not be used to create or destroy matter... only reorganize it.</li></ul>
		<p>Alchemists develop the skill to have power over the elements. It is a valuable skill, when properly used. Unfortunately, it isn't always used properly.</p>
		<p>Sylaroth was the best alchemist that ever lived. He had complete contol over all the elements in this world. But it wasn't enough. He wanted to control people. He became powerful in the ways of dark alchemy and built an army of minions to rule over the world. His reign was terrible... an era of darkness and suffering. Finally, a band of good alchemists came together, overpowered Sylaroth, and bound him for 1000 years. As generations went by, the story of Sylaroth became a myth... a fable. Eventually, nobody even believed that it was actually true.</p>
		<p>Until catastrophe struck. A short while ago, Sylaroth's 1000 years were over and he broke loose. Darkness covered the land. He rebuilt his army. The world is now just entering what is destined to be another dark era of suffering.</p>
		<p>Unless you do something about it. If you are dilligent, you can learn the art of alchemy. With control of all the elements, you can use your power to fight off Sylaroth's minions, and bind him once and for all.</p>
	    <div class="newgame-button" onclick="backstory()">I'm in!</div>
	  </div>
	  <!-- end of temporary screens -->
	  <aside id="left-panel">
	    <div id="hero-image"></div>
		<span id="hero-name"></span>
		<span id="hero-level"></span>
		<div id="hero-hp-bar-wrapper" class="bar-wrapper"></div>
		<div id="hero-exp-bar-wrapper" class="bar-wrapper"></div>
	  </aside>
	  <div id="map">
	    <img id="hero-sprite" src="images/sprites/hero_sprite.gif" />
	    <img id="enemy-sprite" src="images/sprites/water-stone-minion.png" />
		<div id="bottom-panel-wrapper" class="bottom-panel-wrapper">
		</div> <!-- end bottom-panel-wrapper -->
		<div id="dialog-window" class="bottom-panel-wrapper hide">
		</div> <!-- end dialog window -->
		<aside id="right-panel" style="">
	      <div id="enemy-image"></div>
		  <span id="enemy-name"></span>
		  <span id="enemy-level"></span>
		  <div id="enemy-hp-bar-wrapper" class="bar-wrapper"></div>
		</aside>
	  </div> <!-- end map -->
	</div> <!-- end wrapper -->
  </body>
</html>