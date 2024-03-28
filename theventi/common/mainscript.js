//===============================================================
// main popup

function openPopup() {
  window.open(
    "./popup.html",
    "popup.html",
    "width=478,height=578,top=50%,left=50%,status=no,toolbar=no,scrollbars=no,menubar=no,resizable=no"
  );
}
// openPopup();

//=================================
//slider

const arrows = document.querySelectorAll(".arrow");
const imgContainer = document.querySelector("#img-container");
const img = document.createElement("img");
const src = document.createAttribute("src");
const slidePagers = document.querySelector(".slide_pagers");
const pagers = document.querySelectorAll(".slide_pagers li");

let imgs = [
  "res-banner01.jpg",
  "res-banner02.jpg",
  "res-banner03.jpg",
  "res-banner04.jpg",
];
const originalImgs = [...imgs];

function changeImageSource() {
  if (window.innerWidth <= 768) {
    imgs = imgs.map((img) => img.replace("res-", ""));
  } else {
    imgs = [...originalImgs];
  }
}

// 화면 크기가 변경될 때마다 실행
window.addEventListener("resize", changeImageSource);

// // 페이지 로드 시 실행
// changeImageSource();

const imgSrc = `../img/01main/main/topsection/${imgs[0]}`;

src.value = imgSrc;
img.setAttributeNode(src);
imgContainer.appendChild(img);

const imgwidth = window.innerWidth;

img.style.width = imgwidth;
img.style.height = imgContainer.innerHeight;

let i = 0;
const changeImg = (direction) => {
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
  src.value = `../img/01main/main/topsection/${imgs[i]}`;
};

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    const direction = e.target.id === "left" ? "prev" : "next";
    changeImg(direction);
  });
});

const autoSlide = () => {
  timer = setInterval(() => {
    changeImg("next");
  }, 3000);
};

autoSlide();

const stopSlied = () => {
  clearInterval(timer);
};

const reset = () => {
  pagers.forEach((pager, idx) => {
    pagers[idx].classList.remove("active");
  });
};

// imgContainer.addEventListener("mouseenter", () => {
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

const pagerChange = (e) => {
  const target = e.target.dataset.index;
  reset();
  for (let i = 0; i < pagers.length; i++) {
    if (target == i) {
      pagers[i].classList.add("active");
      src.value = `../img/01main/main/topsection/${imgs[i]}`;
    }
  }
};

pagers.forEach((pager) => {
  pager.addEventListener("click", pagerChange);
});

//=========================================================
// section3 slide

const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");
const slideCount = slide.length;
console.log(slideCount);
let slideWidth = 300;
let slideMargin = 30;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// function changeSlideSource() {
//   if (window.innerWidth <= 1024) {
//     slideWidth = 10;
//     slideMargin = 10;
//   } else {
//     slideWidth = 300;
//     slideMargin = 30;
//   }
// }
// window.addEventListener("resize", changeSlideSource);

// function changeslideSource() {
//   if (window.innerWidth <= 1024) {
//      slideWidth = 300;
//      slideMargin = 30;
//   } else {
//     slideWidth = 300;
//     slideMargin = 30;
//   }
//   console.log(slideWidth,slideMargin)
// }

// 화면 크기가 변경될 때마다 실행

// Initial Index Value
let currentIdx = 0;

// li style setting
const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  const newSlideCount = currentSlides.length;
  let newWidth = `${
    (slideWidth + slideMargin) * newSlideCount - slideMargin
  }px`;
  console.log(newWidth);
  slides.style.width = newWidth;
};

const setInitialPos = () => {
  const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
};

const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
  setTimeout(() => {
    slides.classList.add("animated");
  }, 100);
};

makeClone();

const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
  currentIdx = num;

  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 0);
    setTimeout(() => {
      slides.classList.add("animated");
    }, 600);
  }
};
// 03.14 scale 넣는거 작업하다 일단 정지함*****
const scale = (i) => {
  slide[i].classList.add("scale");
};
// const scaleNum = () => {
//   for (let i = 0; i < 5; i++) {
//     const num = i;
//   }
// };
nextBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
  // scale(scaleNum(i));
});

prevBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});

// auto slide

const thautoSlide = () => {
  timer = setInterval(() => {
    moveSlide(currentIdx + 1);
  }, 3000);
};

thautoSlide();

const stopSlide = () => {
  clearInterval(timer);
};

