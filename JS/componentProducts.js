class ListComponent extends HTMLElement{

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        this.divConteiner = document.createElement('div');
        this.divContent = document.createElement('h1');

        this.divConteiner.appendChild(this.divContent);

        this.divConteiner.innerHTML = "hola";

        shadow.appendChild(this.divConteiner);
        shadow.appendChild(this.divContent);


    }

}

customElements.define("product-contenier", ListComponent);

let element = document.getElementById('content-products');
let hijos = document.createElement('product-contenier')

element.appendChild(hijos);
