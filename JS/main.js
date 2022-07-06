function openPages(url, contenedor, alter = "") {
    
    if (alter == "y") {
        document.getElementById("main-content").style.display = 'block';
    } else {
        document.getElementById("main-content").style.display = 'grid';
    };

    $.get(url, {}, function (data) {
        $("#" + contenedor).html(data);
    });

}

function pageProduct(item) {
    window.scrollTo(0, 0);
    openPages("../Pages/products.html", "main-content", "y");
    
    let id = item.getAttribute("uid");

    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(json => {
        let page = document.getElementById("page-product");
        page.innerHTML += `
            <h1 class="title">${json.title}</h1>
            <div class="image"><img src="${json.image}" alt="${json.title}"></div>
            <div class="details-products">
                <h1>$ ${json.price}</h1>
                <p>Cantidad disponible: ${json.rating.count} unidades</p>
                <button class="buy-button">Comprar ahora</button><br><br>
                <button class="add-button">Agregar  <img src="../IMG/Carrito.svg" alt="agregar al carrito"></button>
            </div>
            <div class="about-product">
                <label for="toggler">Sobre el producto</label>
                <input type="checkbox" id="toggler">
                <hr>
                <p class="information">${json.description}</p>
            </div>
        `;
    });
    
    let category = item.getAttribute("category");
    
    fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(res => res.json())
    .then(json => {
        let similar = document.getElementById("similar")
       
        json.forEach(element => {
            similar.innerHTML += `<product-component
            title = "${element.title}"
            description = "${element.description}" 
            price = "${element.price}"
            src = "${element.image}"
            uid="${element.id}"
            category = "${element.category}"
            ></product-component>`
        });

        document.querySelectorAll("product-component").forEach(item => item.addEventListener('click', () => pageProduct(item)));

    });

    
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
                uid="${element.id}"
                category = "${element.category}"
                ></product-component>`
        });

        document.querySelectorAll("product-component").forEach(item => item.addEventListener('click',()=> pageProduct(item)));

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
help.addEventListener('click', () => openPages('Pages/ayuda.html', 'main-content','y'));

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

window.addEventListener('load', () => openPages('Pages/home.html', 'main-content'))


