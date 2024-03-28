const countPages = 10;

const numberPage = document.querySelector(".page");
const tbody = document.querySelector("tbody");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const form = document.querySelector("form");

let pageNumberBtns;
let currentPage = 1;

const posterDetail = (e) => {
  const { id } = e.target.parentElement;
  const detailURL = `https://www.theventi.co.kr/new2022/news/event_1.html?bmain=view&uid=${id}`;
  window.open(detailURL, "_blank");
};

const newPage = (winner, searchText) => {
  tbody.innerHTML = "";

  for (let i = 0; i < winner.length; i++) {
    if (winner[i].title.includes(searchText)) {
      const tr = document.createElement("tr");
      tr.className = "winner-tr";

      const winnerNum = document.createElement("td");
      winnerNum.className = "winner-td-num";

      const winnerTitle = document.createElement("td");
      winnerTitle.className = "winner-td-title";
      const winnerLink = document.createElement("a");
      winnerLink.className = "winner-link";
      const winnerMade = document.createElement("td");
      winnerMade.className = "winner-td-made";
      const winnerDay = document.createElement("td");
      winnerDay.className = "winner-td-day";

      winnerNum.innerHTML = winner[i].id;
      winnerLink.innerHTML = winner[i].title;
      winnerTitle.id = winner[i].id;
      winnerMade.innerText = "더**";
      winnerDay.innerHTML = winner[i].date;

      winnerTitle.appendChild(winnerLink);
      tr.append(winnerNum, winnerTitle, winnerMade, winnerDay);
      tbody.appendChild(tr);
      document.querySelector(".winner-pages").style.display = "none";
    }
  }
  const posters = document.querySelectorAll(".winner-link");
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

const setPageBtn = (winner) => {
  numberPage.innerHTML = "";
  for (let i = 1; i <= getTotalPages(winner); i++) {
    numberPage.innerHTML += `<span class="number-button">${i}</span>`;
  }
  numberPage.firstChild.classList.add("selected");
  pageNumberBtns = document.querySelectorAll(".number-button");
};

const getTotalPages = (winner) => {
  return Math.ceil(winner.length / countPages);
};

fetch("winner.json")
  .then((response) => response.json())
  .then((winner) => {
    getTotalPages(winner);
    setPageBtn(winner);

    const setPageOf = (pageNumber) => {
      tbody.innerHTML = "";

      for (
        let i = countPages * (pageNumber - 1) + 1;
        i <= countPages * (pageNumber - 1) + 10 && i <= winner.length;
        i++
      ) {
        const tr = document.createElement("tr");
        tr.className = "winner-tr";

        const winnerNum = document.createElement("td");
        winnerNum.className = "winner-td-num";

        const winnerTitle = document.createElement("td");
        winnerTitle.className = "winner-td-title";
        const winnerLink = document.createElement("a");
        winnerLink.className = "winner-link";
        const winnerMade = document.createElement("td");
        winnerMade.className = "winner-td-made";
        const winnerDay = document.createElement("td");
        winnerDay.className = "winner-td-day";

        winnerNum.innerHTML = winner[i - 1].id;
        winnerLink.innerHTML = winner[i - 1].title;
        winnerTitle.id = winner[i - 1].id;
        winnerMade.innerText = "더**";
        winnerDay.innerHTML = winner[i - 1].date;

        winnerTitle.appendChild(winnerLink);
        tr.append(winnerNum, winnerTitle, winnerMade, winnerDay);
        tbody.appendChild(tr);
      }
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
      if (currentPage < getTotalPages(winner)) {
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
          newPage(winner, searchText);
        } else {
          location.href = location.href;
        }
      }
    };

    form.addEventListener("submit", searchBtn);

    const posters = document.querySelectorAll(".winner-link");
    posters.forEach((poster) => {
      poster.addEventListener("click", posterDetail);
    });
  });
