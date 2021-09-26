//Seleccionar los DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-items");
const idiomTitle = document.querySelector(".idiomTitle")

let state = true;

window.addEventListener("load", (event) => {
    document.querySelector(".preloader").style.display = "none";

    let idiomaCambiado = localStorage.getItem("idioma");
    let url = event.target.URL;

    let estado = setInterval(() => {
            if(state === true){
                idiomTitle.innerText = "choose your language";
                state = false;
            } else {
                idiomTitle.innerText = "Escoge tu idioma";
                state = true;
            }
        }, 1000);
    
    if(idiomaCambiado === "espanol" || idiomaCambiado === "ingles"){
        
        clearInterval(estado);
        
        idiomSet(idiomaCambiado, url);
    } 
    
    
    document.querySelectorAll(".idiom-container button").forEach(button => {
        button.addEventListener("click", event => {
            
            let language = event.target.innerText;
            
            language === "English" ? language = "ingles": language = "espanol";
           
            clearInterval(estado);
           
            idiomSet(language, url);
        })
    })

})

const idiomSet = (language, url) => {
    if(url === "https://modpage1512.github.io/" || url === "https://modpage1512.github.io/index.html"){
        
        fetch("./idiomas/" + language + ".json").then(response => {
            return response.json().then(data => {
                idiomData(data, language);
                idiomSave(language);
            }).catch(err => {
                console.log(err);
            });
        })
    }  else {
        idiomChangeMenu(language);

        if(url === "https://modpage1512.github.io/about.html"){

            idiomChangeAbout(language);

        } else if(url === "https://modpage1512.github.io/contact.html") {

            idiomChangeContact(language);

        }
    }



}
//animacion del menu
let showMenu = true;

const animationTitle = (state) => {
    
}

menuBtn.addEventListener("click", function() {


    if(showMenu === true) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        navItems.forEach(item => item.classList.add("show"));

        //estado del menu
        showMenu = false;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show"));

        //estado del menu
        showMenu = true;
    }

});

const idiomData = (content, language) => {

    let proyectosPrincipales = content.proyectos
    proyectosPrincipales = proyectosPrincipales.map(item => {
        const id = item.id;
        const tecnologia = item.tecnologias;
        const url = item.url;
        const img = item.img;
        const descripcion = item.descripcion;
        return {id, tecnologia, url, img, descripcion};
    })

    let proyectosSecciones = content.Secciones
    proyectosSecciones = proyectosSecciones.map(item => {
        const id = item.id;
        const url = item.url;
        const img = item.img;
        const descripcion = item.descripcion;
        return {id, url, img, descripcion};
    })

    if(language === "ingles"){
        idiomChangeEnglish(proyectosPrincipales, proyectosSecciones);

        idiomChangeMenu(language);

        idiomChangeIndex(language);


    } else if(language === "espanol"){
        idiomChangeSpanish(proyectosPrincipales, proyectosSecciones);

        idiomChangeMenu(language);

        idiomChangeIndex(language);
    }
}

const idiomChangeSpanish = (proyectosPrincipales, proyectosSecciones) => {

    let data = "";
    proyectosPrincipales.forEach(item => {
        data += '<div class="item">'
        +'<h2 class="sm-heading">'
        + 'Proyecto realizado con <span class="text-secondary">' + item.tecnologia + '</span>'
        + '</h2>'
        + ' <a href=' + item.url + '>'
        + '<img class="imagen" src="' + item.img + '" alt="imagen1.jpg">'
        + '</a>'
        + '<p>' + item.descripcion + '</p>'
        + '<a href=' + item.url + ' class="btn-light">'
        + '<i class="fa fa-eye"></i>Ver proyecto </a> </div> ';
    })

    document.getElementById("principal-projects").innerHTML = data;

    let dataSecciones = "";
     proyectosSecciones.forEach(item => {
         dataSecciones += '<div class="item">'
         + ' <a href=' + item.url + '>'
         + '<img class="imagen" src="' + item.img + '" alt="imagen1.jpg">'
         + '</a>'
         + '<p>' + item.descripcion + '</p>'
         + '<a href=' + item.url + ' class="btn-light">'
         + '<i class="fa fa-eye"></i>Ver proyecto </a> </div> ';
     })

     document.getElementById("secondary-projects").innerHTML = dataSecciones;
}

const idiomChangeEnglish = (proyectosPrincipales, proyectosSecciones) => {

    let data = "";
    proyectosPrincipales.forEach(item => {
        data += '<div class="item">'
        +'<h2 class="sm-heading">'
        + 'Project carried out with <span class="text-secondary">' + item.tecnologia + '</span>'
        + '</h2>'
        + ' <a href=' + item.url + '>'
        + '<img class="imagen" src="' + item.img + '" alt="imagen1.jpg">'
        + '</a>'
        + '<p>' + item.descripcion + '</p>'
        + '<a href=' + item.url + ' class="btn-light">'
        + '<i class="fa fa-eye"></i>See project </a> </div> ';
    })

    document.getElementById("principal-projects").innerHTML = data;

    let dataSecciones = "";
     proyectosSecciones.forEach(item => {
         dataSecciones += '<div class="item">'
         + ' <a href=' + item.url + '>'
         + '<img class="imagen" src="' + item.img + '" alt="imagen1.jpg">'
         + '</a>'
         + '<p>' + item.descripcion + '</p>'
         + '<a href=' + item.url + ' class="btn-light">'
         + '<i class="fa fa-eye"></i>See project </a> </div> ';
     })

     document.getElementById("secondary-projects").innerHTML = dataSecciones;
}

