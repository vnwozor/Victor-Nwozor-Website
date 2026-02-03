import {cart, removeFromCart} from "../data/cart.js"
import {products} from "../data/products.js"
import { formatCurrency } from "./utils/money.js";

let cartSummaryHTML = '';



cart.forEach ((cartItem) => {
    const productId = cartItem.productId

    let matchingProduct;

    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
        }
    });


    cartSummaryHTML += `
        <div class="product-container js-cart-item-container-${matchingProduct.id}">

            <div class="product-image-container">
                <img class="product-image" src="${matchingProduct.image}">
            </div>



            <div class="product-info">
                <div class="product-name">
                    ${matchingProduct.name}
                </div>

                <div class="product-price">
                    <img class="naira-icon" src="images/icons/naira.svg">
                    ${formatCurrency(matchingProduct.amounts.price)}
                </div>

                <div class="quantity-update-container">

                    <div class="product-quantity">
                        QUANTITY: ${cartItem.quantity}
                    </div>

                    <a href="" class="update">
                        Update
                    </a>
        
                </div>
                

                

                <button class="remove-btn js-remove-btn" data-product-id = ${matchingProduct.id}>
                    REMOVE FROM CART
                </button>
            </div>
        </div>
    `;
});

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-remove-btn').forEach((link) => {
    link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        removeFromCart(productId);

        const container = document.querySelector(`.js-cart-item-container-${productId}`);
        container.remove();
    });
});