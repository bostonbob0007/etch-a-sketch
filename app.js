// Global Variables
const container = document.querySelector(".container");
const grey = document.querySelector(".grey");
const rainbow = document.querySelector(".rainbow");
const erase = document.querySelector(".erase");
const reset = document.querySelector(".reset");

// Event Listeners
grey.onclick = () => paintGrey();
rainbow.onclick = () => paintColors();
erase.onclick = () => eraseCells();
reset.onclick = () => resetAll();

// Create Grid
function createGrid(size) {
	container.innerHTML = "";
	for (let i = 0; i < size ** 2; i++) {
		const newDiv = document.createElement("div");
		newDiv.classList.add("cell");
		newDiv.addEventListener("mousenter", () => {
			let squares = random256();
			newDiv.style.backgroundColor = `rgb(${squares}, ${squares}, ${squares})`;
			newDiv.style.transition = "0.2s";
		});
		container.appendChild(newDiv);
	}
}

createGrid(16);

// Grey Colors
function paintGrey() {
	let newDiv = [...document.querySelectorAll(".cell")];
	newDiv.forEach((element) => {
		element.addEventListener("mouseenter", () => {
			let squares = random256();
			element.style.backgroundColor = `rgb(${squares}, ${squares}, ${squares})`;
		});
	});
}

// Rainbow colors
function random256() {
	return Math.floor(Math.random() * 256);
}

function paintColors() {
	let newDiv = [...document.querySelectorAll(".cell")];
	newDiv.forEach((element) => {
		element.addEventListener("mouseenter", () => {
			element.style.backgroundColor = `rgb(${random256()}, ${random256()}, ${random256()})`;
		});
	});
}

// Eraser
function eraseCells() {
	let newDiv = [...document.querySelectorAll(".cell")];
	newDiv.forEach((element) => {
		element.addEventListener("mouseenter", () => {
			element.style.backgroundColor = "rgba(240, 248, 255, 0.25)";
		});
	});
}

// Start or Reset Game back to default
function resetGrid(size) {
	container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function resetAll() {
	container.innerHTML = "";
	let cellSize = prompt("How many squares per side? (Maximum: 100)");
	let size = parseInt(cellSize, 10);
	if (isNaN(size)) {
		window.alert("You must pick a number between 2 and 100. (Maximum: 100)");
		return;
	} else if (size <= 2) {
		window.alert("You must pick a number between 2 and 100. (Maximum: 100)");
		return;
	} else if (size > 100) {
		window.alert(
			"You must pick a number between 2 and 100. (Number is to high !!!)"
		);
		return;
	}
	resetGrid(size);
	createGrid(size);
}
