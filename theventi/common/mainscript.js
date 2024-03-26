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
    imgs = imgs.map(img => img.replace('res-', ''));
  }
   else {
    imgs = [...originalImgs];
   }
}

// 화면 크기가 변경될 때마다 실행
window.addEventListener('resize', changeImageSource);

// // 페이지 로드 시 실행
// changeImageSource();


const imgSrc = `../img/01main/main/topsection/${imgs[0]}`;

src.value = imgSrc;
img.setAttributeNode(src);
imgContainer.appendChild(img);

const imgwidth = window.innerWidth;

img.style.width= imgwidth;
img.style.height= imgContainer.innerHeight;

console.log(img);
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
  console.log(newWidth)
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

const hiddenH1 =slides.querySelectorAll("li .hiddenp h1");
const hiddenH3 =slides.querySelectorAll("li .hiddenp h3");
const slideImg =slides.querySelectorAll("li img");
const originP =slides.querySelectorAll("li .originp");

// function changeH1() {
//   hiddenH1[1].innerHTML = '13새로운 값'; // 인덱스 1의 값을 '새로운 값'으로 교체
//   hiddenH1[2].innerHTML = '12새로운 값'; // 인덱스 1의 값을 '새로운 값'으로 교체
//   hiddenH1[3].innerHTML = '11새로운 값'; // 인덱스 1의 값을 '새로운 값'으로 교체
//   hiddenH1[4].innerHTML = '10새로운 값'; // 인덱스 1의 값을 '새로운 값'으로 교체
//   hiddenH1[5].innerHTML = '9새로운 값'; // 인덱스 1의 값을 '새로운 값'으로 교체
//   hiddenH1[6].innerHTML = '8새로운 값'; // 인덱스 1의 값을 '새로운 값'으로 교체
//   hiddenH1[7].innerHTML = '7새로운 값'; // 인덱스 1의 값을 '새로운 값'으로 교체
//   hiddenH1[8].innerHTML = '6새로운 값'; // 인덱스 1의 값을 '새로운 값'으로 교체
//   hiddenH1[9].innerHTML = '5새로운 값'; // 인덱스 1의 값을 '새로운 값'으로 교체
//   hiddenH1[10].innerHTML = '4새로운 값'; // 인덱스 1의 값을 '새로운 값'으로 교체
//   hiddenH1[11].innerHTML = '3새로운 값'; // 인덱스 1의 값을 '새로운 값'으로 교체
//   hiddenH1[12].innerHTML = '1새로운 값'; // 인덱스 1의 값을 '새로운 값'으로 교체
  
// }

console.log(hiddenH1); // [1, '새로운 값', 3, 4, 5]
function changeImgSlide() {
  hiddenH1.forEach((h1s, h1indexs) => {
      // h1s[0].innerHTML = '13새로운 값';
      // h1s[2].innerHTML = '12새로운 값'; 
      // h1s[3].innerHTML = '11새로운 값'; 
      // h1s[4].innerHTML = '10새로운 값'; 
      // h1s[5].innerHTML = '9새로운 값'; 
      // h1s[8].innerHTML = '6새로운 값'; 
      // h1s[9].innerHTML = '5새로운 값'; 
      // h1s[10].innerHTML = '4새로운 값'; 
      // h1s[11].innerHTML = '3새로운 값'; 
      // h1s[12].innerHTML = '1새로운 값'; 
      
   
   
    // // h3의 innerHTML 변경
    // const h3 = hiddenH3[h1indexs];
    // h3.innerHTML = "새로운 내용 " + h1indexs; // 각 인덱스에 맞는 내용으로 변경

    // // 이미지 소스 변경
    // const img = slideImg[h1indexs];
    // img.src = "새로운이미지" + h1indexs + ".jpg"; // 각 인덱스에 맞는 이미지 경로로 변경

    // // 원본 내용 변경
    // const p = originP[h1indexs];
    // p.innerHTML = "디카페인카라멜마끼야또 " + h1indexs ; // 각 인덱스에 맞는 내용으로 변경
    
  }
  );

}
secHeaderNav.forEach((p,index) => {
  p.addEventListener("click", function () {
    removeActiveClasses();
    this.classList.add("active");
    changeImgSlide();
    const h1Text = hiddenH1[index].textContent; // hiddenH1 배열의 해당 인덱스 요소의 텍스트
    const h3Text = hiddenH3[index].textContent; // hiddenH3 배열의 해당 인덱스 요소의 텍스트
    const imgSrc = slideImg[index].src; // slideImg 배열의 해당 인덱스 요소의 이미지 소스
    const originText = originP[index].textContent; // originP 배열의 해당 인덱스 요소의 텍스트

    // 예시로 콘솔에 출력
    console.log(`H1 Text: ${h1Text}, H3 Text: ${h3Text}, Image Source: ${imgSrc}, Original Text: ${originText}`);

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
  const initialTranslateValue = -(fiveslideWidth + fiveslideMargin) * fiveslideCount;
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
  if (tetxfiveNum2 < 1 ) { 
    tetxfiveNum2 = 4; 
  }
});

