const menutTabs = document.querySelectorAll(".menu-tab-inner li");
const menuLists = document.querySelectorAll(".menu-list ul");

menutTabs.forEach((menutTab) => {
  menutTab.addEventListener("click", function () {
    function siblings(e) {
      const children = e.parentElement.children;
      for (let i = 0; i < children.length; i++) {
        children[i].classList.remove("active");
      }
    }
    siblings(this);
    this.classList.add("active");
    menuLists.forEach(function (menuList) {
      menuList.classList.remove("active");
    });
    const targetMenuListId = this.getAttribute("data-alt");
    const targetMenuList = document.querySelector(`#${targetMenuListId}`);
    if (targetMenuList) {
      targetMenuList.classList.add("active");
    }
  });
});

const newMenuPics = document.querySelectorAll(".menu-pic.np");
const newMenus = [
  "newmenu01.png",
  "newmenu02.png",
  "newmenu03.png",
  "newmenu04.png",
  "newmenu05.png",
  "newmenu06.png",
  "newmenu07.png",
  "newmenu08.png",
  "newmenu09.png",
  "newmenu10.png",
  "newmenu11.png",
  "newmenu12.png",
  "newmenu13.png",
  "newmenu14.png",
];

newMenuPics.forEach((newMenuPic, index) => {
  const newOpenBtns = document.querySelectorAll(".open.np");
  const newCloseBtns = document.querySelectorAll(".close.np");

  const newModal = document.querySelectorAll(".menu-modal.np");
  const menuImg = document.createElement("img");

  const newModalPics = document.querySelectorAll(".modal-pic.np");
  const modalImg = document.createElement("img");

  menuImg.src = `../img/02menuImg/wholemenu/${newMenus[index]}`;
  newMenuPic.appendChild(menuImg);

  newMenuPic.addEventListener("click", () => {
    modalImg.src = `../img/02menuImg/wholemenu/${newMenus[index]}`;
    newModalPics[index].appendChild(modalImg);
  });

  newOpenBtns[index].addEventListener("click", () => {
    newModal[index].style.display = "block";
  });

  newCloseBtns[index].addEventListener("click", () => {
    newModal[index].style.display = "none";
    newModal[index].appendChild(modalImg);
  });
});

const coffeeMenuPics = document.querySelectorAll(".menu-pic.cp");
const coffeeMenus = [
  "coffee01.png",
  "coffee02.png",
  "coffee03.png",
  "coffee04.png",
  "coffee05.png",
  "coffee06.png",
  "coffee07.png",
  "coffee08.png",
  "coffee09.png",
  "coffee10.png",
  "coffee11.png",
  "coffee12.png",
  "coffee13.png",
  "coffee14.png",
  "coffee15.png",
  "coffee16.png",
  "coffee17.png",
  "coffee18.png",
  "coffee19.png",
  "coffee20.png",
  "coffee21.png",
  "coffee22.png",
];

coffeeMenuPics.forEach((coffeeMenuPic, index) => {
  const coffeeOpenBtns = document.querySelectorAll(".open.cp");
  const coffeeCloseBtns = document.querySelectorAll(".close.cp");

  const coffeeModal = document.querySelectorAll(".menu-modal.cp");
  const menuImg = document.createElement("img");

  const coffeeModalPics = document.querySelectorAll(".modal-pic.cp");
  const modalImg = document.createElement("img");

  menuImg.src = `../img/02menuImg/wholemenu/${coffeeMenus[index]}`;
  coffeeMenuPic.appendChild(menuImg);

  coffeeMenuPic.addEventListener("click", () => {
    modalImg.src = `../img/02menuImg/wholemenu/${coffeeMenus[index]}`;
    coffeeModalPics[index].appendChild(modalImg);
  });

  coffeeOpenBtns[index].addEventListener("click", () => {
    coffeeModal[index].style.display = "block";
  });

  coffeeCloseBtns[index].addEventListener("click", () => {
    coffeeModal[index].style.display = "none";
    coffeeModal[index].appendChild(modalImg);
  });
});

