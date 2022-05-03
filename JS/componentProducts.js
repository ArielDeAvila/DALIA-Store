class products extends HTMLElement{
    constructor() {
        super();
        this.title = this.getAttribute("title");
        this.description = this.getAttribute("description");
        this.src = this.getAttribute("src");
        this.price = this.getAttribute("price");
        this.render();
    }

    render() {
        this.innerHTML = 
        `<div class="product">
            <div class="picture-product">
                <img src="${this.src}" alt="producto" title="producto">
            </div>
            <div class="details">
                <strong>${this.title}</strong>
                <p class="description-product">${this.description}</p>
            </div>
            <div class="buy">
                <p>$${this.price}</p>
                <img src="IMG/Carrito.svg" alt="agregar al carrito" class="product-car">
            </div>
        </div>`
    }
}

customElements.define("product-component", products);
