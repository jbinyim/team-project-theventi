const tabs = document.querySelectorAll(".tab-inner li");
const menuLists = document.querySelectorAll(".menu-list ul");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
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

  menuImg.src = `./img/02menuImg/wholemenu/${newMenus[index]}`;
  newMenuPic.appendChild(menuImg);

  newMenuPic.addEventListener("click", () => {
    modalImg.src = `./img/02menuImg/wholemenu/${newMenus[index]}`;
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

  menuImg.src = `./img/02menuImg/wholemenu/${coffeeMenus[index]}`;
  coffeeMenuPic.appendChild(menuImg);

  coffeeMenuPic.addEventListener("click", () => {
    modalImg.src = `./img/02menuImg/wholemenu/${coffeeMenus[index]}`;
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

  menuImg.src = `./img/02menuImg/wholemenu/${decaffeinatedMenus[index]}`;
  decaffeinatedMenuPic.appendChild(menuImg);

  decaffeinatedMenuPic.addEventListener("click", () => {
    modalImg.src = `./img/02menuImg/wholemenu/${decaffeinatedMenus[index]}`;
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