const decaffeinatedMenuPics = document.querySelectorAll(".menu-pic.dp");
const decaffeinatedMenus = [
  "decaffeinated01.png",
  "decaffeinated02.png",
  "decaffeinated03.png",
  "decaffeinated04.png",
  "decaffeinated05.png",
  "decaffeinated06.png",
  "decaffeinated07.png",
  "decaffeinated08.png",
  "decaffeinated09.png",
  "decaffeinated10.png",
  "decaffeinated11.png",
  "decaffeinated12.png",
  "decaffeinated13.png",
  "decaffeinated14.png",
  "decaffeinated15.png",
  "decaffeinated16.png",
  "decaffeinated17.png",
  "decaffeinated18.png",
  "decaffeinated19.png",
  "decaffeinated20.png",
];

decaffeinatedMenuPics.forEach((decaffeinatedMenuPic, index) => {
  const decaffeinatedOpenBtns = document.querySelectorAll(".open.dp");
  const decaffeinatedCloseBtns = document.querySelectorAll(".close.dp");

  const decaffeinatedModal = document.querySelectorAll(".menu-modal.dp");
  const menuImg = document.createElement("img");

  const decaffeinatedModalPics = document.querySelectorAll(".modal-pic.dp");
  const modalImg = document.createElement("img");

  menuImg.src = `../img/02menuImg/wholemenu/${decaffeinatedMenus[index]}`;
  decaffeinatedMenuPic.appendChild(menuImg);

  decaffeinatedMenuPic.addEventListener("click", () => {
    modalImg.src = `../img/02menuImg/wholemenu/${decaffeinatedMenus[index]}`;
    decaffeinatedModalPics[index].appendChild(modalImg);
  });

  decaffeinatedOpenBtns[index].addEventListener("click", () => {
    decaffeinatedModal[index].style.display = "block";
  });

  decaffeinatedCloseBtns[index].addEventListener("click", () => {
    decaffeinatedModal[index].style.display = "none";
    decaffeinatedModal[index].appendChild(modalImg);
  });
});

const iceblendedMenuPics = document.querySelectorAll(".menu-pic.ip");
const iceblendedMenus = [
  "iceblended01.png",
  "iceblended02.png",
  "iceblended03.png",
  "iceblended04.png",
  "iceblended05.png",
  "iceblended06.png",
  "iceblended07.png",
  "iceblended08.png",
  "iceblended09.png",
  "iceblended10.png",
  "iceblended11.png",
  "iceblended12.png",
  "iceblended13.png",
  "iceblended14.png",
  "iceblended15.png",
];

iceblendedMenuPics.forEach((iceblendedMenuPic, index) => {
  const iceblendedOpenBtns = document.querySelectorAll(".open.ip");
  const iceblendedCloseBtns = document.querySelectorAll(".close.ip");

  const iceblendedModal = document.querySelectorAll(".menu-modal.ip");
  const menuImg = document.createElement("img");

  const iceblendedModalPics = document.querySelectorAll(".modal-pic.ip");
  const modalImg = document.createElement("img");

  menuImg.src = `../img/02menuImg/wholemenu/${iceblendedMenus[index]}`;
  iceblendedMenuPic.appendChild(menuImg);

  iceblendedMenuPic.addEventListener("click", () => {
    modalImg.src = `../img/02menuImg/wholemenu/${iceblendedMenus[index]}`;
    iceblendedModalPics[index].appendChild(modalImg);
  });

  iceblendedOpenBtns[index].addEventListener("click", () => {
    iceblendedModal[index].style.display = "block";
  });

  iceblendedCloseBtns[index].addEventListener("click", () => {
    iceblendedModal[index].style.display = "none";
    iceblendedModal[index].appendChild(modalImg);
  });
});

