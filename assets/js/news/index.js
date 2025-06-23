let allNews = [];
let currentIndex = 0;
const INITIAL_COUNT = 9;
const LOAD_MORE_COUNT = 6;

const data = {
  fetchData: async () => {
    const url = `https://organicfarm.onrender.com/new/get-all-news`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      allNews = result.news || [];
      data.renderNext(); // render tin đầu tiên
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },

  renderNext: () => {
    const mainContent = document.querySelector(".main-content");
    const loadMoreBtn = document.getElementById("load-more");

    const nextItems = allNews.slice(currentIndex, currentIndex + (currentIndex === 0 ? INITIAL_COUNT : LOAD_MORE_COUNT));

    nextItems.forEach(news => {
      const imgSrc = news.thumbnail || "assets/img/no-image.png";
      const div = document.createElement("div");
      div.className = "main";
      div.innerHTML = `
        <a href="pages/resources/detailnew.html?slug=${news.slug}">
          <img src="${imgSrc}" alt="Ảnh tin tức" class="img">
          <div class="text">
            <h3>${news.title || ""}</h3>
            <p>${news.description || ""}</p>
            <button class="new-btn">&gt;&gt; Xem chi tiết</button>
          </div>
        </a>
      `;
      mainContent.appendChild(div);
    });

    currentIndex += (currentIndex === 0 ? INITIAL_COUNT : LOAD_MORE_COUNT);

    // Ẩn nút nếu đã hiển thị hết
    if (currentIndex >= allNews.length && loadMoreBtn) {
      loadMoreBtn.style.display = "none";
    }
  },

  start: () => {
    data.fetchData();
  }
};

// Gắn sự kiện cho nút "Nhiều hơn"
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("load-more");
  if (btn) {
    btn.addEventListener("click", data.renderNext);
  }
});

data.start();
