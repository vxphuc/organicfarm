// ====== Xác định basePath phù hợp ======
let basePath = "";
const pathname = window.location.pathname;

if (window.location.hostname.includes("github.io")) {
  basePath = "/organicfarm";
} else if (pathname.includes("/organicfarm")) {
  basePath = "/organicfarm";
} else {
  basePath = "."; // fallback khi chạy local
}

// ====== Gắn sự kiện toggle menu mobile ======
function initMobileMenuToggle() {
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

// ====== Fetch header khi DOM sẵn sàng ======
window.addEventListener("DOMContentLoaded", async () => {
  try {
    const headerResponse = await fetch(`${basePath}/components/header.html`);
    if (!headerResponse.ok) {
      throw new Error(`Không thể tải header: ${headerResponse.status}`);
    }
    const headerHtml = await headerResponse.text();

    const headerPlaceholder = document.getElementById("header-placeholder");
    if (headerPlaceholder) {
      headerPlaceholder.innerHTML = headerHtml;

      // Gắn sự kiện menu toggle sau khi header đã render
      initMobileMenuToggle();
    }
  } catch (error) {
    console.error("Lỗi khi tải header:", error);
  }
});

// ====== Toggle "Xem thêm" trong phần giới thiệu ======
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.collapsible-wrapper').forEach(wrapper => {
    const button = wrapper.querySelector('.toggle-about');
    const content = wrapper.querySelector('.collapsible-content');

    if (button && content) {
      button.addEventListener('click', () => {
        content.classList.toggle('expanded');
        button.textContent = content.classList.contains('expanded') ? 'Thu gọn <<' : 'Xem thêm >>';
      });
    }
  });
});

// ====== Hiển thị sản phẩm nổi bật ======
document.addEventListener('DOMContentLoaded', function () {
  const featuredGrid = document.getElementById('featured-product-grid');
  if (typeof products !== 'undefined' && featuredGrid) {
    const latestProducts = products.slice(-3).reverse();
    featuredGrid.innerHTML = latestProducts.map(product => `
      <div class="product-item">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
      </div>
    `).join('');
  }
});

// ====== Tabs chuyển đổi nội dung ======
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

// ====== Scroll animation khi xuất hiện trong màn hình ======
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
const observer = new MutationObserver(() => {
  const submenuToggles = document.querySelectorAll(".submenu-toggle");

  submenuToggles.forEach(toggle => {
    toggle.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        this.parentElement.classList.toggle("open");
      }
    });
  });
});

const headerEl = document.getElementById("header-placeholder");
if (headerEl) {
  observer.observe(headerEl, { childList: true });
}
