const countPages = 8;

const numberPage = document.querySelector(".page");
const ul = document.querySelector(".event-contents");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const form = document.querySelector("form");

let pageNumberBtns;
let currentPage = 1;

const detail = (e) => {
  console.log(e);
  const { id } = e.target.parentElement;
  console.log(id);
  const detailURL = `https://www.theventi.co.kr/new2022/news/event.html?bmain=view&uid=${id}&mode=`;
  window.open(detailURL, "_blank");
};

const newPage = (events, searchText) => {
  ul.innerHTML = "";
  for (let i = 0; i < events.length; i++) {
    if (events[i].title.includes(searchText)) {
      const li = document.createElement("li");
      li.className = "content";

      const a = document.createElement("a");

      const image = document.createElement("div");
      image.className = "image";

      const img = document.createElement("span");
      img.className = "img";

      const text = document.createElement("div");
      text.className = "text";

      const title = document.createElement("p");
      title.className = "title";

      const date = document.createElement("p");
      date.className = "date";

      const span = document.createElement("span");

      img.style.backgroundImage = `url(${events[i].img})`;
      title.innerHTML = events[i].title;
      date.innerHTML = `<span>이밴트 기간 :</span> ${events[i].day}`;

      date.appendChild(span);
      text.append(title, date);
      image.appendChild(img);
      a.append(image, text);
      li.appendChild(a);
      ul.appendChild(li);
      document.querySelector(".event-pages").style.display = "none";
    }
  }
};

const getTotalPages = (events) => {
  return Math.ceil(events.length / countPages);
};

const setPageBtn = (events) => {
  numberPage.innerHTML = "";
  for (let i = 1; i <= getTotalPages(events); i++) {
    numberPage.innerHTML += `<span class="number-button">${i}</span>`;
  }
  numberPage.firstChild.classList.add("selected");
  pageNumberBtns = document.querySelectorAll(".number-button");
};

const moveselectPage = () => {
  const pageBtn = document.querySelectorAll(".number-button");

  pageBtn.forEach((pageBtn) => {
    if (pageBtn.classList.contains("selected")) {
      pageBtn.classList.remove("selected");
    }
  });
  pageBtn[currentPage - 1].classList.add("selected");
};

fetch("event.json")
  .then((response) => response.json())
  .then((events) => {
    getTotalPages(events);

    setPageBtn(events);

    const setPageOf = (pageNumber) => {
      ul.innerHTML = "";

      for (
        let i = countPages * (pageNumber - 1) + 1;
        i <= countPages * (pageNumber - 1) + 8 && i <= events.length;
        i++
      ) {
        const li = document.createElement("li");
        li.className = "content";

        const a = document.createElement("a");

        const image = document.createElement("div");
        image.className = "image";

        const img = document.createElement("span");
        img.className = "img";

        const text = document.createElement("div");
        text.className = "text";

        const title = document.createElement("p");
        title.className = "title";

        const date = document.createElement("p");
        date.className = "date";

        const span = document.createElement("span");

        img.style.backgroundImage = `url(${events[i - 1].img})`;
        title.innerHTML = events[i - 1].title;
        date.innerHTML = `<span>이밴트 기간 :</span> ${events[i - 1].day}`;
        li.id = events[i - 1].id;

        date.appendChild(span);
        text.append(title, date);
        image.appendChild(img);
        a.append(image, text);
        li.appendChild(a);
        ul.appendChild(li);
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

    const searchBtn = (e) => {
      e.preventDefault();
      const find = document.querySelector("#find").value;
      if (find === "title") {
        const searchText = document.querySelector(".search").value;
        if (searchText !== "") {
          newPage(events, searchText);
        } else {
          location.href = location.href;
        }
      }
    };

    const contents = document.querySelectorAll(".content");
    contents.forEach((content) => {
      content.addEventListener("click", detail);
    });

    form.addEventListener("submit", searchBtn);
  });