const juiceMenuPics = document.querySelectorAll(".menu-pic.jp");
const juiceMenus = [
  "juice01.png",
  "juice02.png",
  "juice03.png",
  "juice04.png",
  "juice05.png",
  "juice06.png",
  "juice07.png",
  "juice08.png",
  "juice09.png",
  "juice10.png",
  "juice11.png",
  "juice12.png",
  "juice13.png",
  "juice14.png",
  "juice15.png",
];

juiceMenuPics.forEach((juiceMenuPic, index) => {
  const juiceOpenBtns = document.querySelectorAll(".open.jp");
  const juiceCloseBtns = document.querySelectorAll(".close.jp");

  const juiceModal = document.querySelectorAll(".menu-modal.jp");
  const menuImg = document.createElement("img");

  const juiceModalPics = document.querySelectorAll(".modal-pic.jp");
  const modalImg = document.createElement("img");

  menuImg.src = `../img/02menuImg/wholemenu/${juiceMenus[index]}`;
  juiceMenuPic.appendChild(menuImg);

  juiceMenuPic.addEventListener("click", () => {
    modalImg.src = `../img/02menuImg/wholemenu/${juiceMenus[index]}`;
    juiceModalPics[index].appendChild(modalImg);
  });

  juiceOpenBtns[index].addEventListener("click", () => {
    juiceModal[index].style.display = "block";
  });

  juiceCloseBtns[index].addEventListener("click", () => {
    juiceModal[index].style.display = "none";
    juiceModal[index].appendChild(modalImg);
  });
});

const teaMenuPics = document.querySelectorAll(".menu-pic.tp");
const teaMenus = [
  "tea01.png",
  "tea02.png",
  "tea03.png",
  "tea04.png",
  "tea05.png",
  "tea06.png",
  "tea07.png",
  "tea08.png",
  "tea09.png",
  "tea10.png",
  "tea11.png",
  "tea12.png",
  "tea13.png",
  "tea14.png",
  "tea15.png",
  "tea16.png",
];

teaMenuPics.forEach((teaMenuPic, index) => {
  const teaOpenBtns = document.querySelectorAll(".open.tp");
  const teaCloseBtns = document.querySelectorAll(".close.tp");

  const teaModal = document.querySelectorAll(".menu-modal.tp");
  const menuImg = document.createElement("img");

  const teaModalPics = document.querySelectorAll(".modal-pic.tp");
  const modalImg = document.createElement("img");

  menuImg.src = `../img/02menuImg/wholemenu/${teaMenus[index]}`;
  teaMenuPic.appendChild(menuImg);

  teaMenuPic.addEventListener("click", () => {
    modalImg.src = `../img/02menuImg/wholemenu/${teaMenus[index]}`;
    teaModalPics[index].appendChild(modalImg);
  });

  teaOpenBtns[index].addEventListener("click", () => {
    teaModal[index].style.display = "block";
  });

  teaCloseBtns[index].addEventListener("click", () => {
    teaModal[index].style.display = "none";
    teaModal[index].appendChild(modalImg);
  });
});

//beveridge

const beveridgeMenuPics = document.querySelectorAll(".menu-pic.bp");
const beveridgeMenus = [
  "beveridge01.png",
  "beveridge02.png",
  "beveridge03.png",
  "beveridge04.png",
  "beveridge05.png",
  "beveridge06.png",
  "beveridge07.png",
];

beveridgeMenuPics.forEach((beveridgeMenuPic, index) => {
  const beveridgeOpenBtns = document.querySelectorAll(".open.bp");
  const beveridgeCloseBtns = document.querySelectorAll(".close.bp");

  const beveridgeModal = document.querySelectorAll(".menu-modal.bp");
  const menuImg = document.createElement("img");

  const beveridgeModalPics = document.querySelectorAll(".modal-pic.bp");
  const modalImg = document.createElement("img");

  menuImg.src = `../img/02menuImg/wholemenu/${beveridgeMenus[index]}`;
  beveridgeMenuPic.appendChild(menuImg);

  beveridgeMenuPic.addEventListener("click", () => {
    modalImg.src = `../img/02menuImg/wholemenu/${beveridgeMenus[index]}`;
    beveridgeModalPics[index].appendChild(modalImg);
  });

  beveridgeOpenBtns[index].addEventListener("click", () => {
    beveridgeModal[index].style.display = "block";
  });

  beveridgeCloseBtns[index].addEventListener("click", () => {
    beveridgeModal[index].style.display = "none";
    beveridgeModal[index].appendChild(modalImg);
  });
});

