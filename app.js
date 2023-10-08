const products = [
    {
        id: 1,
        title: 'Lenovo Yoga',
        price: 3000,
    },
    {
        id: 2,
        title: 'Acer Aspire',
        price: 1800,
    },
    {
        id: 3,
        title: 'Dell Vostro',
        price: 3400
    },
];

let order = [];

function addToBasket(productId) {
    const productToAdd = products.find(product => product.id === productId);
    const isProductInOrder = order.some(item => item.id === productId);

    if (isProductInOrder) {
        alert('Этот продукт уже находится в корзине.');
        return;
    }

    order = [...order, productToAdd];
    renderCart();
    rerenderTotalPrice();
}

function removeFromBasket(productId) {
    order = order.filter(item => item.id !== productId);
    renderCart();
    rerenderTotalPrice();
}


function rerenderTotalPrice() {
    document.getElementById('total').innerText = order.reduce((total, item) => total + item.price, 0);
}

function renderCart() {
    const cart = document.getElementById('basket-items');

    cart.innerHTML = '';
    order.forEach(item => {
        const el = document.createElement('li');
        el.innerText = item.title;
        el.onclick = () => removeFromBasket(item.id);
        cart.appendChild(el);
    })
}