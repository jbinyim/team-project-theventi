const countPages = 8;

const numberPage = document.querySelector(".page");
const tbody = document.querySelector(".good-tbody");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const form = document.querySelector("form");

let pageNumberBtns;
let currentPage = 1;

const posterDetail = (e) => {
  const { id } = e.target.parentElement;
  const detailURL = `https://www.theventi.co.kr/new2022/news/story_1.html?bmain=view&uid=${id}&mode=`;
  window.open(detailURL, "_blank");
};

const newPage = (good, searchText) => {
  tbody.innerHTML = "";

  for (let i = 0; i < good.length; i++) {
    if (good[i].title.includes(searchText)) {
      const tr = document.createElement("tr");
      tr.className = "good-tr";
      const goodId = document.createElement("td");
      goodId.className = "good-id";
      const goodTitle = document.createElement("td");
      goodTitle.className = "good-title";
      const a = document.createElement("a");
      a.className = "good-link";
      const goodMade = document.createElement("td");
      goodMade.className = "good-made";
      const goodDate = document.createElement("td");
      goodDate.className = "good-date";

      goodId.innerHTML = `${good[i].id - 1}`;
      a.innerHTML = good[i].title;
      goodTitle.id = good[i].id;
      goodMade.innerText = "더벤티";
      goodDate.innerHTML = good[i].date;

      goodTitle.appendChild(a);
      tr.append(goodId, goodTitle, goodMade, goodDate);
      tbody.appendChild(tr);
      document.querySelector(".good-pages").style.display = "none";
    }
  }
  const posters = document.querySelectorAll(".good-link");
  posters.forEach((poster) => {
    poster.addEventListener("click", posterDetail);
  });
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

const setPageBtn = (good) => {
  numberPage.innerHTML = "";
  for (let i = 1; i <= getTotalPages(good); i++) {
    numberPage.innerHTML += `<span class="number-button">${i}</span>`;
  }
  numberPage.firstChild.classList.add("selected");
  pageNumberBtns = document.querySelectorAll(".number-button");
};

const getTotalPages = (good) => {
  return Math.ceil(good.length / countPages);
};

fetch("good.json")
  .then((response) => response.json())
  .then((good) => {
    getTotalPages(good);
    setPageBtn(good);

    const setPageOf = (pageNumber) => {
      tbody.innerHTML = "";

      for (
        let i = countPages * (pageNumber - 1) + 1;
        i <= countPages * (pageNumber - 1) + 8 && i <= good.length;
        i++
      ) {
        const tr = document.createElement("tr");
        tr.className = "good-tr";
        const goodId = document.createElement("td");
        goodId.className = "good-id";
        const goodTitle = document.createElement("td");
        goodTitle.className = "good-title";
        const a = document.createElement("a");
        a.className = "good-link";
        const goodMade = document.createElement("td");
        goodMade.className = "good-made";
        const goodDate = document.createElement("td");
        goodDate.className = "good-date";

        goodId.innerHTML = `${good[i - 1].id - 1}`;
        a.innerHTML = good[i - 1].title;
        goodTitle.id = good[i - 1].id;
        goodMade.innerText = "더벤티";
        goodDate.innerHTML = good[i - 1].date;

        goodTitle.appendChild(a);
        tr.append(goodId, goodTitle, goodMade, goodDate);
        tbody.appendChild(tr);
      }
      const posters = document.querySelectorAll(".good-link");
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
      if (currentPage < getTotalPages(good)) {
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
          newPage(good, searchText);
        } else {
          location.href = location.href;
        }
      }
    };

    form.addEventListener("submit", searchBtn);

    const posters = document.querySelectorAll(".good-link");
    posters.forEach((poster) => {
      poster.addEventListener("click", posterDetail);
    });
  });
