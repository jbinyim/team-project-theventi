"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//===============================================================
// main popup
// delete
function openPopup() {
  window.open("./popup.html", "popup.html", "width=478,height=578,top=50%,left=50%,status=no,toolbar=no,scrollbars=no,menubar=no,resizable=no");
} // openPopup();
//=================================
//slider


var arrows = document.querySelectorAll(".arrow");
var imgContainer = document.querySelector("#img-container");
var img = document.createElement("img");
var src = document.createAttribute("src");
var slidePagers = document.querySelector(".slide_pagers");
var pagers = document.querySelectorAll(".slide_pagers li");
var imgs = ["res-banner01.jpg", "res-banner02.jpg", "res-banner03.jpg", "res-banner04.jpg"];

var originalImgs = _toConsumableArray(imgs);

function changeImageSource() {
  if (window.innerWidth <= 850) {
    imgs = imgs.map(function (img) {
      return img.replace("res-", "");
    });
  } else {
    imgs = _toConsumableArray(originalImgs);
  }
} // 화면 크기가 변경될 때마다 실행


window.addEventListener("resize", changeImageSource); // // 페이지 로드 시 실행
// changeImageSource();

var imgSrc = "../img/01main/main/topsection/".concat(imgs[0]);
src.value = imgSrc;
img.setAttributeNode(src);
imgContainer.appendChild(img);
var imgwidth = window.innerWidth;
img.style.width = imgwidth;
img.style.height = imgContainer.innerHeight;
var i = 0;

var changeImg = function changeImg(direction) {
  if (direction === "next") {
    i++;

    if (i >= imgs.length) {
      i = 0;
    }

    reset();
    pagers[i].classList.add("active");
  } else if (direction === "prev") {
    i--;

    if (i < 0) {
      i = imgs.length - 1;
    }

    reset();
    pagers[i].classList.add("active");
  }

  src.value = "../img/01main/main/topsection/".concat(imgs[i]);
};

arrows.forEach(function (arrow) {
  arrow.addEventListener("click", function (e) {
    var direction = e.target.id === "left" ? "prev" : "next";
    changeImg(direction);
  });
});

var autoSlide = function autoSlide() {
  timer = setInterval(function () {
    changeImg("next");
  }, 3000);
};

autoSlide();

var stopSlied = function stopSlied() {
  clearInterval(timer);
};

var reset = function reset() {
  pagers.forEach(function (pager, idx) {
    pagers[idx].classList.remove("active");
  });
}; // imgContainer.addEventListener("mouseenter", () => {
//   stopSlied();
// });
// slidePagers.addEventListener("mouseenter", () => {
//   stopSlied();
// });
// imgContainer.addEventListener("mouseleave", () => {
//   autoSlide();
// });
// slidePagers.addEventListener("mouseleave", () => {
//   autoSlide();
// });


var pagerChange = function pagerChange(e) {
  var target = e.target.dataset.index;
  reset();

  for (var _i = 0; _i < pagers.length; _i++) {
    if (target == _i) {
      pagers[_i].classList.add("active");

      src.value = "../img/01main/main/topsection/".concat(imgs[_i]);
    }
  }
};

pagers.forEach(function (pager) {
  pager.addEventListener("click", pagerChange);
}); //=========================================================
// section3 slide

var slides = document.querySelector(".slides");
var slide = slides.querySelectorAll("li");
var slideCount = slide.length;
var slideWidth = 300;
var slideMargin = 30;
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next"); // function changeSlideSource() {
//   if (window.innerWidth <= 1024) {
//     slideWidth = 10;
//     slideMargin = 30;
//   } else {
//     slideWidth = 300;
//     slideMargin = 30;
//   }
// }
// window.addEventListener("resize", changeSlideSource);
// function changeslideSource() {
//   if (window.innerWidth <= 1024) {
//     slideWidth = 300;
//     slideMargin = 30;
//   } else {
//     slideWidth = 300;
//     slideMargin = 30;
//   }
// }
// 화면 크기가 변경될 때마다 실행
// Initial Index Value

var currentIdx = 0; // li style setting

var updateWidth = function updateWidth() {
  var currentSlides = document.querySelectorAll(".slides li");
  var newSlideCount = currentSlides.length;
  var newWidth = "".concat((slideWidth + slideMargin) * newSlideCount - slideMargin, "px");
  slides.style.width = newWidth;
};

var setInitialPos = function setInitialPos() {
  var initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = "translateX(".concat(initialTranslateValue, "px)");
};

var makeClone = function makeClone() {
  for (var _i2 = 0; _i2 < slideCount; _i2++) {
    var cloneSlide = slide[_i2].cloneNode(true);

    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }

  for (var _i3 = slideCount - 1; _i3 >= 0; _i3--) {
    var _cloneSlide = slide[_i3].cloneNode(true);

    _cloneSlide.classList.add("clone");

    slides.prepend(_cloneSlide);
  }

  updateWidth();
  setInitialPos();
  setTimeout(function () {
    slides.classList.add("animated");
  }, 100);
};

makeClone();

var moveSlide = function moveSlide(num) {
  slides.style.left = "".concat(-num * (slideWidth + slideMargin), "px");
  currentIdx = num;

  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(function () {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 0);
    setTimeout(function () {
      slides.classList.add("animated");
    }, 600);
  }
}; // 03.14 scale 넣는거 작업하다 일단 정지함*****


var scale = function scale(i) {
  slide[i].classList.add("scale");
}; // const scaleNum = () => {
//   for (let i = 0; i < 5; i++) {
//     const num = i;
//   }
// };


nextBtn.addEventListener("click", function () {
  moveSlide(currentIdx + 1); // scale(scaleNum(i));
});
prevBtn.addEventListener("click", function () {
  moveSlide(currentIdx - 1);
}); // auto slide

