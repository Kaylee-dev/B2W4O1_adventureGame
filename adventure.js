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

// inventory.weapon = {
// 	name: "zwaard",
// 	strength: 1
// }
// console.log(inventory.weapon);

title.innerText = "Snow";
description.innerText = "Welkom bij mijn adventure game";
button1.innerText = "Start";
button2.style.display = "none";
button3.style.display = "none";

button1.onclick = begin;


function begin(){
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
	document.body.style.backgroundImage = "url('images/mist1.jpg')";
	description.innerText = "Je loopt een stuk naar links en het word enorm mistig. Je kan niks meer zien en je moet terug lopen.";
	button1.innerText = "Back";
	button1.onclick = begin;
	button2.style.display = "none";
	button3.style.display = "none";
}

function right(){
	document.body.style.backgroundImage = "url('images/cliff.jpg')";
	description.innerText = "Je loopt naar rechts richting de bergen. Je komt bij een cliff aan. Je kan hier niet verder. Je moet terug lopen.";
	button1.innerText = "Back";
	button1.onclick = begin;
	button2.style.display = "none";
	button3.style.display = "none";
}

function path(){
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
	document.body.style.backgroundImage = "url('images/table.jpg')";
	description.innerText = "Je bent bij de wapenhandelaar, welk wapen wil je kopen?";
	title.style.color = "white";
	description.style.color = "white";
	button1.innerText = "Zwaard";
	button1.onclick = sword;
	button2.innerText = "Bijl";
	button2.onclick = axe;
	button3.style.display = "none";
}

function sword(){
	description.innerText = "Je neemt het zwaard mee";
	inventory.sword = true;
	inventory.coins = 0;
	console.log(inventory.sword);
	button1.innerText = "Verder";
	button1.onclick = path2;
	button2.style.display = "none";
}

function axe(){
	description.innerText = "Je neemt de bijl mee.";
	inventory.axe = true;
	inventory.coins = 0;
	console.log(inventory.axe);
	button1.innerText = "Verder";
	button1.onclick = path2;
	button2.style.display = "none";
}

function wizard(){
	document.body.style.backgroundImage = "url('images/potions.jpg')";
	description.innerText = "Je bent bij de tovenaar, welk drankje wil je kopen?";
	button1.innerText = "Groen drankje";
	button2.innerText = "Rood drankje";
	button3.innerText = "Blauw drankje";
	button3.style.display = "";
}

function bar(){
	document.body.style.backgroundImage = "url('images/bar.jpg')";
	description.innerText = "Je bent in de bar, het is hier erg gezellig. Je blijft de hele nacht zitten om drankjes te drinken. Na een tijdje denk je een verkeert drankje op te hebben. Het gaat niet goed en je haalt het einde van de nacht niet. ";
	button1.style.display = "none";
	button2.innerText = "Game over";
	button2.onclick = gameOver;
	button3.style.display = "none";


}
function path2(){
	document.body.style.backgroundImage = "url('images/path2.jpg')";
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
	description.innerText = "Je loopt naar links en er staat een monster op het pad. Wat doe je?";
	displayButtons();
	button1.innerText = "Pak zwaard";
	if (inventory.sword == true) {
		button1.onclick = defeatMonster;
	}
	else{
		button1.onclick = false;
	}

	button2.innerText = "Pak bijl";
	if (inventory.axe == true) {
		button2.onclick = defeatMonster;
	}
	else{
		button2.onclick = false;
	}
		
	button3.innerText = "Ren weg";
}

function defeatMonster(){
	alert("Je verslaat het monster.");
}

function end2(){
	description.innerText = "Je loopt rechtdoor maar na een tijdje wandelen zie je niks meer. Je let niet op en valt in een put. Je kan er niet meer uitkomen. "
	button1.innerText = "Game Over";
	button1.onclick = gameOver;
	button2.style.display = "none";
	button3.style.display = "none";
}

function displayButtons(){
	button1.style.display = "";
	button2.style.display = "";
	button3.style.display = "";
}

