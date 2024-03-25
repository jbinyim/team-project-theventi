const countPages = 10;

const numberPage = document.querySelector(".page");
const tbody = document.querySelector("tbody");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let pageNumberBtns;
let currentPage = 1;

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
      if (currentPage < pageNumberBtns.length) {
        currentPage += 1;
        setPageOf(currentPage);
        moveselectPage();
      }
    });
  });
