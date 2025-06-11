const data = {
  fetchData: async () => {
    const url = `https://organicfarm.onrender.com/new/get-all-news`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },

  render: (data) => {
    const main_content = document.querySelector(".main-content");
    console.log(data);
    const news = data.news.map((news) => {
      return `
       <div class="main">
            <a href="pages/aboutus/press/detailpress.html">
            <img src=${news.image[0]} alt="Mặt nạ nha đam" class="img">
                <div class="text">
                    <h2>${news.title}</h2>
                    <p>${news.description}</p>
                </div>
            </a>
        </div>
        `;
    });
    main_content.innerHTML = news;
  },

  start: async () => {
    const newData = await data.fetchData();
    data.render(newData);
  },
};

data.start();
