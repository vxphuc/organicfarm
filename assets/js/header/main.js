// ====== Thêm base tag tự động ======
const base = document.createElement('base');
base.href = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost'
  ? '/'
  : '/organicfarm/';
document.head.appendChild(base);

// ====== Fetch header ======
window.addEventListener("DOMContentLoaded", () => {
  const isLocal = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost";
  const basePath = isLocal ? "" : "/organicfarm";

  const headerPath = `${basePath}/components/header.html`;

  fetch(headerPath)
    .then(response => {
      if (!response.ok) throw new Error(`Không thể tải header: ${response.status}`);
      return response.text();
    })
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;
    })
    .catch(error => console.error("Lỗi khi tải header:", error));
});
