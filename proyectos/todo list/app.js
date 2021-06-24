// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** EVENT LISTENERS **********
//*submit Form
form.addEventListener("submit", addItem);

clearBtn.addEventListener("click", clearItems);

window.addEventListener("DOMContentLoaded", setupItem);

function addItem(e) {
	
	e.preventDefault();
	
	const value = grocery.value;
	const id = new Date().getTime().toString();
	
	if(value && !editFlag){
		
		createListItem(id, value);
		
		displayAlert("Se ha agregado la tarea exitosamente", "success");
		container.classList.add("show-container");
		
		//add to local storage
		addToLocalStorage(id,value);
		
		//set back to default
		setBackToDefault();
	} else if(value && editFlag === true){
		
		editElement.innerHTML = value;
		displayAlert("valor cambiado exitosamente", "success");
		
		editLocalStorage(editID, value);
		setBackToDefault();
		
	} else {
		displayAlert("No has agregado ninguna tarea", "danger")
	}
	
}
// ****** FUNCTIONS **********

//funcion borrar
function deleteItem(e) {
	const element = e.currentTarget.parentElement.parentElement;	
	const id = element.dataset.id;
	list.removeChild(element);
	if(list.children.length === 0){
		container.classList.remove("show-container");
	}
	displayAlert("Tarea removida", "danger");
	setBackToDefault();
	removeFromLocalStorage(id);
}

//funcion añadir
function editItem(e) {
	
		const element = e.currentTarget.parentElement.parentElement;
		
		editElement = e.currentTarget.parentElement.previousElementSibling;
		
		grocery.value = editElement.innerHTML;
		
		editFlag = true;
		editID = element.dataset.id;
		submitBtn.textContent = "edit";
}


function clearItems() {
	
	const items = document.querySelectorAll(".grocery-item");
	
	if(items.length > 0){
		items.forEach(function(item) {
			list.removeChild(item);
		});
	}
	
	container.classList.remove("show-container");
	displayAlert("Se han removido todas las tareas", "danger");
	setBackToDefault();
	
	localStorage.removeItem("list")
}
function setBackToDefault(){
	grocery.value = "";
	editFlag = false;
	editID = "";
	submitBtn.textContent = "submit";
}


function displayAlert(text, action) {
		alert.textContent = text;
		alert.classList.add("alert-" + action);
		
		setTimeout(() => {
			alert.textContent = "";
			alert.classList.remove("alert-" + action);
		}, 1000)
	}


function addToLocalStorage(id, value){
	
	const grocery = {id, value};
	let items = getLocalStorage();
	
	items.push(grocery);
	localStorage.setItem("list", JSON.stringify(items));
}

// ****** LOCAL STORAGE **********

function removeFromLocalStorage(id) {
	let items = getLocalStorage();
	
	items = items.filter(function(item) {
		if(item.id !== id){
			return item;
		}
	});
	
	localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value){
	
	let items = getLocalStorage();
	
	items = items.map(function(item) {
		if(item.id === id){
			item.value = value;
		} 
		return item;
	});
	
	localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
	return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")): [];
} 
// ****** SETUP ITEMS **********

function setupItem() {
	let items = getLocalStorage();
	
	if(items.length > 0){
		
		items.forEach(function(item) {
			createListItem(item.id, item.value)
		})
		container.classList.add("show-container");
	} 
	
	localStorage.setItem("list", JSON.stringify(items));
}

function createListItem(id, value){
	
	const element = document.createElement("article");
		//añadir clase
		element.classList.add("grocery-item");
		//añadir id
		const attr = document.createAttribute("data-id");
		attr.value = id;
		element.setAttributeNode(attr);
		element.innerHTML = "<p class=\"title\">" + value + "</p>"
							+ "<div class=\"btn-container\">"
							+ "<button type=\"button\" class=\"edit-btn\">"
							+ "<i class=\"fas fa-edit\"></i>"
							+ "<button type=\"button\" class=\"delete-btn\">"
							+ "<i class=\"fas fa-trash\"></i>"
							+	"</button>"
							+	"</div>";
							
		const deleteBtn = element.querySelector(".delete-btn");
		const editBtn = element.querySelector(".edit-btn");
		
		deleteBtn.addEventListener("click", deleteItem);
		editBtn.addEventListener("click", editItem);
		
		list.appendChild(element);
		container.classList.add("show-container");
}