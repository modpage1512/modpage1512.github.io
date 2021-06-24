let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((buttons) => {
	buttons.addEventListener("click", (e) => {
		const styles = e.currentTarget.classList;
		styles.contains("increase") ? count++: styles.contains("decrease") ? count--: count = 0;
		value.textContent = count;
		count > 0 ? value.style.color = "blue": count < 0 ? value.style.color = "red": value.style.color = "#222";
	})
})
