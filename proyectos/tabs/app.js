const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const article = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
	const target = e.target.dataset.id;
	
	if(target){
		btns.forEach((btn) => {
		btn.classList.remove("active");
		e.target.classList.add("active")
		});
		
		article.forEach((content) => {
			content.classList.remove("active");
		});
		
		const elemento = document.getElementById(target);
		elemento.classList.add("active");
	}
	
});