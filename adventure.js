var inventoryItem = document.getElementById("inventoryItem");
var title = document.getElementById("title")
var description = document.getElementById("description")

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");


title.innerText = "Cabin in the snow";
description.innerText = "Welcome to my adventure game";
button1.innerText = "Begin";
button2.style.display = "none";
button3.style.display = "none";
// inventoryItem.src = "images/mountain.jpg";
// document.body.style.backgroundImage = "url('images/mountain.jpg')";
// document.body.style.backgroundSize = "cover";


button1.onclick = function(){
	document.body.style.backgroundImage = "url('images/cabin2.jpg')";
	document.body.style.backgroundSize = "cover";
	inventoryItem.src = "images/cabin2.jpg";
	button1.innerText = "Rechts";
	button2.style.display = "";
	button2.innerText = "links";

}
