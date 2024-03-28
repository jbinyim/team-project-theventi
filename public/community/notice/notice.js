const contents = document.querySelector(".notice-contents");
const select = document.querySelector("#catagory");
const search = document.querySelector(".volun-search form");

const posterDetail = (e) => {
  const { id } = e.target.parentElement;
  const detailURL = `https://www.theventi.co.kr/new2022/news/notice.html?bmain=view&uid=${id}`;
  window.open(detailURL, "_blank");
};

const searchSubmit = (e) => {
  e.preventDefault();
  const find = document.querySelector("#find").value;
  let output = "";

  if (find === "title") {
    const titles = document.querySelectorAll(".search-title");
    const searchText = document.querySelector(".search").value;
    const newUl = document.createElement("ul");
    newUl.classList.add("notice-content");
    contents.innerHTML = output;
    titles.forEach((title) => {
      const titleText = title.innerText;

      if (titleText.includes(searchText)) {
        output += `
        <ul class="notice-content content">
        ${title.parentNode.parentNode.innerHTML}
        </ul>`;
      }
    });
    contents.innerHTML = output;
  }
  const posters = document.querySelectorAll(".search-title");
  posters.forEach((poster) => {
    poster.addEventListener("click", posterDetail);
  });
};

fetch("notice.json")
  .then((response) => response.json())
  .then((json) => {
    let output = "";

    const news = () => {
      for (let i = 0; i < json[0].day.length; i++) {
        output += `
            <ul class="notice-content content">
            <li class="action">${i + 1}</li>
            <li class="action">${json[0].name}</li>
            <li id=${json[0].id[i]} class="action">
              <a class="search-title">
                ${json[0].title[i]}
              </a>
            </li>
            <li class="action">더벤티</li>
            <li class="action">${json[0].day[i]}</li>
            </ul>
          `;
      }
      contents.innerHTML = output;
    };

    news();

    const open = () => {
      for (let i = 0; i < 1; i++) {
        output += `
          <ul class="notice-content content">
          <li class="action">${i + 20}</li>
          <li class="action">${json[1].name}</li>
          <li id=${json[1].id} class="action"><a class="search-title">${
          json[1].title
        }</a></li>
          <li class="action">더벤티</li>
          <li class="action">${json[1].day}</li>
          </ul>
        `;
      }
      contents.innerHTML = output;
    };

    open();

    const selectCategory = (e) => {
      const selectedIndex = e.target.options.selectedIndex;
      const value = e.target.options[selectedIndex].value;

      switch (value) {
        case "all":
          output = "";
          contents.innerHTML = output;
          news();
          open();
          break;

        case "news":
          output = "";
          contents.innerHTML = output;
          news();
          break;
        case "open":
          output = "";
          contents.innerHTML = output;
          open();
          break;
        case "event":
          output = "";
          contents.innerHTML = output;
          break;
        case "produce":
          output = "";
          contents.innerHTML = output;
          break;
      }
    };

    select.addEventListener("change", selectCategory);

    const posters = document.querySelectorAll(".search-title");
    posters.forEach((poster) => {
      poster.addEventListener("click", posterDetail);
    });
  });
search.addEventListener("submit", searchSubmit);
