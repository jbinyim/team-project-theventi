"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//===============================================================
// main popup
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
  if (window.innerWidth <= 768) {
    imgs = imgs.map(function (img) {
      return img.replace('res-', '');
    });
  } else {
    imgs = _toConsumableArray(originalImgs);
  }
} // 화면 크기가 변경될 때마다 실행


window.addEventListener('resize', changeImageSource); // // 페이지 로드 시 실행
// changeImageSource();

var imgSrc = "../img/01main/main/topsection/".concat(imgs[0]);
src.value = imgSrc;
img.setAttributeNode(src);
imgContainer.appendChild(img);
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
console.log(slideCount);
var slideWidth = 300;
var slideMargin = 30;
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next"); // Initial Index Value

var currentIdx = 0; // li style setting

var updateWidth = function updateWidth() {
  var currentSlides = document.querySelectorAll(".slides li");
  var newSlideCount = currentSlides.length;
  console.log(newSlideCount);
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
slides.addEventListener("mouseleave", autoSlide); //===================================================
//section3 slide -content

var secHeaderNav = document.querySelectorAll("#sectionthree-header-nav a p");
console.log(secHeaderNav); // secHeaderNav.forEach((a) => {
//   a.addEventListener("click", (a) => {
//     a.classList.toggle("active");
//   });
// });

console.log(secHeaderNav); // function removeActiveClasses(p) {
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

secHeaderNav.forEach(function (p) {
  p.addEventListener("click", function () {
    removeActiveClasses();
    this.classList.add("active");
  });
});

function removeActiveClasses() {
  secHeaderNav.forEach(function (p) {
    p.classList.remove("active");
  });
} //==============================
// bottom-banner


var bottomBanner = document.querySelector(".bottom-slider-wrap");
console.log(bottomBanner);
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
  for (var _i4 = 0; _i4 < fiveslideCount; _i4++) {
    var fivecloneSlide = fiveslide[_i4].cloneNode(true);

    fivecloneSlide.classList.add("clone");
    fiveslides.appendChild(fivecloneSlide);
  }

  for (var _i5 = fiveslideCount - 1; _i5 >= 0; _i5--) {
    var _fivecloneSlide = fiveslide[_i5].cloneNode(true);

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