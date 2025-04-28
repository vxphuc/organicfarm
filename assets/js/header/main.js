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
