function abrirUrl(url, contenedor) {
    $.get(url, {}, function (data) {
        $("#" + contenedor).html(data);
    });

   
}



function topFooter() {
    

    let altura = document.getElementById('main-content');
    let elementStyleAl = window.getComputedStyle(altura);
    let elementAltura = elementStyleAl.getPropertyValue('height');

    console.log(elementAltura);

    let top = document.getElementById('main-content');
    let elementStyleTop = window.getComputedStyle(top);
    let elementTop = elementStyleTop.getPropertyValue('top');


    document.getElementById('footer').style.top = 'calc(' + elementAltura + ' + ' + elementTop + ' - 50px)';


}

function activador(url, contenedor) {
    
    abrirUrl(url, contenedor);
    
    topFooter();
}



function bucle(name) {
    let div = document.getElementById(name);

    for (var i = 1; i <= 15; i++){
        div.innerHTML += `<product-component></product-component>`
        
    }
}

function menu_close() {
    document.getElementById("menu-hide").style.display = "none";
}

function menu_open() {
    document.getElementById("menu-hide").style.display = "block";
}
