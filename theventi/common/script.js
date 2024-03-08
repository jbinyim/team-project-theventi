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

// const depth1 = document.querySelector(".list-depth-1");

// let depthAfterStyle = document.createElement("style");

// depthAfterStyle.innerHTML = `.list-depth-1::before {
//   position: absolute;
//   top: 50%;
//   font-size: 1.5rem;
//   margin-top: -0.5rem;
//   right: 1rem;
//   color: #999;
//   font-family: xeicon !important;
//   display: inline-block;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 1;
//   content: '\e941';
// }`;

// depth1.appendChild(depthAfterStyle);

const depthIcons = document.querySelectorAll(".xi-depth");

// const depth2 = document.querySelectorAll(".list-depth-2");
// console.log(depth2);
// depth2.forEach((d) => {
//   d.style.display = "block";
// });
// console.log(depthicon);

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
// depthIconsFnc();
// depth2.forEach((d) => {});

// for (i = 0; i < d.length - 1; i++) {
//   d.classList.toggle("dropdown");
//   console.log(d[i]);
// }

toggleBtn.addEventListener("click", () => {
  console.log("click");
  mobileMenu.style.right = "0px";
  aside.classList.toggle("active");
});

close.addEventListener("click", () => {
  console.log("click");
  mobileMenu.style.right = "-100%";
  aside.classList.toggle("active");
});
