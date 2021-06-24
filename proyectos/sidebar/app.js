const sidebar = document.querySelector(".sidebar");
const boton = document.querySelector(".sidebar-toggle")
const botonClose = document.querySelector(".closse-btn")

boton.addEventListener("click", () => {
	sidebar.classList.toggle("show-sidebar");
})

botonClose.addEventListener("click", () => {
	sidebar.classList.toggle("show-sidebar");
})