var thautoSlide = function thautoSlide() {
  timer = setInterval(function () {
    moveSlide(currentIdx + 1);
  }, 3000);
};

thautoSlide();

var stopSlide = function stopSlide() {
  clearInterval(timer);
};

slides.addEventListener("mouseenter", stopSlide);
slides.addEventListener("mouseleave", autoSlide); // window.addEventListener('resize', changeslideSource);
//===================================================
//section3 slide -content

var secHeaderNav = document.querySelectorAll("#sectionthree-header-nav a p");
var hiddenH1 = slides.querySelectorAll("li .hiddenp h1");
var hiddenH3 = slides.querySelectorAll("li .hiddenp h3");
var slideImg = slides.querySelectorAll("li img");
var originP = slides.querySelectorAll("li .originp");
var hiddenIcon = slides.querySelectorAll("li .hiddenpicon");
var menumodal = document.querySelector(".menu-modal");
var menuclose = menumodal.querySelector("button");
var menuname = menumodal.querySelector(".이름");
var menupic = menumodal.querySelector(".modal-pic");
var menuone = menumodal.querySelector(".제공량");
var menucal = menumodal.querySelector(".열량");
var menuprotein = menumodal.querySelector(".단백질");
var menufat = menumodal.querySelector(".포화지방");
var menusalt = menumodal.querySelector(".나트륨");
var menucaffein = menumodal.querySelector(".카페인");
var menualle = menumodal.querySelector(".알레르기정보");
var menusugar = menumodal.querySelector(".당류");
var menuinfo = menumodal.querySelector(".설명");
var menus = "../bestmenu.json";
var menudatas;
hiddenIcon.forEach(function (search, index) {
  search.addEventListener("click", function () {
    console.log("오리진p값", originP[index].innerText);
    menumodal.style.display = "block";

    for (var menudata in menudatas) {
      console.log(menudatas[menudata].이름);

      if (menudatas[menudata].이름 === originP[index].innerText) {
        menuname.innerHTML = menudatas[menudata].이름;
        menupic.style.backgroundImage = "url(".concat(menudatas[menudata].사진, ")");
        menuone.innerHTML = menudatas[menudata].영양정보.제공량;
        menucal.innerHTML = menudatas[menudata].영양정보.열량;
        menuprotein.innerHTML = menudatas[menudata].영양정보.단백질;
        menufat.innerHTML = menudatas[menudata].영양정보.포화지방;
        menusalt.innerHTML = menudatas[menudata].영양정보.나트륨;
        menucaffein.innerHTML = menudatas[menudata].영양정보.카페인;
        menualle.innerHTML = menudatas[menudata].영양정보.알레르기정보;
        menusugar.innerHTML = menudatas[menudata].영양정보.당류;
        menuinfo.innerHTML = menudatas[menudata].설명;
      }
    } // if (originP[index].innerText === menudatas.음료[].이름 )

  });
});
menuclose.addEventListener("click", function () {
  menumodal.style.display = "none";
});
fetch(menus).then(function (response) {
  return response.json();
}).then(function (menu) {
  menudatas = menu; // console.log("이름", menudatas.음료[1].이름);
});
console.log(menumodal, menuclose);
secHeaderNav.forEach(function (p, navIndex) {
  p.addEventListener("click", function () {
    removeActiveClasses();
    this.classList.add("active");

    if (navIndex === 0) {
      originP[1].innerHTML = "바닐라딥라떼";
      originP[2].innerHTML = "아인슈페너";
      originP[3].innerHTML = "아이스 아메리카노";
      originP[4].innerHTML = "카페라떼";
      originP[5].innerHTML = "바닐라딥라떼";
      originP[6].innerHTML = "아인슈페너";
      originP[7].innerHTML = "아이스 아메리카노";
      originP[8].innerHTML = "카페라떼";
      originP[9].innerHTML = "바닐라딥라떼";
      originP[10].innerHTML = "아인슈페너";
      originP[11].innerHTML = "아이스아메리카노";
      hiddenH1[1].innerHTML = "바닐라딥라떼";
      hiddenH1[2].innerHTML = "아인슈페너";
      hiddenH1[3].innerHTML = "아이스 아메리카노";
      hiddenH1[4].innerHTML = "카페라떼";
      hiddenH1[5].innerHTML = "바닐라딥라떼";
      hiddenH1[6].innerHTML = "아인슈페너";
      hiddenH1[7].innerHTML = "아이스 아메리카노";
      hiddenH1[8].innerHTML = "카페라떼";
      hiddenH1[9].innerHTML = "바닐라딥라떼";
      hiddenH1[10].innerHTML = "아인슈페너";
      hiddenH1[11].innerHTML = "아이스아메리카노";
      hiddenH3[1].innerHTML = "더벤티의 진한 에스프레소에 고급스러운 바닐라 풍미가 부드럽게어우러진 바닐라딥라떼";
      hiddenH3[2].innerHTML = "더벤티만의 특별한 레시피로 만든 크림을 얹어 부드럽고 달콤하게 마실 수 있는 아인슈페너(하프벤티사이즈)";
      hiddenH3[3].innerHTML = "더벤티의 깊고 진한 커피풍미를 느낄 수 있는 아이스 아메리카노";
      hiddenH3[4].innerHTML = "더벤티의 진한 에스프레소에 부드러운 우유가 어우러진 고소한 카페라떼";
      hiddenH3[5].innerHTML = "더벤티의 진한 에스프레소에 고급스러운 바닐라 풍미가 부드럽게어우러진 바닐라딥라떼";
      hiddenH3[6].innerHTML = "더벤티만의 특별한 레시피로 만든 크림을 얹어 부드럽고 달콤하게 마실 수 있는 아인슈페너(하프벤티사이즈)";
      hiddenH3[7].innerHTML = "더벤티의 깊고 진한 커피풍미를 느낄 수 있는 아이스 아메리카노";
      hiddenH3[8].innerHTML = "더벤티의 진한 에스프레소에 부드러운 우유가 어우러진 고소한 카페라떼";
      hiddenH3[9].innerHTML = "더벤티의 진한 에스프레소에 고급스러운 바닐라 풍미가 부드럽게어우러진 바닐라딥라떼";
      hiddenH3[10].innerHTML = "더벤티만의 특별한 레시피로 만든 크림을 얹어 부드럽고 달콤하게 마실 수 있는 아인슈페너(하프벤티사이즈)";
      hiddenH3[11].innerHTML = "더벤티의 깊고 진한 커피풍미를 느낄 수 있는 아이스 아메리카노";
      slideImg[1].src = "../img/01main/main/BestMenu/coffee/vanila-deeplatte.png";
      slideImg[2].src = "../img/01main/main/BestMenu/coffee/einspanner.png";
      slideImg[3].src = "../img/01main/main/BestMenu/coffee/iceamericano.png";
      slideImg[4].src = "../img/01main/main/BestMenu/coffee/caffeelatte.png";
      slideImg[5].src = "../img/01main/main/BestMenu/coffee/vanila-deeplatte.png";
      slideImg[6].src = "../img/01main/main/BestMenu/coffee/einspanner.png";
      slideImg[7].src = "../img/01main/main/BestMenu/coffee/iceamericano.png";
      slideImg[8].src = "../img/01main/main/BestMenu/coffee/caffeelatte.png";
      slideImg[9].src = "../img/01main/main/BestMenu/coffee/vanila-deeplatte.png";
      slideImg[10].src = "../img/01main/main/BestMenu/coffee/einspanner.png";
      slideImg[11].src = "../img/01main/main/BestMenu/coffee/iceamericano.png";
    } else if (navIndex === 1) {
      for (var _i4 = 1; _i4 <= 11; _i4++) {
        originP[1].innerHTML = "디카페인 바닐라딥라떼";
        originP[2].innerHTML = "디카페인 헤이즐넛딥라떼";
        originP[3].innerHTML = "디카페인 연유라떼";
        originP[4].innerHTML = "디카페인 카라멜 마끼야또";
        originP[5].innerHTML = "디카페인 카페모카";
        originP[6].innerHTML = "디카페인 아메리카노";
        originP[7].innerHTML = "디카페인 아이스 아메리카노";
        originP[8].innerHTML = "디카페인 카페라떼";
        originP[9].innerHTML = "디카페인 오트카페 라떼";
        originP[10].innerHTML = "디카페인 바닐라딥라떼";
        originP[11].innerHTML = "디카페인 연유라떼";
        hiddenH1[1].innerHTML = "디카페인 바닐라딥라떼";
        hiddenH1[2].innerHTML = "디카페인 헤이즐넛딥라떼";
        hiddenH1[3].innerHTML = "디카페인 연유라떼";
        hiddenH1[4].innerHTML = "디카페인 카라멜 마끼야또";
        hiddenH1[5].innerHTML = "디카페인 카페모카";
        hiddenH1[6].innerHTML = "디카페인 아메리카노";
        hiddenH1[7].innerHTML = "디카페인 아이스 아메리카노";
        hiddenH1[8].innerHTML = "디카페인 카페라떼";
        hiddenH1[9].innerHTML = "디카페인 오트카페 라떼";
        hiddenH1[10].innerHTML = "디카페인 바닐라딥라떼";
        hiddenH1[11].innerHTML = "디카페인 연유라떼";
        hiddenH3[1].innerHTML = "더벤티의 진한 에스프레소에 고급스러운 바닐라 풍미가 부드럽게어우러진 디카페인 바닐라딥라떼";
        hiddenH3[2].innerHTML = "더벤티의 디카페인 원두에 고소한 헤이즐넛 풍미가 감미롭게 어우러진 헤이즐넛딥라떼";
        hiddenH3[3].innerHTML = "더벤티의 디카페인 원두에 달콤한 연유가 어우러진 부드러운 연유라떼";
        hiddenH3[4].innerHTML = "더벤티 디카페인 원두에 카라멜 풍미가 어우러진 달콤한 카라멜 마끼야또";
        hiddenH3[5].innerHTML = "더벤티 디카페인 원두에 달콤 쌉싸름한 초콜릿이 더해진 부드럽고 달콤한 카페모카";
        hiddenH3[6].innerHTML = "더벤티의 깊고 진한 풍미를 느낄 수 있는 디카페인 핫 아메리카노";
        hiddenH3[7].innerHTML = "더벤티의 깊고 진한 커피풍미를 느낄 수 있는 디카페인 아이스 아메리카노";
        hiddenH3[8].innerHTML = "더벤티 디카페인 원두에 부드러운 우유가 어우러진 고소한 디카페인 카페라떼";
        hiddenH3[9].innerHTML = "리치한 풍미의 오트밀크에 디카페인 원두가 어우러지는 디카페인 오트카페라떼";
        hiddenH3[10].innerHTML = "더벤티의 디카페인 원두에 고급스러운 바닐라 풍미가 부드럽게 어우러진 바닐라딥라떼";
        hiddenH3[11].innerHTML = "더벤티의 디카페인 원두에 달콤한 연유가 어우러진 부드러운 연유라떼";
        slideImg[1].src = "../img/01main/main/BestMenu/decaffeine/decaffeine-deeplatte.png";
        slideImg[2].src = "../img/01main/main/BestMenu/decaffeine/decaffeine-hazelnutsdeeplatte.png";
        slideImg[3].src = "../img/01main/main/BestMenu/decaffeine/decaffeine-condensed-milklatte.png";
        slideImg[4].src = "../img/01main/main/BestMenu/decaffeine/decaffeine-caramelmacchiato.png";
        slideImg[5].src = "../img/01main/main/BestMenu/decaffeine/decaffeine-caffemocha.png";
        slideImg[6].src = "../img/01main/main/BestMenu/decaffeine/decaffeine-americano.png";
        slideImg[7].src = "../img/01main/main/BestMenu/decaffeine/decaffeine-iceamericano.png";
        slideImg[8].src = "../img/01main/main/BestMenu/decaffeine/decaffeine-caffelatte.png";
        slideImg[9].src = "../img/01main/main/BestMenu/decaffeine/decaffeine-oatcaffelatte.png";
        slideImg[10].src = "../img/01main/main/BestMenu/decaffeine/decaffeine-deeplatte.png";
        slideImg[11].src = "../img/01main/main/BestMenu/decaffeine/decaffeine-condensed-milklatte.png";
      }
    } else if (navIndex === 2) {
      for (var _i5 = 1; _i5 <= 11; _i5++) {
        originP[1].innerHTML = "말차초코칩프라페";
        originP[2].innerHTML = "딸기초코칩프라페";
        originP[3].innerHTML = "민트초코칩프라페";
        originP[4].innerHTML = "토피넛초코칩프라페";
        originP[5].innerHTML = "코코밀크 프라페";
        originP[6].innerHTML = "말차초코칩프라페";
        originP[7].innerHTML = "딸기초코칩프라페";
        originP[8].innerHTML = "민트초코칩프라페";
        originP[9].innerHTML = "토피넛초코칩프라페";
        originP[10].innerHTML = "코코밀크 프라페";
        originP[11].innerHTML = "말차초코칩프라페";
        hiddenH1[1].innerHTML = "말차초코칩프라페";
        hiddenH1[2].innerHTML = "딸기초코칩프라페";
        hiddenH1[3].innerHTML = "민트초코칩프라페";
        hiddenH1[4].innerHTML = "토피넛초코칩프라페";
        hiddenH1[5].innerHTML = "코코밀크 프라페";
        hiddenH1[6].innerHTML = "말차초코칩프라페";
        hiddenH1[7].innerHTML = "딸기초코칩프라페";
        hiddenH1[8].innerHTML = "민트초코칩프라페";
        hiddenH1[9].innerHTML = "토피넛초코칩프라페";
        hiddenH1[10].innerHTML = "코코밀크 프라페";
        hiddenH1[11].innerHTML = "말차초코칩프라페";
        hiddenH3[1].innerHTML = "초코칩을 넣은 녹차프라페에 진한 초콜릿을 듬뿍 발라, 보는 즐거움까지 더한 프라페";
        hiddenH3[2].innerHTML = "딸기와 초코칩을 넣은 바닐라 프라페에 진한 초콜릿을 듬뿍 발라, 보는 즐거움까지 더한 프라페";
        hiddenH3[3].innerHTML = "시원하고 청량한 민트와 초코칩을 넣은 프라페에 진한 초콜릿을 듬뿍발라, 보는 즐거움까지 더한 프라페";
        hiddenH3[4].innerHTML = "고소한 토피넛을 넣은 프라페에 진한 초콜릿을 듬뿍발라, 보는 즐거움까지 더한 프라페";
        hiddenH3[5].innerHTML = "카라멜과 초콜릿이 어우러진 부드러운 밀크프라페에 코코볼을 가득담아 달콤함을 두배로 즐기는 프라페";
        hiddenH3[6].innerHTML = "초코칩을 넣은 녹차프라페에 진한 초콜릿을 듬뿍 발라, 보는 즐거움까지 더한 프라페";
        hiddenH3[7].innerHTML = "딸기와 초코칩을 넣은 바닐라 프라페에 진한 초콜릿을 듬뿍 발라, 보는 즐거움까지 더한 프라페";
        hiddenH3[8].innerHTML = "시원하고 청량한 민트와 초코칩을 넣은 프라페에 진한 초콜릿을 듬뿍발라, 보는 즐거움까지 더한 프라페";
        hiddenH3[9].innerHTML = "고소한 토피넛을 넣은 프라페에 진한 초콜릿을 듬뿍발라, 보는 즐거움까지 더한 프라페";
        hiddenH3[10].innerHTML = "카라멜과 초콜릿이 어우러진 부드러운 밀크프라페에 코코볼을 가득담아 달콤함을 두배로 즐기는 프라페";
        hiddenH3[11].innerHTML = "초코칩을 넣은 녹차프라페에 진한 초콜릿을 듬뿍 발라, 보는 즐거움까지 더한 프라페";
        slideImg[1].src = "../img/01main/main/BestMenu/iceblended/greenteachocochip-frappe.png";
        slideImg[2].src = "../img/01main/main/BestMenu/iceblended/strawchocochip-frappe.png";
        slideImg[3].src = "../img/01main/main/BestMenu/iceblended/mintchocochip-frappe.png";
        slideImg[4].src = "../img/01main/main/BestMenu/iceblended/topinutchoco-frappe.png";
        slideImg[5].src = "../img/01main/main/BestMenu/iceblended/cocomilk-frappe.png";
        slideImg[6].src = "../img/01main/main/BestMenu/iceblended/greenteachocochip-frappe.png";
        slideImg[7].src = "../img/01main/main/BestMenu/iceblended/strawchocochip-frappe.png";
        slideImg[8].src = "../img/01main/main/BestMenu/iceblended/mintchocochip-frappe.png";
        slideImg[9].src = "../img/01main/main/BestMenu/iceblended/topinutchoco-frappe.png";
        slideImg[10].src = "../img/01main/main/BestMenu/iceblended/cocomilk-frappe.png";
        slideImg[11].src = "../img/01main/main/BestMenu/iceblended/greenteachocochip-frappe.png";
      }
    } else if (navIndex === 3) {
      for (var _i6 = 1; _i6 <= 11; _i6++) {
        originP[1].innerHTML = "오사당(오렌지/사과/당근)";
        originP[2].innerHTML = "사딸비(사과/딸기/비트)";
        originP[3].innerHTML = "블루레몬에이드";
        originP[4].innerHTML = "크림소다";
        originP[5].innerHTML = "메론소다";
        originP[6].innerHTML = "망플단(망고/파인애플/단호박)";
        originP[7].innerHTML = "오사당(오렌지/사과/당근)";
        originP[8].innerHTML = "사딸비(사과/딸기/비트)";
        originP[9].innerHTML = "블루레몬에이드";
        originP[10].innerHTML = "크림소다";
        originP[11].innerHTML = "메론소다";
        hiddenH1[1].innerHTML = "오사당(오렌지/사과/당근)";
        hiddenH1[2].innerHTML = "사딸비(사과/딸기/비트)";
        hiddenH1[3].innerHTML = "블루레몬에이드";
        hiddenH1[4].innerHTML = "크림소다";
        hiddenH1[5].innerHTML = "메론소다";
        hiddenH1[6].innerHTML = "망플단(망고/파인애플/단호박)";
        hiddenH1[7].innerHTML = "오사당(오렌지/사과/당근)";
        hiddenH1[8].innerHTML = "사딸비(사과/딸기/비트)";
        hiddenH1[9].innerHTML = "블루레몬에이드";
        hiddenH1[10].innerHTML = "크림소다";
        hiddenH1[11].innerHTML = "메론소다";
        hiddenH3[1].innerHTML = "오렌지, 사과, 당근, 감귤을 듬뿍담아 상큼하고 건강하게 즐기는 과채주스";
        hiddenH3[2].innerHTML = "사과, 딸기, 비트, 레몬 당근을 듬뿍담아 상큼하고 건강하게 즐기는 과채주스";
        hiddenH3[3].innerHTML = "새콤달콤한 레몬청과 탄산수가 만나 청량하고 풍부한 맛의 블루레몬에이드";
        hiddenH3[4].innerHTML = "소다맛에이드에 바닐라아이스크림을 올려 청량함과 부드러움을 동시에 즐길 수 있는 에이드[배달시 아이스크림은 음료안에 넣어 제공됩니다]";
        hiddenH3[5].innerHTML = "메론맛에이드에 바닐라아이스크림을 올려 청량함과 부드러움을 동시에 즐길 수 있는 에이드[배달시 아이스크림은 음료안에 넣어 제공됩니다]";
        hiddenH3[6].innerHTML = "망고, 파인애플, 패션후르츠, 단호박을 듬뿍담아 상큼하고 건강하게 즐기는 과채주스";
        hiddenH3[7].innerHTML = "오렌지, 사과, 당근, 감귤을 듬뿍담아 상큼하고 건강하게 즐기는 과채주스";
        hiddenH3[8].innerHTML = "사과, 딸기, 비트, 레몬 당근을 듬뿍담아 상큼하고 건강하게 즐기는 과채주스";
        hiddenH3[9].innerHTML = "새콤달콤한 레몬청과 탄산수가 만나 청량하고 풍부한 맛의 블루레몬에이드";
        hiddenH3[10].innerHTML = "소다맛에이드에 바닐라아이스크림을 올려 청량함과 부드러움을 동시에 즐길 수 있는 에이드[배달시 아이스크림은 음료안에 넣어 제공됩니다]";
        hiddenH3[11].innerHTML = "메론맛에이드에 바닐라아이스크림을 올려 청량함과 부드러움을 동시에 즐길 수 있는 에이드[배달시 아이스크림은 음료안에 넣어 제공됩니다]";
        slideImg[1].src = "../img/01main/main/BestMenu/juiceade/orangeappcarrot.png";
        slideImg[2].src = "../img/01main/main/BestMenu/juiceade/appstrawbit.png";
        slideImg[3].src = "../img/01main/main/BestMenu/juiceade/bluelemonade.png";
        slideImg[4].src = "../img/01main/main/BestMenu/juiceade/creamsoda.png";
        slideImg[5].src = "../img/01main/main/BestMenu/juiceade/melonsoda.png";
        slideImg[6].src = "../img/01main/main/BestMenu/juiceade/mangpledan.png";
        slideImg[7].src = "../img/01main/main/BestMenu/juiceade/orangeappcarrot.png";
        slideImg[8].src = "../img/01main/main/BestMenu/juiceade/appstrawbit.png";
        slideImg[9].src = "../img/01main/main/BestMenu/juiceade/bluelemonade.png";
        slideImg[10].src = "../img/01main/main/BestMenu/juiceade/creamsoda.png";
        slideImg[11].src = "../img/01main/main/BestMenu/juiceade/melonsoda.png";
      }
    } else if (navIndex === 4) {
      for (var _i7 = 1; _i7 <= 11; _i7++) {
        originP[1].innerHTML = "흑설탕 버블티";
        originP[2].innerHTML = "애플망고 요구르탱";
        originP[3].innerHTML = "복숭아 아이스티";
        originP[4].innerHTML = "더벤티사이즈 복숭아아이스티";
        originP[5].innerHTML = "애플유자티";
        originP[6].innerHTML = "흑설탕 버블티";
        originP[7].innerHTML = "애플망고 요구르탱";
        originP[8].innerHTML = "복숭아 아이스티";
        originP[9].innerHTML = "더벤티사이즈 복숭아아이스티";
        originP[10].innerHTML = "애플유자티";
        originP[11].innerHTML = "흑설탕 버블티";
        hiddenH1[1].innerHTML = "흑설탕 버블티";
        hiddenH1[2].innerHTML = "애플망고 요구르탱";
        hiddenH1[3].innerHTML = "복숭아 아이스티";
        hiddenH1[4].innerHTML = "더벤티사이즈 복숭아아이스티";
        hiddenH1[5].innerHTML = "애플유자티";
        hiddenH1[6].innerHTML = "흑설탕 버블티";
        hiddenH1[7].innerHTML = "애플망고 요구르탱";
        hiddenH1[8].innerHTML = "복숭아 아이스티";
        hiddenH1[9].innerHTML = "더벤티 사이즈 복숭아아이스티";
        hiddenH1[10].innerHTML = "애플유자티";
        hiddenH1[11].innerHTML = "흑설탕 버블티";
        hiddenH3[1].innerHTML = "최상급 비정제사탕수수당 모리셔스 흑당에 쫄깃쫄깃한 타피오카 펄을 가득 담은 흑설탕버블티";
        hiddenH3[2].innerHTML = "달콤한 애플망고 요구르트에 탱글탱글한 화이트펄을 더한 애플망고요구르탱";
        hiddenH3[3].innerHTML = "진한 블랙퍼스트 홍차에 달콤한 복숭아가 어우러진 복숭아아이스티";
        hiddenH3[4].innerHTML = "더벤티만의 대용량 사이즈로 더 크게 즐기는 시원하고 달콤한 복숭아아이스티";
        hiddenH3[5].innerHTML = "은은한 사과향 블렌딩티와 유자가 조화롭게 어우러진 블랜딩 티";
        hiddenH3[6].innerHTML = "최상급 비정제사탕수수당 모리셔스 흑당에 쫄깃쫄깃한 타피오카 펄을 가득 담은 흑설탕버블티";
        hiddenH3[7].innerHTML = "달콤한 애플망고 요구르트에 탱글탱글한 화이트펄을 더한 애플망고요구르탱";
        hiddenH3[8].innerHTML = "진한 블랙퍼스트 홍차에 달콤한 복숭아가 어우러진 복숭아아이스티";
        hiddenH3[9].innerHTML = "더벤티만의 대용량 사이즈로 더 크게 즐기는 시원하고 달콤한 복숭아아이스티";
        hiddenH3[10].innerHTML = "은은한 사과향 블렌딩티와 유자가 조화롭게 어우러진 블랜딩 티";
        hiddenH3[11].innerHTML = "최상급 비정제사탕수수당 모리셔스 흑당에 쫄깃쫄깃한 타피오카 펄을 가득 담은 흑설탕버블티";
        slideImg[1].src = "../img/01main/main/BestMenu/bubbleteatea/brownsugar-bubbletea.png";
        slideImg[2].src = "../img/01main/main/BestMenu/bubbleteatea/applemangoyogure.png";
        slideImg[3].src = "../img/01main/main/BestMenu/bubbleteatea/peach-icetea.png";
        slideImg[4].src = "../img/01main/main/BestMenu/bubbleteatea/theventisize-peach-icetea(32oz).png";
        slideImg[5].src = "../img/01main/main/BestMenu/bubbleteatea/applecitron-tea.png";
        slideImg[6].src = "../img/01main/main/BestMenu/bubbleteatea/brownsugar-bubbletea.png";
        slideImg[7].src = "../img/01main/main/BestMenu/bubbleteatea/applemangoyogure.png";
        slideImg[8].src = "../img/01main/main/BestMenu/bubbleteatea/peach-icetea.png";
        slideImg[9].src = "../img/01main/main/BestMenu/bubbleteatea/theventisize-peach-icetea(32oz).png";
        slideImg[10].src = "../img/01main/main/BestMenu/bubbleteatea/applecitron-tea.png";
        slideImg[11].src = "../img/01main/main/BestMenu/bubbleteatea/brownsugar-bubbletea.png";
      }
    } else if (navIndex === 5) {
      for (var _i8 = 1; _i8 <= 11; _i8++) {
        originP[1].innerHTML = "딸기라떼";
        originP[2].innerHTML = "초코라떼";
        originP[3].innerHTML = "딸기라떼";
        originP[4].innerHTML = "초코라떼";
        originP[5].innerHTML = "딸기라떼";
        originP[6].innerHTML = "초코라떼";
        originP[7].innerHTML = "딸기라떼";
        originP[8].innerHTML = "초코라떼";
        originP[9].innerHTML = "딸기라떼";
        originP[10].innerHTML = "초코라떼";
        originP[11].innerHTML = "딸기라떼";
        hiddenH1[1].innerHTML = "딸기라떼";
        hiddenH1[2].innerHTML = "초코라떼";
        hiddenH1[3].innerHTML = "딸기라떼";
        hiddenH1[4].innerHTML = "초코라떼";
        hiddenH1[5].innerHTML = "딸기라떼";
        hiddenH1[6].innerHTML = "초코라떼";
        hiddenH1[7].innerHTML = "딸기라떼";
        hiddenH1[8].innerHTML = "초코라떼";
        hiddenH1[9].innerHTML = "딸기라떼";
        hiddenH1[10].innerHTML = "초코라떼";
        hiddenH1[11].innerHTML = "딸기라떼";
        hiddenH3[1].innerHTML = "딸기과육이 듬뿍 들어간 딸기청에 부드러운 우유가 어우러진 새콤달콤 딸기라떼";
        hiddenH3[2].innerHTML = "진하고 풍부한 초콜릿과 부드러운 우유가 어우러진 달콤한 초코라떼";
        hiddenH3[3].innerHTML = "딸기과육이 듬뿍 들어간 딸기청에 부드러운 우유가 어우러진 새콤달콤 딸기라떼";
        hiddenH3[4].innerHTML = "진하고 풍부한 초콜릿과 부드러운 우유가 어우러진 달콤한 초코라떼";
        hiddenH3[5].innerHTML = "딸기과육이 듬뿍 들어간 딸기청에 부드러운 우유가 어우러진 새콤달콤 딸기라떼";
        hiddenH3[6].innerHTML = "진하고 풍부한 초콜릿과 부드러운 우유가 어우러진 달콤한 초코라떼";
        hiddenH3[7].innerHTML = "딸기과육이 듬뿍 들어간 딸기청에 부드러운 우유가 어우러진 새콤달콤 딸기라떼";
        hiddenH3[8].innerHTML = "진하고 풍부한 초콜릿과 부드러운 우유가 어우러진 달콤한 초코라떼";
        hiddenH3[9].innerHTML = "딸기과육이 듬뿍 들어간 딸기청에 부드러운 우유가 어우러진 새콤달콤 딸기라떼";
        hiddenH3[10].innerHTML = "진하고 풍부한 초콜릿과 부드러운 우유가 어우러진 달콤한 초코라떼";
        hiddenH3[11].innerHTML = "딸기과육이 듬뿍 들어간 딸기청에 부드러운 우유가 어우러진 새콤달콤 딸기라떼";
        slideImg[1].src = "../img/01main/main/BestMenu/beverage/strawberrylatte.png";
        slideImg[2].src = "../img/01main/main/BestMenu/beverage/chocolatte.png";
        slideImg[3].src = "../img/01main/main/BestMenu/beverage/strawberrylatte.png";
        slideImg[4].src = "../img/01main/main/BestMenu/beverage/chocolatte.png";
        slideImg[5].src = "../img/01main/main/BestMenu/beverage/strawberrylatte.png";
        slideImg[6].src = "../img/01main/main/BestMenu/beverage/chocolatte.png";
        slideImg[7].src = "../img/01main/main/BestMenu/beverage/strawberrylatte.png";
        slideImg[8].src = "../img/01main/main/BestMenu/beverage/chocolatte.png";
        slideImg[9].src = "../img/01main/main/BestMenu/beverage/strawberrylatte.png";
        slideImg[10].src = "../img/01main/main/BestMenu/beverage/chocolatte.png";
        slideImg[11].src = "../img/01main/main/BestMenu/beverage/strawberrylatte.png";
      }
    } else if (navIndex === 6) {
      for (var _i9 = 1; _i9 <= 13; _i9++) {
        originP[1].innerHTML = "디카페인 콜드브루 500ml";
        originP[2].innerHTML = "콜드브루 500ml";
        originP[3].innerHTML = "디카페인 콜드브루 500ml";
        originP[4].innerHTML = "콜드브루 500ml";
        originP[5].innerHTML = "디카페인 콜드브루 500ml";
        originP[6].innerHTML = "콜드브루 500ml";
        originP[7].innerHTML = "디카페인 콜드브루 500ml";
        originP[8].innerHTML = "콜드브루 500ml";
        originP[9].innerHTML = "디카페인 콜드브루 500ml";
        originP[10].innerHTML = "콜드브루 500ml";
        originP[11].innerHTML = "디카페인 콜드브루 500ml";
        hiddenH1[1].innerHTML = "디카페인 콜드브루 500ml";
        hiddenH1[2].innerHTML = "콜드브루 500ml";
        hiddenH1[3].innerHTML = "디카페인 콜드브루 500ml";
        hiddenH1[4].innerHTML = "콜드브루 500ml";
        hiddenH1[5].innerHTML = "디카페인 콜드브루 500ml";
        hiddenH1[6].innerHTML = "콜드브루 500ml";
        hiddenH1[7].innerHTML = "디카페인 콜드브루 500ml";
        hiddenH1[8].innerHTML = "콜드브루 500ml";
        hiddenH1[9].innerHTML = "디카페인 콜드브루 500ml";
        hiddenH1[10].innerHTML = "콜드브루 500ml";
        hiddenH1[11].innerHTML = "디카페인 콜드브루 500ml";
        hiddenH3[1].innerHTML = "더빈티만의 저온 고농도 추출로 더 진하고 깔끔한 맛의 디카페인 콜드브루 원액";
        hiddenH3[2].innerHTML = "더벤티만의 저온 고농도 추출로 더 진하고 깔끔한 맛의 콜드브루 원액";
        hiddenH3[3].innerHTML = "더빈티만의 저온 고농도 추출로 더 진하고 깔끔한 맛의 디카페인 콜드브루 원액";
        hiddenH3[4].innerHTML = "더벤티만의 저온 고농도 추출로 더 진하고 깔끔한 맛의 콜드브루 원액";
        hiddenH3[5].innerHTML = "더빈티만의 저온 고농도 추출로 더 진하고 깔끔한 맛의 디카페인 콜드브루 원액";
        hiddenH3[6].innerHTML = "더벤티만의 저온 고농도 추출로 더 진하고 깔끔한 맛의 콜드브루 원액";
        hiddenH3[7].innerHTML = "더빈티만의 저온 고농도 추출로 더 진하고 깔끔한 맛의 디카페인 콜드브루 원액";
        hiddenH3[8].innerHTML = "더벤티만의 저온 고농도 추출로 더 진하고 깔끔한 맛의 콜드브루 원액";
        hiddenH3[9].innerHTML = "더빈티만의 저온 고농도 추출로 더 진하고 깔끔한 맛의 디카페인 콜드브루 원액";
        hiddenH3[10].innerHTML = "더벤티만의 저온 고농도 추출로 더 진하고 깔끔한 맛의 콜드브루 원액";
        hiddenH3[11].innerHTML = "더빈티만의 저온 고농도 추출로 더 진하고 깔끔한 맛의 디카페인 콜드브루 원액";
        slideImg[1].src = "../img/01main/main/BestMenu/sidemenu/decaffeine-coldbrew500ml.png";
        slideImg[2].src = "../img/01main/main/BestMenu/sidemenu/coldbrew500ml.png";
        slideImg[3].src = "../img/01main/main/BestMenu/sidemenu/decaffeine-coldbrew500ml.png";
        slideImg[4].src = "../img/01main/main/BestMenu/sidemenu/coldbrew500ml.png";
        slideImg[5].src = "../img/01main/main/BestMenu/sidemenu/decaffeine-coldbrew500ml.png";
        slideImg[6].src = "../img/01main/main/BestMenu/sidemenu/coldbrew500ml.png";
        slideImg[7].src = "../img/01main/main/BestMenu/sidemenu/decaffeine-coldbrew500ml.png";
        slideImg[8].src = "../img/01main/main/BestMenu/sidemenu/coldbrew500ml.png";
        slideImg[9].src = "../img/01main/main/BestMenu/sidemenu/decaffeine-coldbrew500ml.png";
        slideImg[10].src = "../img/01main/main/BestMenu/sidemenu/coldbrew500ml.png";
        slideImg[11].src = "../img/01main/main/BestMenu/sidemenu/decaffeine-coldbrew500ml.png";
      }
    }
  });
});

