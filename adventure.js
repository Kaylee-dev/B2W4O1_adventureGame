var inventoryItem = document.getElementById("inventoryItem");
var title = document.getElementById("title")
var description = document.getElementById("description")

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

var inventory = {
	sword: false,
	axe: false,
	magic: false,
	coins: 10
};

console.log(inventory);

title.innerText = "Snow";
description.innerText = "Welkom bij mijn adventure game";
button1.innerText = "Start";
button2.style.display = "none";
button3.style.display = "none";
inventoryItem.style.display = "none";
button1.onclick = begin;


function begin(){

	title.innerText = "Wake-Up";
	console.log(title);
	document.body.style.backgroundImage = "url('images/mountain.jpg')";
	document.body.style.backgroundSize = "cover";
	description.innerText = "Je word wakker op een groot veld in de sneeuw. Je kan 3 kanten op gaan, welke kies je?";
	button1.innerText = "Links";
	button1.onclick = left;
	button2.innerText = "Volg het pad";
	button2.onclick = path;
	button3.innerText = "Rechts";
	button3.onclick = right;
	displayButtons();
}

function gameOver(){
	title.style.display = "none";
	description.style.display = "none";
	inventoryItem.style.display = "none";
	document.body.style.backgroundImage = "url('images/gameOver.jpg')";
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";

}

function left(){
	title.innerText = "Mist";
	console.log(title);
	document.body.style.backgroundImage = "url('images/mist1.jpg')";
	description.innerText = "Je loopt een stuk naar links en het word enorm mistig. Je kan niks meer zien en je moet terug lopen.";
	button1.innerText = "Terug";
	button1.onclick = begin;
	button2.style.display = "none";
	button3.style.display = "none";
}

function right(){
	title.innerText = "Cliff";
	console.log(title);
	document.body.style.backgroundImage = "url('images/cliff.jpg')";
	description.innerText = "Je loopt naar rechts richting de bergen. Je komt bij een cliff aan. Je kan hier niet verder. Je moet terug lopen.";
	button1.innerText = "Terug";
	button1.onclick = begin;
	button2.style.display = "none";
	button3.style.display = "none";
}

function path(){
	title.innerText = "Village";
	console.log(title);
	document.body.style.backgroundImage = "url('images/village.jpg')";
	description.innerText = "Je bent bij een dorpje. Er zijn 3 locaties waar je naar toe kan. Waar wil je heen?";
	button1.innerText = "Wapen handelaar";
	button1.onclick = weapons;
	button2.innerText = "De tovenaar";
	button2.onclick = wizard;
	button2.style.display = "";
	button3.innerText = "De bar";
	button3.onclick = bar;
	button3.style.display = "";
}

function weapons(){
	title.innerText = "Weapons";
	console.log(title);
	document.body.style.backgroundImage = "url('images/table.jpg')";
	description.innerText = "Je bent bij de wapenhandelaar, welk wapen wil je kopen?";
	title.style.color = "white";
	description.style.color = "white";
	button1.innerText = "Zwaard";
	if (inventory.coins >= 10) {
		button1.onclick = sword;
	}
	else{
		button1.onclick = false;
		button1.style.backgroundColor = "red";
	}
	
	if (inventory.coins >= 10) {
		button2.onclick = axe;
	}
	else{
		button2.onclick = false;
		button2.style.backgroundColor = "red";
	}
	button3.innerText = "Verder";
	button3.onclick = nothing;
}

function sword(){
	title.innerText = "Sword";
	console.log(title);
	description.innerText = "Je neemt het zwaard mee";
	inventory.sword = true;
	inventory.coins = 0;
	console.log(inventory.sword);
	button1.innerText = "Verder";
	button1.onclick = path2;
	button2.style.display = "none";
}

function axe(){
	title.innerText = "Axe";
	console.log(title);
	description.innerText = "Je neemt de bijl mee.";
	inventory.axe = true;
	inventory.coins = 0;
	console.log(inventory.axe);
	button1.innerText = "Verder";
	button1.onclick = path2;
	button2.style.display = "none";
}

