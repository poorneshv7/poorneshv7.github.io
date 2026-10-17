// .addEventListener scans for the 'Buy Now' button click.

document.addEventListener("DOMContentLoaded", () => {
    const buyButtons = document.querySelectorAll(".buy-btn");

    buyButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            // when clicked, the website will smoothly scroll to the top of the page- simulating a product purchase.
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });
});