function removeActiveClasses() {
  secHeaderNav.forEach(function (p) {
    p.classList.remove("active");
  });
} //==============================
// bottom-banner


var bottomBanner = document.querySelector(".bottom-slider-wrap");
bottomBanner.id = "bottomBanner1";
var clone = bottomBanner.cloneNode(true);
clone.id = "bottomBanner2";
document.querySelector("#bottom-slider-scroll").appendChild(clone);
bottomBanner.classList.add("original");
clone.classList.add("clone");
document.querySelector("#bottomBanner1").style.left = "50px"; // document.querySelector("#bottomBanner1").style.marginRight = "20px";

document.querySelector("#bottomBanner2").style.left = "2800px"; // clone.addEventListener("mouseover", stop);
// bottomBanner.addEventListener("mouseover", stop);
// const stop = (clone.style.animationPlayState = "paused")(
//   (bottomBanner.style.animationPlayState = "paused")
// );
//=========================================================
// section5 slide

var fiveslides = document.querySelector(".five-slides");
var fiveslide = fiveslides.querySelectorAll("li");
var fiveslideCount = fiveslide.length;
var fiveslideWidth = 315;
var fiveslideMargin = 39;
var fiveprevBtn = document.querySelector(".five-prev");
var fivenextBtn = document.querySelector(".five-next"); // Initial Index Value

