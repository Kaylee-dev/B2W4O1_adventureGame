var inventoryItem = document.getElementById("inventoryItem");
var title = document.getElementById("title")
var description = document.getElementById("description")

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

// firstImage.src = "images/begin.jpg";

title.innerText = "Cabin in the snow";
description.innerText = "Welcome to my adventure game";
button1.innerText = "Begin";
button2.style.display = "none";
button3.style.display = "none";
inventoryItem.src = "images/begin.jpg";


button1.onclick = function(){
	inventoryItem.src = "images/cabin.jpg";
	button1.innerText = "Rechts";
	button2.style.display = "";
	button2.innerText = "links";

}
