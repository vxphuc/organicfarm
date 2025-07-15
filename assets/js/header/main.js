// ====== Xác định basePath dựa vào cấp thư mục ======
let basePath = "";

if (window.location.hostname.includes("github.io")) {
  basePath = "/organicfarm/";
} else {
  const currentPath = window.location.pathname;
  const isInPages = currentPath.includes("/pages/");
  if (isInPages) {
    const afterPages = currentPath.split("/pages/")[1];
    const folderDepth = afterPages.split("/").length - 1;
    basePath = "../".repeat(folderDepth + 1);
  } else {
    basePath = "./";
  }
}

// ====== Gắn toggle menu sau khi header render xong ======
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

// ====== Load header.html và xử lý menu/logo/link ======
window.addEventListener("DOMContentLoaded", async () => {
  try {
    const headerResponse = await fetch(`${basePath}components/header.html`);
    if (!headerResponse.ok) throw new Error(`Không thể tải header: ${headerResponse.status}`);
    
    const headerHtml = await headerResponse.text();
    const headerPlaceholder = document.getElementById("header-placeholder");

    if (headerPlaceholder) {
      headerPlaceholder.innerHTML = headerHtml;

      // ✅ Sửa đường dẫn logo (nếu là tương đối)
      const logo = headerPlaceholder.querySelector('.logo-link img');
      if (logo) {
        const rawSrc = logo.getAttribute('src');
        if (rawSrc && !rawSrc.startsWith('http') && !rawSrc.startsWith('/')) {
          const prefix = basePath.endsWith('/') ? basePath : `${basePath}/`;
          logo.setAttribute('src', prefix + rawSrc);
        }
      }

      // ✅ Sửa tất cả <a href="..."> trong header thành đúng path
      const links = headerPlaceholder.querySelectorAll('a[href]');
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('/') && !href.startsWith('#')) {
          link.setAttribute('href', `${basePath}${href}`.replace(/\/{2,}/g, '/'));
        }
      });
      
      // ✅ Gắn sự kiện menu toggle
      initMobileMenuToggle();
    }
  } catch (error) {
    console.error("Lỗi khi tải header:", error);
  }
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
