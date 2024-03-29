const countPages = 10;
const numberPage = document.querySelector(".page");
const tbody = document.querySelector(".press-tbody");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const form = document.querySelector("form");

let pageNumberBtns;
let currentPage = 1;

const posterDetail = (e) => {
  const { id } = e.target.parentElement;
  const detailURL = `https://www.theventi.co.kr/new2022/news/notice-press.html?bmain=view&uid=${id}`;
  window.open(detailURL, "_blank");
};

const newPage = (press, searchText) => {
  tbody.innerHTML = "";
  for (let i = 0; i < press.length; i++) {
    if (press[i].title.includes(searchText)) {
      const tr = document.createElement("tr");
      tr.className = "press-tr";

      const pressNumber = document.createElement("td");
      pressNumber.className = "press-td number";

      const pressTitle = document.createElement("td");
      pressTitle.className = "press-td title";

      const pressLink = document.createElement("a");
      pressLink.className = "press-link";

      const pressVenti = document.createElement("td");
      pressVenti.className = "press-td venti";

      const pressDay = document.createElement("td");
      pressDay.className = "press-td day";

      pressNumber.innerHTML = press[i].id;
      pressLink.innerHTML = press[i].title;
      pressTitle.id = press[i].id;
      pressVenti.innerText = "더벤티";
      pressDay.innerHTML = press[i].day;

      pressTitle.appendChild(pressLink);
      tr.append(pressNumber, pressTitle, pressVenti, pressDay);
      tbody.appendChild(tr);
      document.querySelector(".press-pages").style.display = "none";
    }
  }
  const posters = document.querySelectorAll(".press-link");
  posters.forEach((poster) => {
    poster.addEventListener("click", posterDetail);
  });
};

const getTotalPages = (press) => {
  return Math.ceil(press.length / countPages);
};

const setPageBtn = (press) => {
  numberPage.innerHTML = "";
  for (let i = 1; i <= getTotalPages(press); i++) {
    numberPage.innerHTML += `<span class="number-button">${i}</span>`;
  }
  numberPage.firstChild.classList.add("selected");
  pageNumberBtns = document.querySelectorAll(".number-button");
};

const moveselectPage = () => {
  const pageBtns = document.querySelectorAll(".number-button");

  pageBtns.forEach((pageBtn) => {
    if (pageBtn.classList.contains("selected")) {
      pageBtn.classList.remove("selected");
    }
  });
  pageBtns[currentPage - 1].classList.add("selected");
};

fetch("press.json")
  .then((response) => response.json())
  .then((press) => {
    getTotalPages(press);
    // console.log(getTotalPages());
    setPageBtn(press);

    const setPageOf = (pageNumber) => {
      tbody.innerHTML = "";

      for (
        let i = countPages * (pageNumber - 1) + 1;
        i <= countPages * (pageNumber - 1) + 10 && i <= press.length;
        i++
      ) {
        const tr = document.createElement("tr");
        tr.className = "press-tr";

        const pressNumber = document.createElement("td");
        pressNumber.className = "press-td number";

        const pressTitle = document.createElement("td");
        pressTitle.className = "press-td title";

        const pressLink = document.createElement("a");
        pressLink.className = "press-link";

        const pressVenti = document.createElement("td");
        pressVenti.className = "press-td venti";

        const pressDay = document.createElement("td");
        pressDay.className = "press-td day";

        pressNumber.innerHTML = 199 - i;
        pressLink.innerHTML = press[i - 1].title;
        pressTitle.id = press[i - 1].id;
        pressVenti.innerText = "더벤티";
        pressDay.innerHTML = press[i - 1].day;

        pressTitle.appendChild(pressLink);
        tr.append(pressNumber, pressTitle, pressVenti, pressDay);
        tbody.appendChild(tr);
      }
      const posters = document.querySelectorAll(".press-link");
      posters.forEach((poster) => {
        poster.addEventListener("click", posterDetail);
      });
    };

    setPageOf(currentPage);

    pageNumberBtns.forEach((numberBtn) => {
      numberBtn.addEventListener("click", (e) => {
        currentPage = e.target.innerHTML;
        setPageOf(currentPage);
        moveselectPage();
      });
    });

    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage -= 1;
        setPageOf(currentPage);
        moveselectPage();
      }
    });
    nextBtn.addEventListener("click", () => {
      if (currentPage < pageNumberBtns.length) {
        currentPage += 1;
        setPageOf(currentPage);
        moveselectPage();
      }
    });

    const searchBtn = (e) => {
      e.preventDefault();
      const find = document.querySelector("#find").value;
      if (find === "title") {
        const searchText = document.querySelector(".search").value;
        if (searchText !== "") {
          newPage(press, searchText);
        } else {
          location.href = location.href;
        }
      } else if (find === "content") {
      }
    };

    form.addEventListener("submit", searchBtn);

    const posters = document.querySelectorAll(".press-link");
    posters.forEach((poster) => {
      poster.addEventListener("click", posterDetail);
    });
  });
