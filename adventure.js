var inventoryItem = document.getElementById("inventoryItem");
var title = document.getElementById("title")
var description = document.getElementById("description")

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

var inventory = {
	weapon: false,
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
	button2.style.display = "";
	button2.innerText = "Volg het pad";
	button2.onclick = path;
	button3.style.display = "";
	button3.innerText = "Rechts";
	button3.onclick = right;
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
	description.innerText = "Je volgt het pad en komt aan bij een dorpje. Er zijn 3 locaties waar je naar toe kan. Waar wil je heen?";
	button1.innerText = "De wapen handelaar";
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
	button1.innerText = "zwaard";
	button1.onclick = weapons;


}
