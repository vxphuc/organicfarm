document.addEventListener('DOMContentLoaded', function () {
  const trunqueGrid = document.getElementById('trunque-product-grid');
  if (!trunqueGrid) return;

  const trunqueProducts = products.filter(p => p.category === 'caytrong');

  trunqueGrid.innerHTML = trunqueProducts.map(product => `
    <div class="product-item">
      <a href="./pages/product/product.html" style="text-decoration: none;">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
      </a>
    </div>
  `).join('');
});
