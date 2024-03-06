//===============================================================
//header dropdown

const headerList = document.querySelector("#header-nav");
const header = document.querySelector("header");

console.log(header);
const dropDown = document.querySelector("#dropdown");
console.log(dropDown);

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

console.log(opendrop);

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
