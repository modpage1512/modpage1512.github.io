const btn = document.querySelector(".btn");
const btnClose = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay")

btn.addEventListener("click", () => {
	modalOverlay.classList.toggle("open-modal");
})

btnClose.addEventListener("click", () => {
	modalOverlay.classList.toggle("open-modal");
})