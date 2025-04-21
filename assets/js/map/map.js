const locations = [
    {
      name: "Đại lý Nha Trang",
      lat: 12.238791,
      lng: 109.196749,
      address: "316 Quốc Lộ 1A, Vĩnh Lương, Nha Trang"
    },
    {
      name: "Chi nhánh TP.HCM",
      lat: 10.762622,
      lng: 106.660172,
      address: "123 Lê Lợi, Q.1, TP.HCM"
    }
  ];
  
  function initMap() {
    const center = { lat: 11.0, lng: 108.0 };
  
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: center,
    });
  
    locations.forEach(location => {
      const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.name
      });
  
      const infoWindow = new google.maps.InfoWindow({
        content: `<h3>${location.name}</h3><p>${location.address}</p>`
      });
  
      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    });
  }
  