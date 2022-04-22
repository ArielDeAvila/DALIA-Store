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
    


    
}