slides.addEventListener("mouseenter", stopSlide);

slides.addEventListener("mouseleave", autoSlide);
// window.addEventListener('resize', changeslideSource);

//===================================================
//section3 slide -content

const secHeaderNav = document.querySelectorAll("#sectionthree-header-nav a p");

// secHeaderNav.forEach((a) => {
//   a.addEventListener("click", (a) => {
//     a.classList.toggle("active");
//   });
// });

// function removeActiveClasses(p) {
//   p.addEventListener("click", () => {
//     p.classList.toggle("active");
//   });
// }

// secHeaderNav.forEach((p) => {
//   p.addEventListener("click", () => {
//     removeActiveClasses();
//     p.classList.toggle("active");
//   });
// });

const hiddenH1 = slides.querySelectorAll("li .hiddenp h1");
const hiddenH3 = slides.querySelectorAll("li .hiddenp h3");
const slideImg = slides.querySelectorAll("li img");
const originP = slides.querySelectorAll("li .originp");

console.log(hiddenH1); // [1, '새로운 값', 3, 4, 5]
// function changeImgSlide() {
//   hiddenH1.forEach((h1s, h1indexs) => {
// hiddenH1[0].innerHTML = "13새로운 값";
// hiddenH1[2].innerHTML = "12새로운 값";
// hiddenH1[3].innerHTML = "11새로운 값";
// hiddenH1[4].innerHTML = "10새로운 값";
// hiddenH1[5].innerHTML = "9새로운 값";
// hiddenH1[8].innerHTML = "6새로운 값";
// hiddenH1[9].innerHTML = "5새로운 값";
// hiddenH1[10].innerHTML = "4새로운 값";
// hiddenH1[11].innerHTML = "3새로운 값";
// hiddenH1[12].innerHTML = "1새로운 값";
// // h3의 innerHTML 변경
// const h3 = hiddenH3[h1indexs];
// h3.innerHTML = "새로운 내용 " + h1indexs; // 각 인덱스에 맞는 내용으로 변경
// // 이미지 소스 변경
// const img = slideImg[h1indexs];
// img.src = "새로운이미지" + h1indexs + ".jpg"; // 각 인덱스에 맞는 이미지 경로로 변경
// // 원본 내용 변경

const hiddenIcon = slides.querySelectorAll("li .hiddenpicon");

const menus = "./bestmenu.json";

const menumodal = document.querySelector(".menu-modal");
const menuclose = menumodal.querySelector("button");
const menuname = menumodal.querySelector(".이름");
const menupic = menumodal.querySelector(".modal-pic");
const menuone = menumodal.querySelector(".제공량");
const menucal = menumodal.querySelector(".열량");
const menuprotein = menumodal.querySelector(".단백질");
const menufat = menumodal.querySelector(".포화지방");
const menusalt = menumodal.querySelector(".나트륨");
const menucaffein = menumodal.querySelector(".카페인");
const menualle = menumodal.querySelector(".알레르기정보");

hiddenIcon.forEach((search, index) => {
  search.addEventListener("click", () => {
    menumodal.style.display = "block";

    fetch(menus)
      .then((response) => response.json())
      .then((menu) => {
        menudatas = menu;
        console.log(menudatas);
        for (let menudata in menudatas) {
          menuname.innerText = menudata;
          console.log(menudata);
        }
      });
  });
});
menuclose.addEventListener("click", () => {
  menumodal.style.display = "none";
});

let menudatas;

console.log(menumodal, menuclose);

