document.addEventListener("DOMContentLoaded", () => {
  const productName = document.getElementById("productName");
  const productPrice = document.getElementById("productPrice");
  const imageURL = document.getElementById("imageURL");
  const productBtn = document.getElementById("productBtn");

  let productSet = [];

  productBtn.addEventListener("click", () => {
    const productCard = {
      name: productName.value,
      num: productPrice.value,
      URL: imageURL.value,
    };
      productSet.push(productCard);
      console.log(productSet);
  });

});
