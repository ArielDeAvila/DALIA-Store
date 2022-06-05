function openPages(url, contenedor,alter="") {
    $.get(url, {}, function (data) {
        $("#" + contenedor).html(data);
    });

    if (alter == "y") {
        document.getElementById("main-content").style.display = 'block';
    } else {
        document.getElementById("main-content").style.display = 'grid';
    }
    
    
}

function loadProducts(name) { 
    let div = document.getElementById(name);
    
    fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(json => { 
                
        json.forEach(element => {
            div.innerHTML += `<product-component
                title = "${element.title}"
                description = "${element.description}" 
                price = "${element.price}"
                src = "${element.image}"
                ></product-component>`
        });

    });

}


function disableScroll() {
    window.scrollTo(0, 0);
}

function menu_close() {
    document.getElementById("menu-hide").style.display = "none";
    window.removeEventListener('scroll', disableScroll); 
    
}

function menu_open() {
    document.getElementById("menu-hide").style.display = "block";
    window.addEventListener('scroll', disableScroll);
}


let inicio = document.getElementById("inicio");
inicio.addEventListener('click',()=> openPages('Pages/home.html', 'main-content'));

let mujeres = document.getElementById("mujeres");
mujeres.addEventListener('click', () => openPages('Pages/Mujeres.html', 'main-content'));

let hombres = document.getElementById("hombres");
hombres.addEventListener('click', () => openPages('Pages/Hombes.html', 'main-content'));

let girls = document.getElementById("girls");
girls.addEventListener('click', () => openPages('Pages/Niña.html', 'main-content'));

let boys = document.getElementById("boys");
boys.addEventListener('click', () => openPages('Pages/Niño.html', 'main-content'));

let nosotros = document.getElementById("nosotros");
nosotros.addEventListener('click', () => openPages('Pages/nosotros.html', 'main-content'));

let help = document.getElementById("help");
help.addEventListener('click', () => openPages('Pages/ayuda.html', 'main-content'));

let car = document.getElementById("car");
car.addEventListener('click', () => openPages('Pages/carrito.html', 'main-content'));

let login = document.getElementById("login");
login.addEventListener('click', () => openPages('Pages/login.html', 'main-content', 'y'));

let register = document.getElementById("register");
register.addEventListener('click', () => openPages('Pages/Register.html', 'main-content', 'y'));

let menuopen = document.getElementById("menu-open");
menuopen.addEventListener('click', menu_open);

let menuclose = document.getElementById("menu-close");
menuclose.addEventListener('click', menu_close);

