const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const weekdays = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const deadlineFormat = document.querySelectorAll(".deadline-format h4"); 

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();


let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const min = futureDate.getMinutes();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const day = weekdays[futureDate.getDay()];

giveaway.textContent = "La promocion termina el dia " + day + " de la fecha " + date + " de " + month + " del año " + year + " a las " + hour + ":" + min + "am";

//Calcular el tiempo

const futureTime = futureDate.getTime();

const getCurrentTime = () => {
	const today = new Date().getTime();
	const t = futureTime - today;
	
	//Time base
	const oneDay = 24*60*60*1000;
	const oneHour = 60*60*1000;
	const oneMin = 60*1000;
	const mil = 1000;
	
	
	const days = Math.floor(t / oneDay);
	const hours = Math.floor((t % oneDay) / oneHour);
	const mins = Math.floor((t % oneHour) / oneMin);
	const secs = Math.floor((t % oneMin) / mil);

	const format = (item) => {
		if(item < 10){
			return item = "0" + item;
		} else {
			return item;
		}
	}
	
	const values = [days, hours, mins, secs];
	
	deadlineFormat.forEach((item, index) => {
		item.innerHTML = format(values[index]);
	});
	
	if(t < 0){
		clearInterval(countdown);
		deadline.innerHTML = "<h3>Perdon, se ha acabado la promocion</h3>"
	}
	
}

let countdown = setInterval(getCurrentTime, 1000);

getCurrentTime();