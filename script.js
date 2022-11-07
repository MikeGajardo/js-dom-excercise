var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");
var list = ul.getElementsByTagName("li");
var btn = document.createElement("button")
btn.innerHTML= "Delete"


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var deleteBtn = document.createElement("button")
	deleteBtn.innerHTML = "Delete"
	li.appendChild(deleteBtn);
	deleteBtn.addEventListener("click", function(){
		event.target.parentNode.remove();
	})
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	} 
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	} 
}

//Add Strikethrough to clicked li items

function addDoneAfterClick(event) {
	if (event.target === event.target) {
		event.target.classList.toggle("done");
	} 
} 

//This deletes the list item by targeting the parent node

function deleteButton() {
	event.target.parentNode.remove();
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", addDoneAfterClick);

ul.addEventListener("click", deleteButton);

