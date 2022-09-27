// ITERATION 1


function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subtotalPrice = parseInt(price) * parseInt(quantity);
product.querySelector(".subtotal span").innerHTML = subtotalPrice
return subtotalPrice
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product');
  let totalAbsolut = 0

  
  for (let i = 0; i < products.length; i++) {

   totalAbsolut += updateSubtotal(products[i]);
  }
  document.querySelector("#total-value span").innerHTML = totalAbsolut;

  //... your code goes here

  // ITERATION 3
  
  
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
