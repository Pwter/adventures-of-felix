//GLOBAL
var width=640+320;
var height=480+160;
var tilewidth=32;
var tileheight=32;

var centerx=width/2;
var centery=height/2;

var gameframe=0;
var debuginfo="";

// wrapper set up
document.getElementById("wrapper").style.width=width;
document.getElementById("wrapper").style.height=height;

// Heroes, monsters, tiles
var units=[];

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) 
{
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) 
{
	delete keysDown[e.keyCode];
}, false);

// Move function
function move(direction)
{
	modifierx=0;
	modifiery=0;
	switch (direction)
		{
			case "left":
				modifierx=1*hero.getHeroSpeed();
				break;
			case "right":
				modifierx=-1*hero.getHeroSpeed();
				break;
			case "up":
				modifiery=1*hero.getHeroSpeed();
				break;
			case "down":
				modifiery=-1*hero.getHeroSpeed();
				break;
			
		};
		
	if (!moveAllowed(modifierx,modifiery))
		return false;
	
	for (var i=0; i<units.length; i++)
	{
		if (units[i].isType("hero"))
		{
			units[i].setDirection(direction);
			units[i].inMove();
			
		}
		else
		{
			units[i].changePos(modifierx,modifiery);
			
			
		}
		
	}
	
}

// Cheking if move is collides with wall or not
function moveAllowed(modifierx,modifiery)
{
	var heroposx;
	var heroposy;
	
	for (var i=0; i<units.length; i++)
	{
		if (units[i].isType("hero"))
		{
			heroposx = units[i].getPosX();
			heroposy = units[i].getPosY();
		}
		
	}
	

	var herowidth = hero.getHeroSize()[0];
	var heroheight = hero.getHeroSize()[1];
	
	for (var i=0; i<units.length; i++)
	{
		
		var unit=units[i];
		if (unit.isReady() && !unit.isType("hero") && !unit.isType("background") && unit.isType("wall"))
		{
			unitposx = unit.getPosX();
			unitposy = unit.getPosY();
			unitwidth = unit.getWidth();
			unitheight = unit.getHeight();
			
			if (unitposx + unitwidth/2 > heroposx - herowidth/2 - modifierx +8 // hero hitbox fix hero left
				&& unitposy + unitheight/2 > heroposy - heroheight/2 - modifiery + 14 //hero top
				&& unitposx - unitwidth/2 < heroposx + herowidth/2 - modifierx - 8 // hero right
				&&unitposy - unitheight/2 < heroposy + heroheight/2 - modifiery // hero bottom
			)
			{
				return false;
				
			}
			
		}
		
	}
	
	return true;
}

// Update game objects
var update = function () 
{
	if (38 in keysDown || 87 in keysDown) { // Player holding up or w
		move("up");
		
	}
	if (40 in keysDown || 83 in keysDown) { // Player holding down or s
		move("down");
		
	}
	if (37 in keysDown || 65 in keysDown) { // Player holding left or a
		move("left");
		
	}
	if (39 in keysDown || 68 in keysDown) { // Player holding right or d
		move("right");
		
	}


};

// The main game loop
var main = function () 
{
	now = Date.now();
	var delta = now - then;

	update(delta/1000);
	render();
	gameframe++;
	if (gameframe>40) gameframe=1;
	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();

function game_init()
{
	createCanvas();
	
	hero = new Hero();
	
	var width=hero.getHeroSize()[0];
	var height=hero.getHeroSize()[1];
	
	felix = new Unit("img/charset/felix.png",0-width/4,0-height/4,1000,width,height,"hero");
	units.push(felix);

	tilelayer = addMap(0);
	playerlayer = addMap(1);
	toplayer = addMap(2);
	
	background = new Unit("img/background.png",0,0,-1000,width,height,"background");
	units.push(background);
	
	sortUnitsByZindex();

	main();
}