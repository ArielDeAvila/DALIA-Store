function abrirUrl(url, contenedor) {
    $.get(url, {}, function (data) {
        $("#" + contenedor).html(data);
    });

   
}

function topFooter() {
    
    let altura = document.getElementById('main-content');
    let elementStyleAl = window.getComputedStyle(altura);
    let elementAltura = elementStyleAl.getPropertyValue('height');

    let top = document.getElementById('main-content');
    let elementStyleTop = window.getComputedStyle(top);
    let elementTop = elementStyleTop.getPropertyValue('top');


    document.getElementById('footer').style.top = 'calc(' + elementAltura + ' + ' + elementTop + ' - 50px)';

}

function openPages(url, contenedor) {

    abrirUrl(url, contenedor);

    document.getElementById("main-content").style.display = 'grid';
    
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

    })

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
