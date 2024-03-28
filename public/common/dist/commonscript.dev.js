"use strict";

//header dropdown
var headerList = document.querySelector("#header-nav");
var header = document.querySelector("header");
console.log(headerList);
var dropDown = document.querySelector("#dropdown");

var opendrop = function opendrop() {
  dropDown.style.display = "block";
};

var closedrop = function closedrop() {
  dropDown.style.display = "none";
};

headerList.onmouseover = opendrop;
dropDown.onmouseover = opendrop;
header.onmouseout = closedrop; //===============================================================
// footer popup

var popup3 = document.querySelector("#popup3");
var popup3Pop = document.querySelector(".popup3");
var popup3Close = document.querySelector("#popup3-close");
popup3.addEventListener("click", function () {
  popup3Pop.style.display = "inline-block";
});
popup3Close.addEventListener("click", function () {
  popup3Pop.style.display = "none";
});
var popup2 = document.querySelector("#popup2");
var popup2Pop = document.querySelector(".popup2");
var popup2Close = document.querySelector("#popup2-close");
popup2.addEventListener("click", function () {
  popup2Pop.style.display = "inline-block";
});
popup2Close.addEventListener("click", function () {
  popup2Pop.style.display = "none";
}); //===============================================================
// aside

var toggleBtn = document.querySelector(".toggle-button");
var mobileMenu = document.querySelector("#bgmobile");
var close = document.querySelector(".xi-close");
var aside = document.querySelector("aside");
var depthIcons = document.querySelectorAll(".xi-depth");
var depthIconsFnc = depthIcons.forEach(function (depthicon, index1) {
  depthicon.addEventListener("click", function () {
    depthicon.classList.toggle("clicked");
    var depth2 = document.querySelectorAll(".list-depth-2");
    depth2.forEach(function (d, index2) {
      if (index1 === index2) {
        d.classList.toggle("dropdown");
      }
    });
  });
});
toggleBtn.addEventListener("click", function () {
  console.log("click");
  mobileMenu.style.right = "0px";
  aside.classList.toggle("active");
});
close.addEventListener("click", function () {
  console.log("click");
  mobileMenu.style.right = "-999px";
  aside.classList.toggle("active");
});
var depth3s = document.querySelectorAll(".list-depth-3");
depth3s.forEach(function (depth3) {
  depth3.addEventListener("click", function () {
    depth3.classList.toggle("depth3clicked");
  });
});