function wizard(){
	title.innerText = "Wizard";
	console.log(title);
	document.body.style.backgroundImage = "url('images/potions.jpg')";
	description.innerText = "Je bent bij de tovenaar, welk drankje wil je kopen?";
	button1.innerText = "Rood drankje";
	button1.onclick = red;
	button2.innerText = "blauw drankje";
	button2.onclick = blue;
	button3.innerText = "Koop niks";
	button3.onclick = nothing;
	button3.style.display = "";
}

function red(){
	title.innerText = "Red Potion";
	console.log(title);
	description.innerText = "Je koopt het rode drankje.";
	inventory.magic = true;
	inventory.coins = 0;
	button1.innerText = "Verder";
	button1.onclick = path2;
	button2.style.display = "none";
	button3.style.display = "none";

}

function blue(){
	title.innerText = "Blue Potion";
	console.log(title);
	description.innerText = "Je koopt het blauwe drankje.";
	inventory.magic = true;
	inventory.coins = 0;
	button1.innerText = "Verder";
	button1.onclick = path2;
	button2.style.display = "none";
	button3.style.display = "none";
}

function nothing(){
	document.body.style.backgroundImage = "url('images/village.jpg')";
	title.innerText = "Nothing";
	console.log(title);
	description.innerText = "Je koopt niks.";
	button1.innerText = "Verder";
	button1.onclick = path2;
	button2.style.display = "none";
	button3.style.display = "none";
}

function bar(){
	title.innerText = "Bar";
	console.log(title);
	document.body.style.backgroundImage = "url('images/bar.jpg')";
	description.innerText = "Je bent in de bar, het is hier erg gezellig. Je blijft de hele nacht zitten om drankjes te drinken. Na een tijdje denk je een verkeerd drankje op te hebben. Je word ineens erg ziek en je haalt het einde van de nacht niet.";
	button1.style.display = "none";
	button2.innerText = "Game over";
	button2.onclick = gameOver;
	button3.style.display = "none";


}
function path2(){
	title.innerText = "Where?";
	console.log(title);
	document.body.style.backgroundImage = "url('images/path2.jpg')";
	title.style.color = "black";
	description.style.color = "black";
	description.innerText = "Je loopt op een sneeuw pad en je kan 3 kanten op. Waar wil je heen?";
	displayButtons();
	button1.innerText = "Links";
	button1.onclick = monster;
	button2.innerText = "Rechtdoor";
	button2.onclick = end2;
	button3.innerText = "Rechts";
	button3.onclick = ghost;
}

function monster(){
	title.innerText = "Monster";
	console.log(title);
	document.body.style.backgroundImage = "url('images/monster.jpg')";
	description.innerText = "Je loopt naar links en er staat een monster op het pad. Wat doe je?";

	displayButtons();
	button1.innerText = "Pak zwaard";
	if (inventory.sword == true) {
		button1.onclick = defeatMonster;
	}
	else{
		button1.onclick = false;
		button1.style.backgroundColor = "red";
	}

	button2.innerText = "Pak bijl";
	if (inventory.axe == true) {
		button2.onclick = defeatMonster;
	}
	else{
		button2.onclick = false;
		button2.style.backgroundColor = "red";
	}
		
	button3.innerText = "Ren weg";
	button3.onclick = run;
}

function run(){
	title.innerText = "Run";
	console.log(title);
	description.innerText = "Je probeert weg te rennen maar hij haalt je in. Je probeert hem nog te vechten maar dat lukt helaas niet.";
	button1.innerText = "Game Over";
	button1.onclick = gameOver;
	button2.style.display = "none";
	button3.style.display = "none";

}

function defeatMonster(){
	title.innerText = "Victory";
	console.log(title);
	inventory.coins += 10;
	description.innerText = "Je verslaat het monster";
	button1.innerText = "Verder";
	button1.onclick = path3;
	button2.style.display = "none";
	button3.style.display = "none";
}

