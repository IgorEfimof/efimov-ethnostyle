
function showProduct(productName) {
  const products = document.querySelectorAll('.product-card');
  products.forEach(product => {
    const title = product.querySelector('h3').textContent;
    product.style.display = title === productName ? 'block' : 'none';
  });
}

function showAll() {
  const products = document.querySelectorAll('.product-card');
  products.forEach(product => {
    product.style.display = 'block';
  });
}

function contactSeller(productName) {
  window.location.href = "mailto:efimof.ig@yandex.ru?subject=Запрос%20на%20покупку%20" + encodeURIComponent(productName) + "&body=Здравствуйте,%20я%20хочу%20приобрести%20товар:%20" + encodeURIComponent(productName);
}
