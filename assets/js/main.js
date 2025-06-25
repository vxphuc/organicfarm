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

  // Sau khi header đã được gán xong, mới gắn sự kiện
  const btn = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.header222 .menu');

  if (btn && menu) {
    btn.addEventListener('click', function () {
      menu.classList.toggle('show');
    });

    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.remove('show');
      }
    });
  }
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
document.addEventListener('DOMContentLoaded', function() {
    // Đợi header được render xong
    setTimeout(function() {
        const btn = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.header222 .menu');
        if (btn && menu) {
            btn.addEventListener('click', function() {
                menu.classList.toggle('show');
            });

            // Đóng menu khi bấm ngoài menu (tùy chọn)
            document.addEventListener('click', function(e) {
                if (!menu.contains(e.target) && !btn.contains(e.target)) {
                    menu.classList.remove('show');
                }
            });
        }
    }, 100); // delay một chút để chắc chắn header đã render xong
});
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");
  const tabImage = document.getElementById("tab-image");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-tab");
      const newImage = button.getAttribute("data-img");

      tabButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      tabContents.forEach(content => {
        if (content.style.display !== "none") {
          content.classList.add("fade-out");
          setTimeout(() => {
            content.style.display = "none";
            content.classList.remove("fade-out");
          }, 300);
        }
      });

      const targetContent = document.getElementById(targetId);
      setTimeout(() => {
        targetContent.style.display = "block";
        targetContent.classList.add("fade-out");
        setTimeout(() => {
          targetContent.classList.remove("fade-out");
        }, 50);
      }, 300);

      if (tabImage && newImage) {
        tabImage.classList.add("fade-out");

        setTimeout(() => {
          tabImage.setAttribute("src", newImage);
          tabImage.classList.remove("fade-out");
        }, 300);
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll('.fade-in-section');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // chỉ chạy 1 lần
      }
    });
  }, appearOptions);

  faders.forEach(section => {
    appearOnScroll.observe(section);
  });
});