secHeaderNav.forEach((p, navIndex) => {
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
      hiddenH3[1].innerHTML =
        "더벤티의 진한 에스프레소에 고급스러운 바닐라 풍미가 부드럽게어우러진 바닐라딥라떼";
      hiddenH3[2].innerHTML =
        "더벤티만의 특별한 레시피로 만든 크림을 얹어 부드럽고 달콤하게 마실 수 있는 아인슈페너(하프벤티사이즈)";
      hiddenH3[3].innerHTML =
        "더벤티의 깊고 진한 커피풍미를 느낄 수 있는 아이스 아메리카노";
      hiddenH3[4].innerHTML =
        "더벤티의 진한 에스프레소에 부드러운 우유가 어우러진 고소한 카페라떼";
      hiddenH3[5].innerHTML =
        "더벤티의 진한 에스프레소에 고급스러운 바닐라 풍미가 부드럽게어우러진 바닐라딥라떼";
      hiddenH3[6].innerHTML =
        "더벤티만의 특별한 레시피로 만든 크림을 얹어 부드럽고 달콤하게 마실 수 있는 아인슈페너(하프벤티사이즈)";
      hiddenH3[7].innerHTML =
        "더벤티의 깊고 진한 커피풍미를 느낄 수 있는 아이스 아메리카노";
      hiddenH3[8].innerHTML =
        "더벤티의 진한 에스프레소에 부드러운 우유가 어우러진 고소한 카페라떼";
      hiddenH3[9].innerHTML =
        "더벤티의 진한 에스프레소에 고급스러운 바닐라 풍미가 부드럽게어우러진 바닐라딥라떼";
      hiddenH3[10].innerHTML =
        "더벤티만의 특별한 레시피로 만든 크림을 얹어 부드럽고 달콤하게 마실 수 있는 아인슈페너(하프벤티사이즈)";
      hiddenH3[11].innerHTML =
        "더벤티의 깊고 진한 커피풍미를 느낄 수 있는 아이스 아메리카노";
      slideImg[1].src =
        "../img/01main/main/BestMenu/coffee/vanila-deeplatte.png";
      slideImg[2].src = "../img/01main/main/BestMenu/coffee/einspanner.png";
      slideImg[3].src = "../img/01main/main/BestMenu/coffee/iceamericano.png";
      slideImg[4].src = "../img/01main/main/BestMenu/coffee/caffeelatte.png";
      slideImg[5].src =
        "../img/01main/main/BestMenu/coffee/vanila-deeplatte.png";
      slideImg[6].src = "../img/01main/main/BestMenu/coffee/einspanner.png";
      slideImg[7].src = "../img/01main/main/BestMenu/coffee/iceamericano.png";
      slideImg[8].src = "../img/01main/main/BestMenu/coffee/caffeelatte.png";
      slideImg[9].src =
        "../img/01main/main/BestMenu/coffee/vanila-deeplatte.png";
      slideImg[10].src = "../img/01main/main/BestMenu/coffee/einspanner.png";
      slideImg[11].src = "../img/01main/main/BestMenu/coffee/iceamericano.png";
    } else if (navIndex === 1) {
      for (let i = 1; i <= 11; i++) {
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
        hiddenH3[1].innerHTML =
          "더벤티의 진한 에스프레소에 고급스러운 바닐라 풍미가 부드럽게어우러진 디카페인 바닐라딥라떼";
        hiddenH3[2].innerHTML =
          "더벤티의 디카페인 원두에 고소한 헤이즐넛 풍미가 감미롭게 어우러진 헤이즐넛딥라떼";
        hiddenH3[3].innerHTML =
          "더벤티의 디카페인 원두에 달콤한 연유가 어우러진 부드러운 연유라떼";
        hiddenH3[4].innerHTML =
          "더벤티 디카페인 원두에 카라멜 풍미가 어우러진 달콤한 카라멜 마끼야또";
        hiddenH3[5].innerHTML =
          "더벤티 디카페인 원두에 달콤 쌉싸름한 초콜릿이 더해진 부드럽고 달콤한 카페모카";
        hiddenH3[6].innerHTML =
          "더벤티의 깊고 진한 풍미를 느낄 수 있는 디카페인 핫 아메리카노";
        hiddenH3[7].innerHTML =
          "더벤티의 깊고 진한 커피풍미를 느낄 수 있는 디카페인 아이스 아메리카노";
        hiddenH3[8].innerHTML =
          "더벤티 디카페인 원두에 부드러운 우유가 어우러진 고소한 디카페인 카페라떼";
        hiddenH3[9].innerHTML =
          "리치한 풍미의 오트밀크에 디카페인 원두가 어우러지는 디카페인 오트카페라떼";
        hiddenH3[10].innerHTML =
          "더벤티의 디카페인 원두에 고급스러운 바닐라 풍미가 부드럽게 어우러진 바닐라딥라떼";
        hiddenH3[11].innerHTML =
          "더벤티의 디카페인 원두에 달콤한 연유가 어우러진 부드러운 연유라떼";
        slideImg[1].src =
          "../img/01main/main/BestMenu/decaffeine/decaffeine-deeplatte.png";
        slideImg[2].src =
          "../img/01main/main/BestMenu/decaffeine/decaffeine-hazelnutsdeeplatte.png";
        slideImg[3].src =
          "../img/01main/main/BestMenu/decaffeine/decaffeine-condensed-milklatte.png";
        slideImg[4].src =
          "../img/01main/main/BestMenu/decaffeine/decaffeine-caramelmacchiato.png";
        slideImg[5].src =
          "../img/01main/main/BestMenu/decaffeine/decaffeine-caffemocha.png";
        slideImg[6].src =
          "../img/01main/main/BestMenu/decaffeine/decaffeine-americano.png";
        slideImg[7].src =
          "../img/01main/main/BestMenu/decaffeine/decaffeine-iceamericano.png";
        slideImg[8].src =
          "../img/01main/main/BestMenu/decaffeine/decaffeine-caffelatte.png";
        slideImg[9].src =
          "../img/01main/main/BestMenu/decaffeine/decaffeine-oatcaffelatte.png";

        slideImg[10].src =
          "../img/01main/main/BestMenu/decaffeine/decaffeine-deeplatte.png";
        slideImg[11].src =
          "../img/01main/main/BestMenu/decaffeine/decaffeine-condensed-milklatte.png";
      }
    } else if (navIndex === 2) {
      for (let i = 1; i <= 11; i++) {
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
        hiddenH3[1].innerHTML =
          "초코칩을 넣은 녹차프라페에 진한 초콜릿을 듬뿍 발라, 보는 즐거움까지 더한 프라페";
        hiddenH3[2].innerHTML =
          "딸기와 초코칩을 넣은 바닐라 프라페에 진한 초콜릿을 듬뿍 발라, 보는 즐거움까지 더한 프라페";
        hiddenH3[3].innerHTML =
          "시원하고 청량한 민트와 초코칩을 넣은 프라페에 진한 초콜릿을 듬뿍발라, 보는 즐거움까지 더한 프라페";
        hiddenH3[4].innerHTML =
          "고소한 토피넛을 넣은 프라페에 진한 초콜릿을 듬뿍발라, 보는 즐거움까지 더한 프라페";
        hiddenH3[5].innerHTML =
          "카라멜과 초콜릿이 어우러진 부드러운 밀크프라페에 코코볼을 가득담아 달콤함을 두배로 즐기는 프라페";
        hiddenH3[6].innerHTML =
          "초코칩을 넣은 녹차프라페에 진한 초콜릿을 듬뿍 발라, 보는 즐거움까지 더한 프라페";
        hiddenH3[7].innerHTML =
          "딸기와 초코칩을 넣은 바닐라 프라페에 진한 초콜릿을 듬뿍 발라, 보는 즐거움까지 더한 프라페";
        hiddenH3[8].innerHTML =
          "시원하고 청량한 민트와 초코칩을 넣은 프라페에 진한 초콜릿을 듬뿍발라, 보는 즐거움까지 더한 프라페";
        hiddenH3[9].innerHTML =
          "고소한 토피넛을 넣은 프라페에 진한 초콜릿을 듬뿍발라, 보는 즐거움까지 더한 프라페";
        hiddenH3[10].innerHTML =
          "카라멜과 초콜릿이 어우러진 부드러운 밀크프라페에 코코볼을 가득담아 달콤함을 두배로 즐기는 프라페";
        hiddenH3[11].innerHTML =
          "초코칩을 넣은 녹차프라페에 진한 초콜릿을 듬뿍 발라, 보는 즐거움까지 더한 프라페";

        slideImg[1].src =
          "../img/01main/main/BestMenu/iceblended/greenteachocochip-frappe.png";
        slideImg[2].src =
          "../img/01main/main/BestMenu/iceblended/strawchocochip-frappe.png";
        slideImg[3].src =
          "../img/01main/main/BestMenu/iceblended/mintchocochip-frappe.png";
        slideImg[4].src =
          "../img/01main/main/BestMenu/iceblended/topinutchoco-frappe.png";
        slideImg[5].src =
          "../img/01main/main/BestMenu/iceblended/cocomilk-frappe.png";
        slideImg[6].src =
          "../img/01main/main/BestMenu/iceblended/greenteachocochip-frappe.png";
        slideImg[7].src =
          "../img/01main/main/BestMenu/iceblended/strawchocochip-frappe.png";
        slideImg[8].src =
          "../img/01main/main/BestMenu/iceblended/mintchocochip-frappe.png";
        slideImg[9].src =
          "../img/01main/main/BestMenu/iceblended/topinutchoco-frappe.png";
        slideImg[10].src =
          "../img/01main/main/BestMenu/iceblended/cocomilk-frappe.png";
        slideImg[11].src =
          "../img/01main/main/BestMenu/iceblended/greenteachocochip-frappe.png";
      }
    } else if (navIndex === 3) {
      for (let i = 1; i <= 11; i++) {
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
        hiddenH3[1].innerHTML =
          "오렌지, 사과, 당근, 감귤을 듬뿍담아 상큼하고 건강하게 즐기는 과채주스";
        hiddenH3[2].innerHTML =
          "사과, 딸기, 비트, 레몬 당근을 듬뿍담아 상큼하고 건강하게 즐기는 과채주스";
        hiddenH3[3].innerHTML =
          "새콤달콤한 레몬청과 탄산수가 만나 청량하고 풍부한 맛의 블루레몬에이드";
        hiddenH3[4].innerHTML =
          "소다맛에이드에 바닐라아이스크림을 올려 청량함과 부드러움을 동시에 즐길 수 있는 에이드[배달시 아이스크림은 음료안에 넣어 제공됩니다]";
        hiddenH3[5].innerHTML =
          "메론맛에이드에 바닐라아이스크림을 올려 청량함과 부드러움을 동시에 즐길 수 있는 에이드[배달시 아이스크림은 음료안에 넣어 제공됩니다]";
        hiddenH3[6].innerHTML =
          "망고, 파인애플, 패션후르츠, 단호박을 듬뿍담아 상큼하고 건강하게 즐기는 과채주스";
        hiddenH3[7].innerHTML =
          "오렌지, 사과, 당근, 감귤을 듬뿍담아 상큼하고 건강하게 즐기는 과채주스";
        hiddenH3[8].innerHTML =
          "사과, 딸기, 비트, 레몬 당근을 듬뿍담아 상큼하고 건강하게 즐기는 과채주스";
        hiddenH3[9].innerHTML =
          "새콤달콤한 레몬청과 탄산수가 만나 청량하고 풍부한 맛의 블루레몬에이드";
        hiddenH3[10].innerHTML =
          "소다맛에이드에 바닐라아이스크림을 올려 청량함과 부드러움을 동시에 즐길 수 있는 에이드[배달시 아이스크림은 음료안에 넣어 제공됩니다]";
        hiddenH3[11].innerHTML =
          "메론맛에이드에 바닐라아이스크림을 올려 청량함과 부드러움을 동시에 즐길 수 있는 에이드[배달시 아이스크림은 음료안에 넣어 제공됩니다]";

        slideImg[1].src =
          "../img/01main/main/BestMenu/juiceade/orangeappcarrot.png";
        slideImg[2].src =
          "../img/01main/main/BestMenu/juiceade/appstrawbit.png";
        slideImg[3].src =
          "../img/01main/main/BestMenu/juiceade/bluelemonade.png";
        slideImg[4].src = "../img/01main/main/BestMenu/juiceade/creamsoda.png";
        slideImg[5].src = "../img/01main/main/BestMenu/juiceade/melonsoda.png";
        slideImg[6].src = "../img/01main/main/BestMenu/juiceade/mangpledan.png";
        slideImg[7].src =
          "../img/01main/main/BestMenu/juiceade/orangeappcarrot.png";
        slideImg[8].src =
          "../img/01main/main/BestMenu/juiceade/appstrawbit.png";
        slideImg[9].src =
          "../img/01main/main/BestMenu/juiceade/bluelemonade.png";
        slideImg[10].src = "../img/01main/main/BestMenu/juiceade/creamsoda.png";
        slideImg[11].src = "../img/01main/main/BestMenu/juiceade/melonsoda.png";
      }
    } else if (navIndex === 4) {
      for (let i = 1; i <= 11; i++) {
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

        hiddenH3[1].innerHTML =
          "최상급 비정제사탕수수당 모리셔스 흑당에 쫄깃쫄깃한 타피오카 펄을 가득 담은 흑설탕버블티";
        hiddenH3[2].innerHTML =
          "달콤한 애플망고 요구르트에 탱글탱글한 화이트펄을 더한 애플망고요구르탱";
        hiddenH3[3].innerHTML =
          "진한 블랙퍼스트 홍차에 달콤한 복숭아가 어우러진 복숭아아이스티";
        hiddenH3[4].innerHTML =
          "더벤티만의 대용량 사이즈로 더 크게 즐기는 시원하고 달콤한 복숭아아이스티";
        hiddenH3[5].innerHTML =
          "은은한 사과향 블렌딩티와 유자가 조화롭게 어우러진 블랜딩 티";
        hiddenH3[6].innerHTML =
          "최상급 비정제사탕수수당 모리셔스 흑당에 쫄깃쫄깃한 타피오카 펄을 가득 담은 흑설탕버블티";
        hiddenH3[7].innerHTML =
          "달콤한 애플망고 요구르트에 탱글탱글한 화이트펄을 더한 애플망고요구르탱";
        hiddenH3[8].innerHTML =
          "진한 블랙퍼스트 홍차에 달콤한 복숭아가 어우러진 복숭아아이스티";
        hiddenH3[9].innerHTML =
          "더벤티만의 대용량 사이즈로 더 크게 즐기는 시원하고 달콤한 복숭아아이스티";
        hiddenH3[10].innerHTML =
          "은은한 사과향 블렌딩티와 유자가 조화롭게 어우러진 블랜딩 티";
        hiddenH3[11].innerHTML =
          "최상급 비정제사탕수수당 모리셔스 흑당에 쫄깃쫄깃한 타피오카 펄을 가득 담은 흑설탕버블티";

        slideImg[1].src =
          "../img/01main/main/BestMenu/bubbleteatea/brownsugar-bubbletea.png";
        slideImg[2].src =
          "../img/01main/main/BestMenu/bubbleteatea/applemangoyogure.png";
        slideImg[3].src =
          "../img/01main/main/BestMenu/bubbleteatea/peach-icetea.png";
        slideImg[4].src =
          "../img/01main/main/BestMenu/bubbleteatea/theventisize-peach-icetea(32oz).png";
        slideImg[5].src =
          "../img/01main/main/BestMenu/bubbleteatea/applecitron-tea.png";
        slideImg[6].src =
          "../img/01main/main/BestMenu/bubbleteatea/brownsugar-bubbletea.png";
        slideImg[7].src =
          "../img/01main/main/BestMenu/bubbleteatea/applemangoyogure.png";
        slideImg[8].src =
          "../img/01main/main/BestMenu/bubbleteatea/peach-icetea.png";
        slideImg[9].src =
          "../img/01main/main/BestMenu/bubbleteatea/theventisize-peach-icetea(32oz).png";
        slideImg[10].src =
          "../img/01main/main/BestMenu/bubbleteatea/applecitron-tea.png";
        slideImg[11].src =
          "../img/01main/main/BestMenu/bubbleteatea/brownsugar-bubbletea.png";
      }
    } else if (navIndex === 5) {
      for (let i = 1; i <= 11; i++) {
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

        hiddenH3[1].innerHTML =
          "딸기과육이 듬뿍 들어간 딸기청에 부드러운 우유가 어우러진 새콤달콤 딸기라떼";
        hiddenH3[2].innerHTML =
          "진하고 풍부한 초콜릿과 부드러운 우유가 어우러진 달콤한 초코라떼";
        hiddenH3[3].innerHTML =
          "딸기과육이 듬뿍 들어간 딸기청에 부드러운 우유가 어우러진 새콤달콤 딸기라떼";
        hiddenH3[4].innerHTML =
          "진하고 풍부한 초콜릿과 부드러운 우유가 어우러진 달콤한 초코라떼";
        hiddenH3[5].innerHTML =
          "딸기과육이 듬뿍 들어간 딸기청에 부드러운 우유가 어우러진 새콤달콤 딸기라떼";
        hiddenH3[6].innerHTML =
          "진하고 풍부한 초콜릿과 부드러운 우유가 어우러진 달콤한 초코라떼";
        hiddenH3[7].innerHTML =
          "딸기과육이 듬뿍 들어간 딸기청에 부드러운 우유가 어우러진 새콤달콤 딸기라떼";
        hiddenH3[8].innerHTML =
          "진하고 풍부한 초콜릿과 부드러운 우유가 어우러진 달콤한 초코라떼";
        hiddenH3[9].innerHTML =
          "딸기과육이 듬뿍 들어간 딸기청에 부드러운 우유가 어우러진 새콤달콤 딸기라떼";
        hiddenH3[10].innerHTML =
          "진하고 풍부한 초콜릿과 부드러운 우유가 어우러진 달콤한 초코라떼";
        hiddenH3[11].innerHTML =
          "딸기과육이 듬뿍 들어간 딸기청에 부드러운 우유가 어우러진 새콤달콤 딸기라떼";

        slideImg[1].src =
          "../img/01main/main/BestMenu/beverage/strawberrylatte.png";
        slideImg[2].src = "../img/01main/main/BestMenu/beverage/chocolatte.png";
        slideImg[3].src =
          "../img/01main/main/BestMenu/beverage/strawberrylatte.png";
        slideImg[4].src = "../img/01main/main/BestMenu/beverage/chocolatte.png";
        slideImg[5].src =
          "../img/01main/main/BestMenu/beverage/strawberrylatte.png";
        slideImg[6].src = "../img/01main/main/BestMenu/beverage/chocolatte.png";
        slideImg[7].src =
          "../img/01main/main/BestMenu/beverage/strawberrylatte.png";
        slideImg[8].src = "../img/01main/main/BestMenu/beverage/chocolatte.png";
        slideImg[9].src =
          "../img/01main/main/BestMenu/beverage/strawberrylatte.png";
        slideImg[10].src =
          "../img/01main/main/BestMenu/beverage/chocolatte.png";
        slideImg[11].src =
          "../img/01main/main/BestMenu/beverage/strawberrylatte.png";
      }
    } else if (navIndex === 6) {
      for (let i = 1; i <= 13; i++) {
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

        hiddenH3[1].innerHTML =
          "더빈티만의 저온 고농도 추출로 더 진하고 깔끔한 맛의 디카페인 콜드브루 원액";
        hiddenH3[2].innerHTML =
          "더벤티만의 저온 고농도 추출로 더 진하고 깔끔한 맛의 콜드브루 원액";
        hiddenH3[3].innerHTML =
          "더빈티만의 저온 고농도 추출로 더 진하고 깔끔한 맛의 디카페인 콜드브루 원액";
        hiddenH3[4].innerHTML =
          "더벤티만의 저온 고농도 추출로 더 진하고 깔끔한 맛의 콜드브루 원액";
        hiddenH3[5].innerHTML =
          "더빈티만의 저온 고농도 추출로 더 진하고 깔끔한 맛의 디카페인 콜드브루 원액";
        hiddenH3[6].innerHTML =
          "더벤티만의 저온 고농도 추출로 더 진하고 깔끔한 맛의 콜드브루 원액";
        hiddenH3[7].innerHTML =
          "더빈티만의 저온 고농도 추출로 더 진하고 깔끔한 맛의 디카페인 콜드브루 원액";
        hiddenH3[8].innerHTML =
          "더벤티만의 저온 고농도 추출로 더 진하고 깔끔한 맛의 콜드브루 원액";
        hiddenH3[9].innerHTML =
          "더빈티만의 저온 고농도 추출로 더 진하고 깔끔한 맛의 디카페인 콜드브루 원액";
        hiddenH3[10].innerHTML =
          "더벤티만의 저온 고농도 추출로 더 진하고 깔끔한 맛의 콜드브루 원액";
        hiddenH3[11].innerHTML =
          "더빈티만의 저온 고농도 추출로 더 진하고 깔끔한 맛의 디카페인 콜드브루 원액";

        slideImg[1].src =
          "../img/01main/main/BestMenu/sidemenu/decaffeine-coldbrew500ml.png";
        slideImg[2].src =
          "../img/01main/main/BestMenu/sidemenu/coldbrew500ml.png";
        slideImg[3].src =
          "../img/01main/main/BestMenu/sidemenu/decaffeine-coldbrew500ml.png";
        slideImg[4].src =
          "../img/01main/main/BestMenu/sidemenu/coldbrew500ml.png";
        slideImg[5].src =
          "../img/01main/main/BestMenu/sidemenu/decaffeine-coldbrew500ml.png";
        slideImg[6].src =
          "../img/01main/main/BestMenu/sidemenu/coldbrew500ml.png";
        slideImg[7].src =
          "../img/01main/main/BestMenu/sidemenu/decaffeine-coldbrew500ml.png";
        slideImg[8].src =
          "../img/01main/main/BestMenu/sidemenu/coldbrew500ml.png";
        slideImg[9].src =
          "../img/01main/main/BestMenu/sidemenu/decaffeine-coldbrew500ml.png";
        slideImg[10].src =
          "../img/01main/main/BestMenu/sidemenu/coldbrew500ml.png";
        slideImg[11].src =
          "../img/01main/main/BestMenu/sidemenu/decaffeine-coldbrew500ml.png";
      }
    }
  });
});

