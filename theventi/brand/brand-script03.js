const lat01 = 35.168671; // 위도
const lng01 = 129.132526; // 경도
const lat02 = 37.481897; // 위도
const lng02 = 126.897173; // 경도

// ====================================map01===================================
const mapContainer01 = document.getElementById("map01"), // 지도를 표시할 div
  mapOption01 = {
    center: new kakao.maps.LatLng(lat01, lng01), // 지도의 중심좌표
    level: 5, // 지도의 확대 레벨
  };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
const map01 = new kakao.maps.Map(mapContainer01, mapOption01);

// 마커가 표시될 위치입니다
const markerPosition01 = new kakao.maps.LatLng(lat01, lng01);

// 마커를 생성합니다
const marker01 = new kakao.maps.Marker({
  position: markerPosition01,
});

// 마커가 지도 위에 표시되도록 설정합니다
marker01.setMap(map01);

// 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
const iwContent01 =
    '<div style="padding:5px; font-size:0.9rem"><a href="https://map.kakao.com/?urlX=984811.0&urlY=470550.0&itemId=904601571&q=%EB%8D%94%EB%B2%A4%ED%8B%B0%20%EB%B3%B8%EC%82%AC&srcid=904601571&map_type=TYPE_MAP&from=roughmap" style="color:black" target="_blank">더벤티 부산&교육센터</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
  iwRemoveable01 = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

// 인포윈도우를 생성합니다
const infowindow01 = new kakao.maps.InfoWindow({
  content: iwContent01,
  removable: iwRemoveable01,
});

// 마커에 클릭이벤트를 등록합니다
kakao.maps.event.addListener(marker01, "click", function () {
  // 마커 위에 인포윈도우를 표시합니다
  infowindow01.open(map01, marker01);
});

// 확대&축소
// 지도타입 컨트롤의 지도 또는 스카이뷰 버튼을 클릭하면 호출되어 지도타입을 바꾸는 함수입니다
function setMapType(maptype) {
  const roadmapControl = document.getElementById("btnRoadmap");
  const skyviewControl = document.getElementById("btnSkyview");
  if (maptype === "roadmap") {
    map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
    roadmapControl.className = "selected_btn";
    skyviewControl.className = "btn";
  } else {
    map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
    skyviewControl.className = "selected_btn";
    roadmapControl.className = "btn";
  }
}

// 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomIn() {
  map.setLevel(map.getLevel() - 1);
}

// 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomOut() {
  map.setLevel(map.getLevel() + 1);
}

// ====================================map02===================================
const mapContainer02 = document.getElementById("map02"), // 지도를 표시할 div
  mapOption02 = {
    center: new kakao.maps.LatLng(lat02, lng02), // 지도의 중심좌표
    level: 5, // 지도의 확대 레벨
  };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
const map02 = new kakao.maps.Map(mapContainer02, mapOption02);

// 마커가 표시될 위치입니다
const markerPosition02 = new kakao.maps.LatLng(lat02, lng02);

// 마커를 생성합니다
const marker02 = new kakao.maps.Marker({
  position: markerPosition02,
});

// 마커가 지도 위에 표시되도록 설정합니다
marker02.setMap(map02);

// 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
const iwContent02 =
    '<div style="padding:5px; font-size:0.9rem"><a href="https://map.kakao.com/?urlX=476711.0&urlY=1107404.0&name=%EC%84%9C%EC%9A%B8%20%EA%B5%AC%EB%A1%9C%EA%B5%AC%20%EB%94%94%EC%A7%80%ED%84%B8%EB%A1%9C33%EA%B8%B8%2027&map_type=TYPE_MAP&from=roughmap" style="color:black" target="_blank">더벤티 서울&교육센터</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
  iwRemoveable02 = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

// 인포윈도우를 생성합니다
const infowindow02 = new kakao.maps.InfoWindow({
  content: iwContent02,
  removable: iwRemoveable02,
});

// 마커에 클릭이벤트를 등록합니다
kakao.maps.event.addListener(marker02, "click", function () {
  // 마커 위에 인포윈도우를 표시합니다
  infowindow02.open(map02, marker02);
});
