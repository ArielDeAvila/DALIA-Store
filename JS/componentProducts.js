class products extends HTMLElement{
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `<div class="product">
            <div class="picture-product">
                <p>Imagen</p>
            </div>
            <div class="details">
                <strong>Nombre del producto</strong>
                <p class="description-product">Breve descripción del producto</p>
                <div class="buy">
                    <p>$120.000,00</p>
                    <img src="IMG/Carrito.svg" alt="agregar al carrito" class="product-car">
                </div>
            </div>
        </div>`
    }
}

customElements.define("product-component", products);