function removeActiveClasses() {
  secHeaderNav.forEach((p) => {
    p.classList.remove("active");
  });
}

//==============================
// bottom-banner

let bottomBanner = document.querySelector(".bottom-slider-wrap");
console.log(bottomBanner);
bottomBanner.id = "bottomBanner1";

let clone = bottomBanner.cloneNode(true);
clone.id = "bottomBanner2";
document.querySelector("#bottom-slider-scroll").appendChild(clone);
bottomBanner.classList.add("original");
clone.classList.add("clone");
document.querySelector("#bottomBanner1").style.left = "50px";
// document.querySelector("#bottomBanner1").style.marginRight = "20px";
document.querySelector("#bottomBanner2").style.left = "2800px";
// clone.addEventListener("mouseover", stop);
// bottomBanner.addEventListener("mouseover", stop);
// const stop = (clone.style.animationPlayState = "paused")(
//   (bottomBanner.style.animationPlayState = "paused")
// );

//=========================================================
// section5 slide

const fiveslides = document.querySelector(".five-slides");
const fiveslide = fiveslides.querySelectorAll("li");
const fiveslideCount = fiveslide.length;

const fiveslideWidth = 315;
const fiveslideMargin = 39;
const fiveprevBtn = document.querySelector(".five-prev");
const fivenextBtn = document.querySelector(".five-next");

