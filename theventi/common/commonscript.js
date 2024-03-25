
//header dropdown

const headerList = document.querySelector("#header-nav");
const header = document.querySelector("header");
console.log(headerList)
const dropDown = document.querySelector("#dropdown");

const opendrop = () => {
  dropDown.style.display = "block";

};
const closedrop = () => {
  dropDown.style.display = "none";

};
headerList.onmouseover = opendrop;
dropDown.onmouseover = opendrop;
header.onmouseout = closedrop;

//===============================================================
// footer popup

const popup3 = document.querySelector("#popup3");
const popup3Pop = document.querySelector(".popup3");
const popup3Close = document.querySelector("#popup3-close");

popup3.addEventListener("click", () => {
  popup3Pop.style.display = "inline-block";
});
popup3Close.addEventListener("click", () => {
  popup3Pop.style.display = "none";
});

const popup2 = document.querySelector("#popup2");
const popup2Pop = document.querySelector(".popup2");
const popup2Close = document.querySelector("#popup2-close");

popup2.addEventListener("click", () => {
  popup2Pop.style.display = "inline-block";
});
popup2Close.addEventListener("click", () => {
  popup2Pop.style.display = "none";
});

//===============================================================
// aside


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