var fivecurrentIdx = 0; // li style setting

var fiveupdateWidth = function fiveupdateWidth() {
  var currentSlides = document.querySelectorAll(".five-slides li");
  var newSlideCount = currentSlides.length;
  var fivenewWidth = "".concat((fiveslideWidth + fiveslideMargin) * newSlideCount - slideMargin, "px");
  fiveslides.style.width = fivenewWidth;
};

var fivesetInitialPos = function fivesetInitialPos() {
  var initialTranslateValue = -(fiveslideWidth + fiveslideMargin) * fiveslideCount;
  fiveslides.style.transform = "translateX(".concat(initialTranslateValue, "px)");
};

var fivemakeClone = function fivemakeClone() {
  for (var _i10 = 0; _i10 < fiveslideCount; _i10++) {
    var fivecloneSlide = fiveslide[_i10].cloneNode(true);

    fivecloneSlide.classList.add("clone");
    fiveslides.appendChild(fivecloneSlide);
  }

  for (var _i11 = fiveslideCount - 1; _i11 >= 0; _i11--) {
    var _fivecloneSlide = fiveslide[_i11].cloneNode(true);

    _fivecloneSlide.classList.add("clone");

    fiveslides.prepend(_fivecloneSlide);
  }

  fiveupdateWidth();
  fivesetInitialPos();
  setTimeout(function () {
    fiveslides.classList.add("animated");
  }, 100);
};