// Initial Index Value
let fivecurrentIdx = 0;

// li style setting
const fiveupdateWidth = () => {
  const currentSlides = document.querySelectorAll(".five-slides li");
  const newSlideCount = currentSlides.length;
  const fivenewWidth = `${
    (fiveslideWidth + fiveslideMargin) * newSlideCount - slideMargin
  }px`;
  fiveslides.style.width = fivenewWidth;
};

const fivesetInitialPos = () => {
  const initialTranslateValue =
    -(fiveslideWidth + fiveslideMargin) * fiveslideCount;
  fiveslides.style.transform = `translateX(${initialTranslateValue}px)`;
};

const fivemakeClone = () => {
  for (let i = 0; i < fiveslideCount; i++) {
    const fivecloneSlide = fiveslide[i].cloneNode(true);
    fivecloneSlide.classList.add("clone");
    fiveslides.appendChild(fivecloneSlide);
  }
  for (let i = fiveslideCount - 1; i >= 0; i--) {
    const fivecloneSlide = fiveslide[i].cloneNode(true);
    fivecloneSlide.classList.add("clone");
    fiveslides.prepend(fivecloneSlide);
  }
  fiveupdateWidth();
  fivesetInitialPos();
  setTimeout(() => {
    fiveslides.classList.add("animated");
  }, 100);
};

