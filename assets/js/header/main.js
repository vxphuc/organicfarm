
let basePath = "";
if (window.location.hostname.includes("github.io")) {
  basePath = "/organicfarm";
}

function adjustHeaderRelativePaths(container, depth) {
  const prefix = "../".repeat(depth);

  container.querySelectorAll("img[src], a[href]").forEach(el => {
    if (el.tagName === "IMG") {
      const src = el.getAttribute("src");
      if (src && !src.startsWith("http") && !src.startsWith("/") && !src.startsWith(basePath)) {
        el.src = prefix + src;
      }
    }

    if (el.tagName === "A") {
      const href = el.getAttribute("href");
      if (
        href &&
        !href.startsWith("http") &&
        !href.startsWith("/") &&
        !href.startsWith("#") &&
        !href.startsWith(basePath)
      ) {
        el.href = prefix + href;
      }
    }
  });
}

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const headerResponse = await fetch(`${basePath}/components/header.html`);
    let headerHtml = await headerResponse.text();

    const headerPlaceholder = document.getElementById("header-placeholder");
    if (headerPlaceholder) {
      headerPlaceholder.innerHTML = headerHtml;

      // Tính độ sâu trang để thêm ../ cho ảnh/link trong header
      const pathDepth = location.pathname
        .replace(/\\/g, "/")
        .replace(/^\//, "")
        .split("/")
        .filter(p => p && !p.endsWith(".html")).length;

      adjustHeaderRelativePaths(headerPlaceholder, pathDepth);

      const btn = document.querySelector('.menu-toggle');
      const menu = document.querySelector('.header222 .menu');
      if (btn && menu) {
        btn.addEventListener('click', () => {
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