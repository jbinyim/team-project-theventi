const historySliderWrapper = document.querySelector(".history-container");
const historySliderContainer = document.querySelector(".slider-container");
const historySlides = document.querySelectorAll(".history-slide");

const navPrev = document.querySelector("#prev");
const navNext = document.querySelector("#next");

// slide count
const slideCount = historySlides.length;
for (let i = 0; i < slideCount; i++) {
  historySlides[i].style.left = `${i * 100}%`;
}

// slide height
let topHeight = 0;

const calculateTallestSlide = () => {
  for (let i = 0; i < slideCount; i++) {
    if (historySlides[i].offsetHeight > topHeight) {
      topHeight = historySlides[i].offsetHeight;
    }
  }
  historySliderWrapper.style.height = `${topHeight}px`;
  historySliderContainer.style.height = `${topHeight}px`;
};

calculateTallestSlide();

let currentIndex = 0;

const updateNav = () => {
  if (currentIndex === 0) {
    navPrev.classList.add("disabled");
  } else {
    navPrev.classList.remove("disabled");
  }

  if (currentIndex === slideCount - 1) {
    navNext.classList.add("disabled");
  } else {
    navNext.classList.remove("disabled");
  }
};

// 클릭했을 때 옆으로 넘어가게 하는거, 왼쪽으로 넘어가는거
const gotoSlide = (i) => {
  historySliderContainer.style.left = `${i * -100}%`;
  historySliderContainer.classList.add("animated");
  currentIndex = i;
  updateNav();
};

navPrev.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex > 0) {
    gotoSlide(currentIndex - 1);
  } else {
    gotoSlide(slideCount - 1);
  }
});

navNext.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex < slideCount - 1) {
    gotoSlide(currentIndex + 1);
  } else {
    gotoSlide(0);
  }
});

// 처음에도 버튼이 안보이게 하는거
gotoSlide(0);
