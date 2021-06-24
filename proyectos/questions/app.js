const plusBtn = document.querySelectorAll(".plus-icon");
const minusBtn = document.querySelectorAll(".minus-icon");
const questionText = document.querySelectorAll(".question-text");

plusBtn[0].addEventListener("click", () => {
	
	minusBtn[1].style.display = "none";
	plusBtn[1].style.display = "inline";
	questionText[1].style.display = "none";
	minusBtn[2].style.display = "none";
	plusBtn[2].style.display = "inline";
	questionText[2].style.display = "none";
	questionText[0].style.display = "block";	
	plusBtn[0].style.display = "none";
	minusBtn[0].style.display = "inline";
})

minusBtn[0].addEventListener("click", () => {
	
	questionText[0].style.display = "none";	
	plusBtn[0].style.display = "inline";
	minusBtn[0].style.display = "none";
})

plusBtn[1].addEventListener("click", () => {
	
	minusBtn[0].style.display = "none";
	plusBtn[0].style.display = "inline";
	questionText[0].style.display = "none";
	minusBtn[2].style.display = "none";
	plusBtn[2].style.display = "inline";
	questionText[2].style.display = "none";
	questionText[1].style.display = "block";	
	plusBtn[1].style.display = "none";
	minusBtn[1].style.display = "inline";
})

minusBtn[1].addEventListener("click", () => {
	
	questionText[1].style.display = "none";	
	plusBtn[1].style.display = "inline";
	minusBtn[1].style.display = "none";
})

plusBtn[2].addEventListener("click", () => {
	
	minusBtn[0].style.display = "none";
	plusBtn[0].style.display = "inline";
	questionText[0].style.display = "none";
	minusBtn[1].style.display = "none";
	plusBtn[1].style.display = "inline";
	questionText[1].style.display = "none";
	questionText[2].style.display = "block";	
	plusBtn[2].style.display = "none";
	minusBtn[2].style.display = "inline";
})

minusBtn[2].addEventListener("click", () => {
	
	questionText[2].style.display = "none";	
	plusBtn[2].style.display = "inline";
	minusBtn[2].style.display = "none";
})
 