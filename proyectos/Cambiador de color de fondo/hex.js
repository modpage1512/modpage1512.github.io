const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

document.addEventListener("click", () => {
	let hexValue = "#";
	for(let i = 0; i<6; i++){
		hexValue += hex[getRandomNumber()];
	}
	
	color.textContent = hexValue;
	document.body.style.backgroundColor = hexValue;
});

let getRandomNumber = () => {
	return Math.floor(Math.random() * hex.length);
}