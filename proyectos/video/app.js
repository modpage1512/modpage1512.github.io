const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container")

console.log(video)

btn.addEventListener("click", () => {
	if(!btn.classList.contains("slide")){
		btn.classList.add("slide");
		video.play();
	} else {
		btn.classList.remove("slide");
		video.pause();
	}
});

//preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
	preloader.classList.add("hide-preloader");
})