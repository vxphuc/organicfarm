const listEl = document.getElementById("product-list");
const checkboxes = document.querySelectorAll(".filter-panel input[type='checkbox']");

function renderProducts(data) {
    listEl.innerHTML = data.map(p => `
      <div class="product-item" onclick="location.href='pages/product/detailproduct.html'">
        <img src="${p.image}" alt="${p.name}" />
        <h4>${p.name}</h4>
        <p>Mô tả ngắn sản phẩm...</p>
        <button onclick="alert('Chi tiết sản phẩm: ${p.name}')">Xem chi tiết</button>
      </div>
    `).join("");
  }
function filterProducts() {
  const selected = Array.from(checkboxes)
                        .filter(cb => cb.checked)
                        .map(cb => cb.value);
  const filtered = selected.length
    ? products.filter(p => selected.includes(p.category))
    : products;
  renderProducts(filtered);
}

// Gắn sự kiện lọc
checkboxes.forEach(cb => cb.addEventListener("change", filterProducts));

// Hiển thị mặc định
renderProducts(products);
