const productList = document.querySelector('.w-1/2.flex.flex-wrap'); // Replace with your selector for the product list
const productFormSection = document.getElementById('productFormSection');
const addToCartButton = document.createElement('button'); // Create button dynamically

addToCartButton.textContent = 'Add to Cart';
addToCartButton.classList.add('bg-green-500', 'hover:bg-green-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded'); // Add Tailwind CSS classes

productList.addEventListener('click', (event) => {
  // Check if a checkbox was clicked within the product list
  if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
    // Toggle visibility of the product form
    productFormSection.classList.toggle('hidden');
  }
});