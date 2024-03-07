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
dropDown.onmouseout = closedrop;

//===============================================================
// footer popup

const popup2 = document.querySelector("#popup2");

const popupWidth2 = 600;
const popupheight2 = 500;

popup2.addEventListener("click", () => {
  const left = (window.screen.availWidth - popupWidth2) / 2;
  const top = (window.screen.availHeight - popupheight2) / 2;
  window.open(
    "popup2.html",
    "event",
    `width=${popupWidth2} height =${popupheight2} left =${left} top=${top}`
  );
});
const popup3 = document.querySelector("#popup3");

const popupWidth3 = 600;
const popupheight3 = 500;

popup3.addEventListener("click", () => {
  const left = (window.screen.availWidth - popupWidth3) / 2;
  const top = (window.screen.availHeight - popupheight3) / 2;
  window.open(
    "popup3.html",
    "event",
    `width=${popupWidth3} height =${popupheight3} left =${left} top=${top}`
  );
});

// const open = window.open();

// open = () => {
//   const left = (window.screen.availWidth - popupWidth3) / 2;
//   const top = (window.screen.availHeight - popupheight3) / 2;
//   "popup2.html",
//     "event",
//     `width=${popupWidth3} height =${popupheight3} left =${left} top=${top}`;
// };

//===============================================================
// aside

const body = document.querySelector("body");
const toggleBtn = document.querySelector(".toggle-button");
const mobileMenu = document.querySelector("#bgmobile");
const close = document.querySelector(".xi-close");
const aside = document.querySelector("aside");
// const arrow =document.querySelectorAll(".depth-1a");

console.log(mobileMenu);
console.log(toggleBtn);

const arrow = document.querySelectorAll('.list-depth-1 .depth-1a a::before');
console.log(arrow);

// // arrow.addEventListener("click", () => {
// //   console.log("click");
// // });
// arrow.onclick

toggleBtn.addEventListener("click", () => {
  console.log("click");
  mobileMenu.style.right = "0px";
  aside.classList.toggle("active");
  // body.style.filter = "blur(6px)";
});

close.addEventListener("click", () => {
  console.log("click");
  mobileMenu.style.right = "-100%";
  aside.classList.toggle("active");
});
