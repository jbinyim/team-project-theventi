const wrap = document.querySelector(".wrap");
const logo = document.querySelector(".intro-center-logo .intro-circle");
wrap.addEventListener("mouseover", () => {
  logo.classList.add("active");
});

wrap.addEventListener("mouseout", () => {
  logo.classList.remove("active");
});
