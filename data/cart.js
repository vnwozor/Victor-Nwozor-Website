export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [{
        productId: "E8-BP-001",
        quantity: 2
    },   {
        productId: "E8-SL-001",
        quantity: 1
    }]; 

}


function saveToStorage () {
    localStorage.setItem('cart', JSON.stringify(cart));
}


export function addToCart (productId, quantity) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });



    if (matchingItem) {
            matchingItem.quantity += quantity;
        } else {
        cart.push({
            productId: productId,
            quantity: quantity
        });
    }

    saveToStorage();
};



export function removeFromCart (productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}