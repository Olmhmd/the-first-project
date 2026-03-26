// Order button alert
document.querySelector(".order-btn").addEventListener("click", function () {
    alert("🍔 Your order has been received! Thank you for choosing Famous Burger");
});

// Scroll animation for images
const images = document.querySelectorAll(".gallery-img");

window.addEventListener("scroll", () => {
    images.forEach(img => {
        const imgTop = img.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (imgTop < windowHeight - 100) {
            img.classList.add("show");
        }
    });
});