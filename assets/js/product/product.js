const container = document.getElementById("product-section-list");

function renderProductSections() {
  const html = products.map(product => {
    const isEven = parseInt(product.id) % 2 === 0;
    const sectionClass = isEven ? "section reverse" : "section";
    return `
      <main class="${sectionClass}">
        <img src="${product.image}" alt="${product.name}" />
        <div>
            <h1>${product.name}</h1>
            <p>${product.description}</p>
            <a href="../../pages/product/typeproduct.html"></a>
        </div>
      </main>
    `;
  }).join("");

  container.innerHTML = html;
}

// Gọi hàm khi DOM đã sẵn sàng
document.addEventListener("DOMContentLoaded", renderProductSections);