fivemakeClone();

var fivemoveSlide = function fivemoveSlide(num) {
  fiveslides.style.left = "".concat(-num * (fiveslideWidth + fiveslideMargin), "px");
  fivecurrentIdx = num;

  if (fivecurrentIdx === fiveslideCount || fivecurrentIdx === -fiveslideCount) {
    setTimeout(function () {
      fiveslides.classList.remove("animated");
      fiveslides.style.left = "0px";
      fivecurrentIdx = 0;
    }, 0);
    setTimeout(function () {
      fiveslides.classList.add("animated");
    }, 600);
  }
};

var fiveNum = document.querySelector(".five-num");
var tetxfiveNum = 2;
fivenextBtn.addEventListener("click", function () {
  fivemoveSlide(fivecurrentIdx + 1);
  fiveNum.innerText = "".concat(tetxfiveNum, " / 4");
  tetxfiveNum++;

  if (tetxfiveNum > 4) {
    tetxfiveNum = 1;
  }
});
var tetxfiveNum2 = 4;
fiveprevBtn.addEventListener("click", function () {
  fivemoveSlide(fivecurrentIdx - 1);
  fiveNum.innerText = "".concat(tetxfiveNum2, " / 4");
  tetxfiveNum2--;

  if (tetxfiveNum2 < 1) {
    tetxfiveNum2 = 4;
  }
});