const idiomSave = (language) => {
    localStorage.setItem("idioma", language);

    console.log(language)
}

const idiomChangeMenu = (language) => {

    if(language === "ingles"){
        document.querySelector(".about").innerText = "About me";
        document.querySelector(".work").innerText = "My work";
        document.querySelector(".contact").innerText = "Contact";
        document.querySelector(".quote blockquote").innerText = '"First solve the problem, then write the code".  Jhon Jhonson';
    } else if(language === "espanol") {
        document.querySelector(".about").innerText = "Sobre mi";
        document.querySelector(".work").innerText = "Mi trabajo";
        document.querySelector(".contact").innerText = "Contacto";
        document.querySelector(".quote blockquote").innerText = '"Primero resuelve el problema, Despues escribe el codigo". Jhon Jhonson';
    }

}

const idiomChangeAbout = (language) => {

    if(language === "espanol"){
        document.querySelector(".personal-title").innerHTML = 'Información <span class="text-secondary">Personal</span>';
        document.querySelector(".personal").innerHTML = '<p>Mi nombre es Carlos Castillo, soy de Venezuela, estado La Guaria.<br><br>' +
        'Tengo 24 años y soy programador web, actualmente me enfoco en el área del front-end del desarrollo web.<br><br> Soy una persona competitiva, resiliente y apasionado de la tecnología, siempre busco mejorar y aprender constantemente.</p>' +
        '<h4><span class="text-secondary"><a href="https://github.com/modpage1512/modpage1512.github.io/raw/main/Archivos/Cv-qr.pdf" download="curriculum.pdf">Descargar curriculum</a></span></h4>';
        document.querySelector(".job-1 h2").innerHTML = "Aptitudes";
        document.querySelector(".job-2 h2").innerHTML = "Herramientas";
        document.querySelector(".job-3 h2").innerHTML = "Redes sociales";
        document.getElementById("cli").innerHTML = "cli - linea de comandos linux";
        document.querySelector(".job-3 h4").innerHTML = '<i class="fa fa-github"></i> Mi <a href="https://github.com/modpage1512">Github </a>';
    }else {
        document.querySelector(".personal-title").innerHTML = 'Personal <span class="text-secondary">Information</span>';
        document.querySelector(".personal").innerHTML = '<p>My name is Carlos Castillo, I am from Venezuela, La Guaria state.<br><br>' +
        'I am 24 years old and I am a web programmer, currently I focus on the front-end area of ​​web development.<br><br> I am a competitive person, resilient and passionate about technology, I always seek to improve and constantly learn.</p>' +
        '<h4><span class="text-secondary"><a href="archivos/Cv-qr.pdf" download="https://github.com/modpage1512/modpage1512.github.io/blob/main/Archivos/Cv-qr-ingles.pdf">Download curriculum</a></span></h4>';
        document.querySelector(".job-1 h2").innerHTML = "Aptitudes";
        document.querySelector(".job-2 h2").innerHTML = "Tools";
        document.querySelector(".job-3 h2").innerHTML = "Social networks";
        document.querySelector("#cli").innerHTML = "CLI - Linux command lines";
        document.querySelector(".job-3 h4").innerHTML = '<i class="fa fa-github"></i> My <a href="https://github.com/modpage1512">Github </a>';
    }
    
}   

const idiomChangeContact = (language) => {

    if(language === "espanol"){

        document.querySelector(".contact-heading").innerText = "Contacto";
        document.querySelector(".contact-text").innerHTML = '<p> Si tiene alguna pregunta, sugerencia o está interesado en mis servicios, <span class="text-secondary">contactame.</span> </p>';
    }else {

        document.querySelector(".contact-heading").innerText = "Contact";
        document.querySelector(".contact-text").innerHTML = '<p>If you have any questions, suggestions or are interested in my services, <span class="text-secondary">contact me.</span> </p>';
    }
}

const idiomChangeIndex = (language) => {

    if(language === "espanol"){
        document.querySelector(".welcome").innerHTML = '<span class="text-secondary welcome-secondary">Bienvenido!!</span></h2>';
        document.querySelector(".texto-unico").innerText = 'a mi portafolio';
        document.querySelector(".title").innerText = "Programador front-end";
        document.querySelector(".title-projects").innerHTML = '<span class="text-secondary heading-1">Proyectos</span>';
        document.querySelector(".title-section").innerHTML = '<span class="text-secondary" >Secciones</span> individuales';
    } else {
        document.querySelector(".welcome").innerHTML = '<span class="text-secondary welcome-secondary">Welcome!!</span></h2>';
        document.querySelector(".texto-unico").innerText = 'to my portafolio';
        document.querySelector(".title").innerText = "Front-end web developer";
        document.querySelector(".title-projects").innerHTML = '<span class="text-secondary heading-1">Proyects</span>';
        document.querySelector(".title-section").innerHTML = '<span class="text-secondary" >Individual</span> Sections';
    }
}
