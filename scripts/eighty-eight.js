import {cart, addToCart} from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';

let productsHTML = '';


products.forEach((product) => {
    productsHTML += `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image" src="${product.image}" alt="">
            </div>

            <div>
                <div class="product-name">
                    ${product.name}
                </div>
                <div class="product-info">
                    <div class="price-container">
                        <img class="naira-icon" src="images/icons/naira.svg">
                        ${formatCurrency(product.amounts.price)}
                    </div>

                    <div>
                        ${product.amounts.pcs}pcs
                    </div>
                </div>

                <div class="product-quantity-container">
                    <select class="product-quantity js-quantity-selector-${product.id}">
                        <option value="10">10</option>
                        <option value="9">9</option>
                        <option value="8">8</option>
                        <option value="7">7</option>
                        <option value="6">6</option>    
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option selected value="1">1</option>
                    </select>

                    <div class="added-to-cart js-added-to-cart-${product.id}">
                        <img class="check-mark" src="images/icons/checklist_2569190.png">
                        Added
                    </div>
                </div>


                <div class="btn-container">
                    <button class="add-to-cart-btn js-add-to-cart" 
                    data-product-id="${product.id}">
                        ADD TO CART
                    </button>
                </div>

            </div>
        </div>
    `;
});


document.querySelector('.js-products-grid').innerHTML = productsHTML;


function updateCartQuantity () {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });


    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}






document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;

        const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
        const quantity = Number(quantitySelector.value);


        addToCart(productId, quantity);
        updateCartQuantity();


        
        const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);
        addedMessage.classList.add('added-to-cart-visible');

        setTimeout(() => {
            addedMessage.classList.remove('added-to-cart-visible');
        }, 2000);


        const cartNumber = document.querySelector('.js-cart-quantity');
        cartNumber.classList.add('cart-number');

        
    })
});