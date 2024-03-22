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

const imgs = [
  "res-banner01.jpg",
  "res-banner02.jpg",
  "res-banner03.jpg",
  "res-banner04.jpg",
];

const imgSrc = `../img/01main/main/topsection/${imgs[0]}`;

src.value = imgSrc;
img.setAttributeNode(src);
imgContainer.appendChild(img);

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
const slideWidth = 200;
const slideMargin = 30;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// Initial Index Value
let currentIdx = 0;

// li style setting
const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  const newSlideCount = currentSlides.length;
  console.log(newSlideCount);
  const newWidth = `${
    (slideWidth + slideMargin) * newSlideCount - slideMargin
  }px`;
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

//===================================================
//section3 slide -content

const secHeaderNav = document.querySelectorAll("#sectionthree-header-nav a p");

console.log(secHeaderNav);

// secHeaderNav.forEach((a) => {
//   a.addEventListener("click", (a) => {
//     a.classList.toggle("active");
//   });
// });
console.log(secHeaderNav);

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
secHeaderNav.forEach((p) => {
  p.addEventListener("click", function () {
    removeActiveClasses();
    this.classList.add("active");
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
const fiveslideMargin = 43;
const fiveprevBtn = document.querySelector(".five-prev");
const fivenextBtn = document.querySelector(".five-next");

// Initial Index Value
let fivecurrentIdx = 0;

// li style setting
const fiveupdateWidth = () => {
  const fivecurrentSlides = document.querySelectorAll(".five-slides li");
  const fivenewSlideCount = fivecurrentSlides.length;
  console.log(fivenewSlideCount);
  const fivenewWidth = `${
    (fiveslideWidth + fiveslideMargin) * fivenewSlideCount - fiveslideMargin
  }px`;
  fiveslides.style.width = fivenewWidth;
};

const fivesetInitialPos = () => {
  const fiveinitialTranslateValue =
    -(fiveslideWidth + fiveslideMargin) * fiveslideCount;
  fiveslides.style.transform = `translateX(${fiveinitialTranslateValue} px)`;
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
//???
// 03.14 scale 넣는거 작업하다 일단 정지함*****
// const scale = (i) => {
//   slide[i].classList.add("scale");
// };
// const scaleNum = () => {
//   for (let i = 0; i < 5; i++) {
//     const num = i;
//   }
// };
fivenextBtn.addEventListener("click", () => {
  fivemoveSlide(fivecurrentIdx + 1);
});

fiveprevBtn.addEventListener("click", () => {
  fivemoveSlide(fivecurrentIdx - 1);
});

// auto slide

// const fivethautoSlide = () => {
//   timer = setInterval(() => {
//     moveSlide(currentIdx + 1);
//   }, 3000);
// };

// thautoSlide();

// const stopSlide = () => {
//   clearInterval(timer);
// };

// slides.addEventListener("mouseenter", stopSlide);

// slides.addEventListener("mouseleave", autoSlide);

//===================================================
//section3 slide -content

// const secHeaderNav = document.querySelectorAll("#sectionthree-header-nav a p");

// console.log(secHeaderNav);

// // secHeaderNav.forEach((a) => {
// //   a.addEventListener("click", (a) => {
// //     a.classList.toggle("active");
// //   });
// // });
// console.log(secHeaderNav);

// // function removeActiveClasses(p) {
// //   p.addEventListener("click", () => {
// //     p.classList.toggle("active");
// //   });
// // }

// // secHeaderNav.forEach((p) => {
// //   p.addEventListener("click", () => {
// //     removeActiveClasses();
// //     p.classList.toggle("active");
// //   });
// // });
// secHeaderNav.forEach((p) => {
//   p.addEventListener("click", function () {
//     removeActiveClasses();
//     this.classList.add("active");
//   });
// });

// function removeActiveClasses() {
//   secHeaderNav.forEach((p) => {
//     p.classList.remove("active");
//   });
// }
