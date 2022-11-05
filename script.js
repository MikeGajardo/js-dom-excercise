var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = ul.getElementsByTagName("li")

console.log(list)

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", addDoneAfterClick);
