const form = document.getElementById('contact-form');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  // Lấy giá trị token reCAPTCHA
  const token = grecaptcha.getResponse();

  if (!token) {
    alert("Vui lòng xác minh bạn không phải robot bằng reCAPTCHA.");
    return;
  }

  const data = new FormData(form);

  // Gửi form đến Formspree
  const response = await fetch('https://formspree.io/f/mnnvgayg', {
    method: 'POST',
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    alert("Gửi liên hệ thành công!");
    form.reset();
    grecaptcha.reset(); // reset mã reCAPTCHA
  } else {
    alert("Có lỗi xảy ra. Vui lòng thử lại.");
  }
});
