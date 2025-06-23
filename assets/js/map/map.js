const form = document.getElementById('contact-form');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = form.action;
    const response = await fetch(action, {
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