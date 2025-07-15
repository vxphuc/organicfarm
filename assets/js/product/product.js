const container = document.getElementById("product-section-list");

function renderProductSections() {
  const html = products.map(product => {
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
            <a href="${basePath}detailproduct.html?id=${product.id}">
            <button class="btn">Xem chi tiết</button>
            </a>
        </div>
      </main>
    `;
  }).join("");

  container.innerHTML = html;
}

// Gọi hàm khi DOM đã sẵn sàng
document.addEventListener("DOMContentLoaded", renderProductSections);
