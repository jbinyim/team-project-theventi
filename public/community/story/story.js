const countPages = 8;

const numberPage = document.querySelector(".page");
const tbody = document.querySelector(".story-tbody");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const form = document.querySelector("form");

let pageNumberBtns;
let currentPage = 1;

const posterDetail = (e) => {
  const { id } = e.target.parentElement;
  const detailURL = `https://www.theventi.co.kr/new2022/news/story.html?bmain=view&uid=${id}&mode=`;
  window.open(detailURL, "_blank");
};

const newPage = (story, searchText) => {
  tbody.innerHTML = "";

  for (let i = 0; i < story.length; i++) {
    if (story[i].title.includes(searchText)) {
      const tr = document.createElement("tr");
      tr.className = "story-tr";
      const storyId = document.createElement("td");
      storyId.className = "story-id";
      const storyTitle = document.createElement("td");
      storyTitle.className = "story-title";
      const a = document.createElement("a");
      a.className = "story-link";
      const storyMade = document.createElement("td");
      storyMade.className = "story-made";
      const storyDate = document.createElement("td");
      storyDate.className = "story-date";

      storyId.innerHTML = `${story[i].id - 1}`;
      a.innerHTML = story[i].title;
      storyTitle.id = story[i].id;
      storyMade.innerText = "더벤티";
      storyDate.innerHTML = story[i].date;

      storyTitle.appendChild(a);
      tr.append(storyId, storyTitle, storyMade, storyDate);
      tbody.appendChild(tr);
      document.querySelector(".story-pages").style.display = "none";
    }
  }
  const posters = document.querySelectorAll(".story-link");
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

const setPageBtn = (story) => {
  numberPage.innerHTML = "";
  for (let i = 1; i <= getTotalPages(story); i++) {
    numberPage.innerHTML += `<span class="number-button">${i}</span>`;
  }
  numberPage.firstChild.classList.add("selected");
  pageNumberBtns = document.querySelectorAll(".number-button");
};

const getTotalPages = (story) => {
  return Math.ceil(story.length / countPages);
};

fetch("story.json")
  .then((response) => response.json())
  .then((story) => {
    getTotalPages(story);
    setPageBtn(story);

    const setPageOf = (pageNumber) => {
      tbody.innerHTML = "";

      for (
        let i = countPages * (pageNumber - 1) + 1;
        i <= countPages * (pageNumber - 1) + 8 && i <= story.length;
        i++
      ) {
        const tr = document.createElement("tr");
        tr.className = "story-tr";
        const storyId = document.createElement("td");
        storyId.className = "story-id";
        const storyTitle = document.createElement("td");
        storyTitle.className = "story-title";
        const a = document.createElement("a");
        a.className = "story-link";
        const storyMade = document.createElement("td");
        storyMade.className = "story-made";
        const storyDate = document.createElement("td");
        storyDate.className = "story-date";

        storyId.innerHTML = `${story[i - 1].id - 1}`;
        a.innerHTML = story[i - 1].title;
        storyTitle.id = story[i - 1].id;
        storyMade.innerText = "더벤티";
        storyDate.innerHTML = story[i - 1].date;

        storyTitle.appendChild(a);
        tr.append(storyId, storyTitle, storyMade, storyDate);
        tbody.appendChild(tr);
      }
      const posters = document.querySelectorAll(".story-link");
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
      if (currentPage < getTotalPages(story)) {
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
          newPage(story, searchText);
        } else {
          location.href = location.href;
        }
      }
    };

    form.addEventListener("submit", searchBtn);

    const posters = document.querySelectorAll(".story-link");
    posters.forEach((poster) => {
      poster.addEventListener("click", posterDetail);
    });
  });
