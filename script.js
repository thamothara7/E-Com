// sample product data
const products = [
    { id: 1, name: "Smart Watch", price: 1999, img: "Assets/Watch.jpg" },
    { id: 2, name: "Headphones", price: 1499, img: "Assets/Headphones.jpg" },
    { id: 3, name: "Bluetooth Speaker", price: 999, img: "Assets/Speaker.jpg" },
    { id: 4, name: "Power Bank", price: 799, img: "Assets/Powerbank.jpg" }
];

let cartCount = 0;

// load products into page
const productList = document.getElementById("product-list");

products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart()">Add to Cart</button>
    `;

    productList.appendChild(card);
});

// add to cart
function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}