fivemakeClone();

const fivemoveSlide = (num) => {
  fiveslides.style.left = `${-num * (fiveslideWidth + fiveslideMargin)}px`;
  fivecurrentIdx = num;

  if (fivecurrentIdx === fiveslideCount || fivecurrentIdx === -fiveslideCount) {
    setTimeout(() => {
      fiveslides.classList.remove("animated");
      fiveslides.style.left = "0px";
      fivecurrentIdx = 0;
    }, 0);
    setTimeout(() => {
      fiveslides.classList.add("animated");
    }, 600);
  }
};

const fiveNum = document.querySelector(".five-num");

let tetxfiveNum = 2;

fivenextBtn.addEventListener("click", () => {
  fivemoveSlide(fivecurrentIdx + 1);
  fiveNum.innerText = `${tetxfiveNum} / 4`;
  tetxfiveNum++;
  if (tetxfiveNum > 4) {
    tetxfiveNum = 1;
  }
});

let tetxfiveNum2 = 4;

fiveprevBtn.addEventListener("click", () => {
  fivemoveSlide(fivecurrentIdx - 1);
  fiveNum.innerText = `${tetxfiveNum2} / 4`;
  tetxfiveNum2--;
  if (tetxfiveNum2 < 1) {
    tetxfiveNum2 = 4;
  }
});
