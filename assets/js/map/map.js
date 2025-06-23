const form = document.getElementById('contact-form');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const data = new FormData(form);

  // Thay link bên dưới bằng mã Formspree của bạn
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
    grecaptcha.reset();
  } else {
    alert("Có lỗi xảy ra. Vui lòng thử lại.");
  }
});
