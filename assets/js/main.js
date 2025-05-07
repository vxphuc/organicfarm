// ====== Thêm base tag tự động ======
const base = document.createElement('base');
base.href = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost'
  ? '/'
  : '/organicfarm/';
document.head.appendChild(base);

// ====== Fetch header sau khi DOM sẵn sàng ======
window.addEventListener("DOMContentLoaded", async () => {
  const isLocal = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost";
  const basePath = isLocal ? "" : "/organicfarm";

  try {
    const headerResponse = await fetch(`${basePath}/components/header.html`);
    if (!headerResponse.ok) {
      throw new Error(`Không thể tải header: ${headerResponse.status}`);
    }
    const headerHtml = await headerResponse.text();
    
    const headerPlaceholder = document.getElementById("header-placeholder");
    if (headerPlaceholder) {
      headerPlaceholder.innerHTML = headerHtml;
    } else {
      console.error("Không tìm thấy phần tử #header-placeholder để chèn header!");
    }
  } catch (error) {
    console.error("Lỗi khi tải header:", error);
  }
});

document.querySelectorAll('.collapsible-wrapper').forEach(wrapper => {
  const button = wrapper.querySelector('.toggle-about');
  const content = wrapper.querySelector('.collapsible-content');

  button.addEventListener('click', () => {
    content.classList.toggle('expanded');
    button.textContent = content.classList.contains('expanded') ? 'Thu gọn <<' : 'Xem thêm >>';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const featuredGrid = document.getElementById('featured-product-grid');
  
  // Lấy 3 sản phẩm mới nhất từ mảng products
  const latestProducts = products.slice(-3).reverse();

  // Hiển thị vào grid sản phẩm nổi bật
  featuredGrid.innerHTML = latestProducts.map(product => `
    <div class="product-item">
      <a href="./pages/product/detailproduct.html">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
      </a>
    </div>
  `).join('');
});