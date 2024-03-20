const historyContainer = document.querySelector(".history-container");
const historySlider = document.querySelector(".history-slider");
const historySlide = document.querySelectorAll(".history-slide");

const navPrev = document.querySelector("#prev");
const navNext = document.querySelector("#next");

// slide count
const slideCount = historySlide.length;
for (let i = 0; i < slideCount; i++) {
  historySlide[i].style.left = `${i * 100}%`;
}

// slide height
let topHeight = 500;

const calculateTallestSlide = () => {
  for (let i = 0; i < slideCount; i++) {
    if (historySlide[i].offsetHeight > topHeight) {
      topHeight = historySlide[i].offsetHeight;
    }
  }
  historyContainer.style.height = `${topHeight}px`;
  historySlider.style.height = `${topHeight}px`;
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

const gotoSlide = (i) => {
  historySlider.style.left = `${i * -100}%`;
  historySlider.classList.add("animated");
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

gotoSlide(0);
