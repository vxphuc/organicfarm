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
function renderProductSections() {
  const html = products
    .filter(product => product.category === "trunque")  // Chỉ lấy sản phẩm có category trunque
    .map(product => {
      const isEven = parseInt(product.id) % 2 === 0;
      const isGitHubPages = window.location.hostname === "vxphuc.github.io";
      const basePath = isGitHubPages ? "/organicfarm/pages/product/" : "/pages/product/";
      const sectionClass = isEven ? "section reverse" : "section";
      return `
        <main class="${sectionClass}">
          <img src="${product.image}" alt="${product.name}" />
          <div>
              <h1>${product.name}</h1>
              <p>${product.description}</p>
          </div>
        </main>
      `;
    })
    .join("");

  container.innerHTML = html;
}

// Gọi hàm khi DOM đã sẵn sàng
document.addEventListener("DOMContentLoaded", renderProductSections);