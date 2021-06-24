// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
	//linksContainer.classList.toggle("show-links");
	const linksHeightContainer = linksContainer.getBoundingClientRect().height;
	const linksHeight = links.getBoundingClientRect().height;
	
	if(linksHeightContainer === 0){
		linksContainer.style.height = linksHeight + "px";
	} else {
		linksContainer.style.height = 0;
	}
})
// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
	const windowsHeight = window.pageYOffset;
	const navHeight = navbar.getBoundingClientRect().height;
	
	if(windowsHeight > navHeight){
		navbar.classList.add("fixed-nav");
	} else {
		navbar.classList.remove("fixed-nav");
	}
	
	if(windowsHeight > 600){
		topLink.classList.add("show-link");
	} else {
		topLink.classList.remove("show-link");
	}
	
})
// ********** smooth scroll ************

const section = document.querySelectorAll(".scroll-link");

section.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		
		const linkClick = e.currentTarget.getAttribute("href").slice(1);
		const clickElement = document.getElementById(linkClick);
		
		linksContainer.style.height = 0
		
		const navHeight = navbar.getBoundingClientRect().height;
		const containerHeight = linksContainer.getBoundingClientRect().height;
		
		const fixedNav = navbar.classList.contains("fixed-nav");
		
		let position = clickElement.offsetTop - navHeight;
		
		
		if(!fixedNav){
			position = position - navHeight;
		} if(navHeight > 82) {
			position = position + containerHeight;
		}
		
		
		window.scrollTo({
			left: 0,
			top: position
		})
		
		
	});	
});
// select links