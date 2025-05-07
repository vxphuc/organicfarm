// assets/js/product/render-products.js

// 1. Tính prefix tới thư mục /assets/img/anh/ dựa vào depth của URL
function getImgRoot() {
  const parts = window.location.pathname.split('/');  
  // parts ví dụ: 
  // [ "", "index.html" ]                → length=2 → depth=0
  // [ "", "pages","product","typeproduct.html" ] → length=4 → depth=2
  const depth = parts.length - 2;          
  const prefix = depth > 0 ? '../'.repeat(depth) : '';
  return `${prefix}`;
}

// 2. Lấy IMG_ROOT
const IMG_ROOT = getImgRoot();

// 3. Render sản phẩm
const listEl = document.getElementById("product-list");
function renderProducts(data) {
  listEl.innerHTML = data.map(p => `
    <div class="product-item" onclick="location.href='detailproduct.html'">
      <img src="${IMG_ROOT}${p.image}" alt="${p.name}" />
      <h4>${p.name}</h4>
      <button onclick="alert('Chi tiết sản phẩm: ${p.name}')">Xem chi tiết</button>
    </div>
  `).join("");
}

// 4. Lọc (giữ nguyên)
const checkboxes = document.querySelectorAll(".filter-panel input[type='checkbox']");
function filterProducts() {
  const sel = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
  const filtered = sel.length ? products.filter(p => sel.includes(p.category)) : products;
  renderProducts(filtered);
}
checkboxes.forEach(cb => cb.addEventListener("change", filterProducts));

// 5. Render lần đầu
renderProducts(products);
