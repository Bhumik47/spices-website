function handleScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled-down');
        header.classList.remove('scrolled-up');
    } else {
        header.classList.remove('scrolled-down');
        header.classList.add('scrolled-up');

    }
}

// Listen for the 'scroll' event and call the handleScroll function
window.addEventListener('scroll', handleScroll);

// Add this JavaScript code if you want to zoom the P tag on hover

// Function to add or remove the 'zoomed' class for the P tag on product hover
function handleProductHover(event) {
    const product = event.target;
    const productP = product.querySelector('p');
    if (event.type === 'mouseenter') {
        productP.classList.add('zoomed');
    } else if (event.type === 'mouseleave') {
        productP.classList.remove('zoomed');
    }
}

// Get all product elements and add event listeners for hover
const products = document.querySelectorAll('.product');
products.forEach((product) => {
    product.addEventListener('mouseenter', handleProductHover);
    product.addEventListener('mouseleave', handleProductHover);
});
