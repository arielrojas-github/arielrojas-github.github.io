document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutForm = document.getElementById('checkout-form');

    // Retrieve cart data from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const products = [
        { id: 1, name: "LD01 LOUNGE CHAIR", price: 200, image: "other/image/1.png" },
        { id: 2, name: "LD02 LOUNGE CHAIR", price: 250, image: "other/image/2.png" },
        { id: 3, name: "LD03 LOUNGE CHAIR", price: 290, image: "other/image/3.png" },
        { id: 4, name: "LD04 LOUNGE CHAIR", price: 200, image: "other/image/4.png" },
        { id: 5, name: "LD05 LOUNGE CHAIR", price: 300, image: "other/image/5.png" },
        { id: 6, name: "LD06 LOUNGE CHAIR", price: 200, image: "other/image/6.png" },
        { id: 7, name: "LD07 LOUNGE CHAIR", price: 200, image: "other/image/7.png" },
        { id: 8, name: "LD08 LOUNGE CHAIR", price: 200, image: "other/image/8.png" }
    ];

    const displayCart = () => {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const product = products.find(p => p.id == item.product_id);
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" style="width: 50px;">
                <div>
                    <h4>${product.name}</h4>
                    <p>Price: $${product.price}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Subtotal: $${item.quantity * product.price}</p>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
            total += item.quantity * product.price;
        });

        totalPriceElement.textContent = total.toFixed(2);
    };

    const handleCheckout = (event) => {
        event.preventDefault();
        const formData = new FormData(checkoutForm);
        const orderDetails = {
            name: formData.get('name'),
            email: formData.get('email'),
            address: formData.get('address'),
            phone: formData.get('phone'),
            cart
        };
        console.log('Order placed:', orderDetails);
        alert('Order placed successfully!');
        localStorage.removeItem('cart');
    };

    displayCart();
    checkoutForm.addEventListener('submit', handleCheckout);
});
