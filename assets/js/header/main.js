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