document.addEventListener("DOMContentLoaded", function() {
    const cartCount = document.getElementById("lblCartCount");
    let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    cartCount.textContent = cart.length;
});