function ghost(){
	title.innerText = "Ghost";
	console.log(title);
	document.body.style.backgroundImage = "url('images/ghost.jpg')";
	description.innerText = "Je loopt naar rechts en ziet een spook. Hij wilt je aanvallen, wat doe je?";
	button1.innerText = "Drink potion";
	if (inventory.magic == true) {
		button1.onclick = ghostPotion;
	}
	else{
		button1.onclick = false;
		button1.style.backgroundColor = "red";
	}

	button2.innerText = "Ren weg";
	button2.onclick = run;
	button3.style.display = "none";
}

function ghostSword(){
	title.innerText = "Defeat";
	console.log(title);
	description.innerText = "Je pakt je zwaard en probeert hem aan te vallen. Het lukt niet om hem te verslaan met een zwaard. Had je nou maar een potion gehad.";
	button1.innerText = "Game Over";
	button1.onclick = gameOver;
	button2.style.display = "none";
	button3.style.display = "none";
}

function ghostPotion(){
	title.innerText = "Victory";
	console.log(title);
	inventory.coins += 10;
	inventory.magic = false;
	description.innerText = "Je drinkt de potion en ineens kan je vuur spugen. De geest is bang van je en vliegt weg. Je kan verder lopen.";
	button1.innerText = "Verder";
	button1.onclick = path3;
	button2.style.display = "none";
	button3.style.display = "none";
}

function end2(){
	title.innerText = "Fall";
	console.log(title);
	description.innerText = "Je loopt rechtdoor maar na een tijdje wandelen zie je niks meer. Je let niet op en valt in een put. Je kan er niet meer uitkomen. ";
	button1.innerText = "Game Over";
	button1.onclick = gameOver;
	button2.style.display = "none";
	button3.style.display = "none";
}

function path3(){
	title.innerText = "Follow Your Path";
	console.log(title);
	displayButtons();
	document.body.style.backgroundImage = "url('images/darkForrest.jpg')";
	title.style.color = "white";
	description.style.color = "white";
	button1.style.backgroundColor = "white";
	button2.style.backgroundColor = "white";
	button3.style.backgroundColor = "white";
	description.innerText = "Het word donker en je volgt een pad, zodat je niet verdwaald. Even verderop zie je 2 paden,  bij pad 1 stopt de sneeuw en bij pad 2 zie je veel water en ijs. Je kan ook terug naar het dorp om iets anders te kopen. Waar wil je heen?";
	button1.innerText = "Pad 1";
	button1.onclick = theEnd1;
	button2.innerText = "Pad 2";
	button2.onclick = theEnd2;
	button3.innerText = "Terug";
	button3.onclick = path;
}

function theEnd1(){
	title.innerText = "Red Dragon ";
	console.log(title);
	document.body.style.backgroundImage = "url('images/dragonRed2.jpg')";
	description.innerText = "Je volgt pad 1 en komt aan op een groot open veld. je kijkt om je heen en ziet een grote rode draak aan komen vliegen. Hij komt op je af en wilt je aanvallen. Wat doe je?";
	button1.innerText = "Pak zwaard";
	if (inventory.sword == true) {
		button1.onclick = fightSword;
	}
	else{
		button1.onclick = false;
		button1.style.backgroundColor = "red";
	}
	button2.innerText = "Pak bijl";
	if (inventory.axe == true) {
		button2.onclick = fightAxe;
	}
	else{
		button2.onclick = false;
		button2.style.backgroundColor = "red";
	}
	button3.innerText = "Vechten";
	button3.onclick = fightHand;
}

function fightSword(){
	title.innerText = "Victory";
	console.log(title);
	document.body.style.backgroundImage = "url('images/dragonRed2.jpg')";
	description.innerText = "Je pakt je zwaard en rent op hem af, hij spuugt vuur maar je ontwijkt hem. Je springt op zijn rug en verslaat hem met je zwaard. Je hebt gewonnen van de draak. Er komen mensen vanuit het dorp aan rennen. Ze bedanken je voor het verslaan van de draak. The End."
	button1.innerText = "Verder";
	button1.onclick = theEnd;
	button2.style.display = "none";
	button3.style.display = "none";
}

