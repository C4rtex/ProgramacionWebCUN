document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".product");
    const cartCount = document.getElementById("lblCartCount");

    function addToCart(productName, price) {
        let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
        console.log(cart)
        cart.push({ name: productName, price: price });
        localStorage.setItem("cart", JSON.stringify(cart));
        cartCount.textContent = cart.length;
    }

    products.forEach(product => {
        const addButton = product.querySelector("button");
        const productName = product.querySelector("h3").textContent;
        const productPrice = product.querySelector("p:last-of-type").textContent.split(":")[1].trim();

        addButton.addEventListener("click", function() {
            addToCart(productName, productPrice);
        });
    });
});