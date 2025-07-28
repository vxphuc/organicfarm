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
  const response = await fetch('https://formspree.io/f/xblkydje', {
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
// function initMap() {
//   // Tọa độ đích: OrganicFarm
//   const destination = { lat: 12.3079013, lng: 109.1649582 };

//   // Tạo bản đồ tại điểm đích
//   const map = new google.maps.Map(document.querySelector(".map"), {
//     zoom: 14,
//     center: destination,
//   });

//   // Đánh dấu vị trí đích
//   new google.maps.Marker({
//     position: destination,
//     map: map,
//     title: "OrganicFarm",
//   });

//   // Tìm vị trí hiện tại của người dùng
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const origin = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         };

//         // Vẽ tuyến đường từ người dùng đến điểm đích
//         const directionsService = new google.maps.DirectionsService();
//         const directionsRenderer = new google.maps.DirectionsRenderer();
//         directionsRenderer.setMap(map);

//         directionsService.route(
//           {
//             origin: origin,
//             destination: destination,
//             travelMode: google.maps.TravelMode.DRIVING,
//           },
//           (response, status) => {
//             if (status === "OK") {
//               directionsRenderer.setDirections(response);
//             } else {
//               alert("Không thể tìm đường: " + status);
//             }
//           }
//         );
//       },
//       () => {
//         alert("Không thể truy cập vị trí người dùng.");
//       }
//     );
//   } else {
//     alert("Trình duyệt không hỗ trợ Geolocation.");
//   }
// }
