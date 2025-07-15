document.addEventListener('DOMContentLoaded', function () {
  const trunqueGrid = document.getElementById('trunque-product-grid');
  if (!trunqueGrid) return;

  const trunqueProducts = products.filter(p => p.category === 'trunque');
  const isGitHubPages = window.location.hostname === "vxphuc.github.io";
  const basePath = isGitHubPages ? "/organicfarm/pages/product/" : "/pages/product/";
  trunqueGrid.innerHTML = trunqueProducts.map(product => `
    <div class="product-item">
      <a href="${basePath}detailproduct.html?id=${product.id}" style="text-decoration: none;">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
      </a>
    </div>
  `).join('');
});
