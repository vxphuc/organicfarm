document.addEventListener("DOMContentLoaded", function() {
    // Tạo nút scroll to top
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.id = "scrollTopBtn";
    scrollTopBtn.title = "Lên đầu trang";
    scrollTopBtn.innerHTML = "&#8679;";
    document.body.appendChild(scrollTopBtn);

    // CSS cơ bản cho nút
    const style = document.createElement("style");
    style.innerHTML = `
        #scrollTopBtn {
            display: none;
            position: fixed;
            bottom: 40px;
            right: 40px;
            z-index: 99;
            font-size: 24px;
            border: none;
            outline: none;
            background-color: #1eb11e;
            color: white;
            cursor: pointer;
            padding: 10px 16px;
            border-radius: 50%;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
            transition: opacity 0.3s;
        }
        #scrollTopBtn:hover {
            background-color: #0d7c0d;
        }
    `;
    document.head.appendChild(style);

    // Xử lý hiện/ẩn nút khi cuộn
    window.addEventListener("scroll", function() {
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    // Bấm nút thì cuộn mượt lên đầu trang
    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
