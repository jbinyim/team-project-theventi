const triggerShow = 1000;
const sa = document.querySelectorAll(".sa");

const saFunc = function () {
  for (const element of sa) {
    if (!element.classList.contains("show")) {
      if (
        window.innerHeight >
        element.getBoundingClientRect().top + triggerShow
      ) {
        element.classList.add("show");
      }
    }
  }
};

window.addEventListener("load", saFunc);
window.addEventListener("scroll", saFunc);
