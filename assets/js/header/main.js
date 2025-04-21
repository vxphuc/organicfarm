window.addEventListener("DOMContentLoaded", () => {
    fetch("../../components/header.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;
      })
      .catch(error => console.error("Lỗi khi tải header:", error));
  });