function fightAxe(){
	title.innerText = "Victory";
	console.log(title);
	document.body.style.backgroundImage = "url('images/dragonRed2.jpg')";
	description.innerText = "Je pakt je bijl en rent op hem af, hij spuugt vuur maar je ontwijkt hem. Je springt op zijn rug en verslaat hem met je zwaard. Je hebt gewonnen van de draak. Er komen mensen vanuit het dorp aan rennen. Ze bedanken je voor het verslaan van de draak. The End."
	button1.innerText = "Verder";
	button1.onclick = theEnd;
	// button2.style.display = "none";
	// button3.style.display = "none";
}

function fightHand(){
	title.innerText = "Defeat";
	console.log(title);
	document.body.style.backgroundImage = "url('images/dragonRed2.jpg')";
	description.innerText = "Je rent naar hem toe en ontwijkt zijn aanvallen. Je probeert hem aan te vallen met je handen maar hij is te sterk. Je kan hem niet aan. Game over.";
	button1.innerText = "Verder";
	button1.onclick = gameOver;
	button2.style.display = "none";
	button3.style.display = "none";
}

function theEnd2(){
	title.innerText = "Blue Dragon";
	console.log(title);
	title.style.color = "black";
	description.style.color = "black";
	document.body.style.backgroundImage = "url('images/dragonBlue.jpg')";
	description.innerText = "Je volgt pad 2 en komt aan op een groot open veld. je kijkt om je heen en ziet een grote blauwe draak aan komen vliegen. Hij komt op je af en wilt je aanvallen. Wat doe je?";
	button1.innerText = "Pak zwaard";
	if (inventory.sword == true) {
		button1.onclick = fightSword2;
	}
	else{
		button1.onclick = false;
		button1.style.backgroundColor = "red";
	}
	button2.innerText = "Pak bijl";
	if (inventory.axe == true) {
		button2.onclick = fightAxe2;
	}
	else{
		button2.onclick = false;
		button2.style.backgroundColor = "red";
	}
	button3.innerText = "Vechten";
	button3.onclick = fightHand;
}

function fightSword2(){
	title.innerText = "Victory";
	console.log(title);
	document.body.style.backgroundImage = "url('images/dragonBlue.jpg')";
	description.innerText = "Je pakt je zwaard en rent op hem af, hij spuugt ijsballen maar je ontwijkt hem. Je springt op zijn rug en verslaat hem met je zwaard. Je hebt gewonnen van de draak. Er komen mensen vanuit het dorp aan rennen. Ze bedanken je voor het verslaan van de draak. The End."
	button1.innerText = "Verder";
	button1.onclick = theEnd;
	button2.style.display = "none";
	button3.style.display = "none";
}

function fightAxe2(){
	title.innerText = "Victory";
	console.log(title);
	document.body.style.backgroundImage = "url('images/dragonBlue.jpg')";
	description.innerText = "Je pakt je bijl en rent op hem af, hij spuugt ijsballen maar je ontwijkt hem. Je springt op zijn rug en verslaat hem met je zwaard. Je hebt gewonnen van de draak. Er komen mensen vanuit het dorp aan rennen. Ze bedanken je voor het verslaan van de draak. The End."
	button1.innerText = "Verder.";
	button1.onclick = theEnd;
	button2.style.display = "none";
	button3.style.display = "none";
}

function theEnd(){
	title.innerText = "Victory";
	console.log(title);
	document.body.style.backgroundImage = "url('images/theEnd.jpg')";
	description.innerText = "Je hebt de draak verslagen en word opgehaald door een vliegtuig. Je kan weer naar huis.";
	button1.style.display = "none";
}

function displayButtons(){
	button1.style.display = "";
	button2.style.display = "";
	button3.style.display = "";
}

