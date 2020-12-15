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
	button2.onclick = "";
	button3.style.display = "";
	button3.innerText = "Rechts";
	button3.onclick = right;
}

function left(){
	// document.body.style.backgroundImage = "url('images/')"
	description.innerText = "Je loopt een stuk naar links en het word enorm mistig. Je kan niks meer zien en je moet terug lopen.";
	button1.innerText = "Back";
	button1.onclick = begin;
	button2.style.display = "none";
	button3.style.display = "none";
}

function right(){
	description.innerText = "Je loopt naar rechts en kan daar niet verder. Er zijn enorme bergen waar je niet overheen kan. Je moet terug lopen.";
	button1.innerText = "Back";
	button1.onclick = begin;
	button2.style.display = "none";
	button3.style.display = "none";
}

function path(){
	description.innerText = "Je volgt het pad en komt aan bij een dorpje."
}