const sideMenuPics = document.querySelectorAll(".menu-pic.sp");
const sideMenus = [
  "sidemenu01.png",
  "sidemenu02.png",
  "sidemenu03.png",
  "sidemenu04.png",
  "sidemenu05.png",
  "sidemenu06.png",
  "sidemenu07.png",
  "sidemenu08.png",
  "sidemenu09.png",
  "sidemenu10.png",
  "sidemenu11.png",
  "sidemenu12.png",
  "sidemenu13.png",
  "sidemenu14.png",
  "sidemenu15.png",
  "sidemenu16.png",
  "sidemenu17.png",
  "sidemenu18.png",
  "sidemenu19.png",
  "sidemenu20.png",
  "sidemenu21.png",
  "sidemenu22.png",
  "sidemenu23.png",
  "sidemenu24.png",
  "sidemenu25.png",
  "sidemenu26.png",
  "sidemenu27.png",
  "sidemenu28.png",
  "sidemenu29.png",
  "sidemenu30.png",
  "sidemenu31.png",
  "sidemenu32.png",
  "sidemenu33.png",
  "sidemenu34.png",
  "sidemenu35.png",
  "sidemenu36.png",
  "sidemenu37.png",
];

sideMenuPics.forEach((sideMenuPic, index) => {
  const sideOpenBtns = document.querySelectorAll(".open.sp");
  const sideCloseBtns = document.querySelectorAll(".close.sp");

  const sideModal = document.querySelectorAll(".menu-modal.sp");
  const menuImg = document.createElement("img");

  const sideModalPics = document.querySelectorAll(".modal-pic.sp");
  const modalImg = document.createElement("img");

  menuImg.src = `../img/02menuImg/wholemenu/${sideMenus[index]}`;
  sideMenuPic.appendChild(menuImg);

  sideMenuPic.addEventListener("click", () => {
    modalImg.src = `../img/02menuImg/wholemenu/${sideMenus[index]}`;
    sideModalPics[index].appendChild(modalImg);
  });

  sideOpenBtns[index].addEventListener("click", () => {
    sideModal[index].style.display = "block";
  });

  sideCloseBtns[index].addEventListener("click", () => {
    sideModal[index].style.display = "none";
    sideModal[index].appendChild(modalImg);
  });
});

const petMenuPics = document.querySelectorAll(".menu-pic.pp");
const petMenus = [
  "pet01.png",
  "pet02.png",
  "pet03.png",
  "pet04.png",
  "pet05.png",
  "pet06.png",
  "pet07.png",
  "pet08.png",
  "pet09.png",
  "pet10.png",
  "pet11.png",
];

petMenuPics.forEach((petMenuPic, index) => {
  const petOpenBtns = document.querySelectorAll(".open.pp");
  const petCloseBtns = document.querySelectorAll(".close.pp");

  const petModal = document.querySelectorAll(".menu-modal.pp");
  const menuImg = document.createElement("img");

  const petModalPics = document.querySelectorAll(".modal-pic.pp");
  const modalImg = document.createElement("img");

  menuImg.src = `../img/02menuImg/wholemenu/${petMenus[index]}`;
  petMenuPic.appendChild(menuImg);

  petMenuPic.addEventListener("click", () => {
    modalImg.src = `../img/02menuImg/wholemenu/${petMenus[index]}`;
    petModalPics[index].appendChild(modalImg);
  });

  petOpenBtns[index].addEventListener("click", () => {
    petModal[index].style.display = "block";
  });

  petCloseBtns[index].addEventListener("click", () => {
    petModal[index].style.display = "none";
    petModal[index].appendChild(modalImg);
  });
});
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
