const data = {
  fetchData: async () => {
    const url = `https://organicfarm.onrender.com/new/get-all-news`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Data fetched successfully:", data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },

   render: (data) => {
    const main_content = document.querySelector(".main-content");
    if (!data || !Array.isArray(data.news)) {
      main_content.innerHTML = "<p>Không có dữ liệu tin tức.</p>";
      return;
    }
    const newsHtml = data.news.map((news) => {
      // Lấy thumbnail, nếu không có thì dùng ảnh mặc định
      const imgSrc = news.thumbnail || "assets/img/no-image.png";
      return `
       <div class="main">
            <a href="pages/resources/detailnew.html?slug=${news.slug}">
                <img src="${imgSrc}" alt="Ảnh tin tức" class="img">
                <div class="text">
                    <h3>${news.title || ""}</h3>
                    <p>${news.description || ""}</p>
                    <button class="new-btn">&gt;&gt; Xem chi tiết</button>
                </div>
                
            </a>
        </div>
        `;
    }).join("");

    main_content.innerHTML = newsHtml;
  },

  start: async () => {
    const newData = await data.fetchData();
    data.render(newData);
  },
};

data.start();