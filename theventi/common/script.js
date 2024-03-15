//===============================================================
//header dropdown

const headerList = document.querySelector("#header-nav");
const header = document.querySelector("header");

const dropDown = document.querySelector("#dropdown");

const opendrop = () => {
  dropDown.style.display = "block";
  body.style.transition = "all 0.5s linear";
};
const closedrop = () => {
  dropDown.style.display = "none";
  body.style.transition = "all 0.5s";
};
headerList.onmouseover = opendrop;
dropDown.onmouseover = opendrop;
header.onmouseout = closedrop;
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
//===============================================================
// footer popup

const popup3 = document.querySelector("#popup3");
const popup3Pop = document.querySelector(".popup3");
// const popup3Close = document.querySelector("#popup3-close");

popup3.addEventListener("click", () => {
  popup3Pop.style.display = "inline-block";
});
// popup3Close.addEventListener("click", () => {
//   popup3Pop.style.display = "none";
// });

const popup2 = document.querySelector("#popup2");
const popup2Pop = document.querySelector(".popup2");
const popup2Close = document.querySelector("#popup2-close");

popup2.addEventListener("click", () => {
  popup2Pop.style.display = "inline-block";
});
popup2Close.addEventListener("click", () => {
  popup2Pop.style.display = "none";
});
// const popup2 = document.querySelector("#popup2");

// const popupWidth2 = 600;
// const popupheight2 = 500;

// // popup2.addEventListener("click", () => {
// //   const left = (window.screen.availWidth - popupWidth2) / 2;
// //   const top = (window.screen.availHeight - popupheight2) / 2;
// //   window.open(
// //     "popup2.html",
// //     "event",
// //     `width=${popupWidth2} height =${popupheight2} left =${left} top=${top}`
// //   );
// // });
// const popup3 = document.querySelector("#popup3");

// const popupWidth3 = 600;
// const popupheight3 = 500;

// // popup3.addEventListener("click", () => {
// //   const left = (window.screen.availWidth - popupWidth3) / 2;
// //   const top = (window.screen.availHeight - popupheight3) / 2;
// //   window.open(
// //     "popup3.html",
// //     "event",
// //     `width=${popupWidth3} height =${popupheight3} left =${left} top=${top}`
// //   );
// // });

//===============================================================
// aside

const body = document.querySelector("body");
const toggleBtn = document.querySelector(".toggle-button");
const mobileMenu = document.querySelector("#bgmobile");
const close = document.querySelector(".xi-close");
const aside = document.querySelector("aside");
const depthIcons = document.querySelectorAll(".xi-depth");
const depthIconsFnc = depthIcons.forEach((depthicon, index1) => {
  depthicon.addEventListener("click", () => {
    depthicon.classList.toggle("clicked");
    const depth2 = document.querySelectorAll(".list-depth-2");
    depth2.forEach((d, index2) => {
      if (index1 === index2) {
        d.classList.toggle("dropdown");
      }
    });
  });
});
toggleBtn.addEventListener("click", () => {
  console.log("click");
  mobileMenu.style.right = "0px";
  aside.classList.toggle("active");
});
close.addEventListener("click", () => {
  console.log("click");
  mobileMenu.style.right = "-999px";
  aside.classList.toggle("active");
});

const depth3s = document.querySelectorAll(".list-depth-3");

depth3s.forEach((depth3) => {
  depth3.addEventListener("click", () => {
    depth3.classList.toggle("depth3clicked");
  });
});

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
  console.log(currentIdx, slideCount);
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
  scale(scaleNum);
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
