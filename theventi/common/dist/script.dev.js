"use strict";

var headerList = document.querySelector("#header-nav");
var header = document.querySelector("header");
console.log(header);
var dropDown = document.querySelector("#dropdown");
console.log(dropDown); // headerList.onclick = function () {
//   dropDown.classList.toggle("hover");
//   console.log(dropDown);
// };

var opendrop = function opendrop() {
  dropDown.style.display = "block";
  body.style.transition = "all 0.5s linear";
};

var closedrop = function closedrop() {
  dropDown.style.display = "none";
  body.style.transition = "all 0.5s";
};

headerList.onmouseover = opendrop;
dropDown.onmouseover = opendrop;
dropDown.onmouseout = closedrop;
console.log(opendrop); // wrap.addEventListener("mouseover", () => {
//   logo.classList.add("active");
// });
// wrap.addEventListener("mouseout", () => {
//   logo.classList.remove("active");
// });