const contents = document.querySelector(".notice-contents");
const select = document.querySelector("#catagory");
const search = document.querySelector(".volun-search form");

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
            <li class="action"><a class="search-title">${
              json[0].title[i]
            }</a></li>
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
          <li class="action"><a class="search-title">${json[1].title}</a></li>
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

    const searchSubmit = (e) => {
      e.preventDefault();
      const find = document.querySelector("#find");
      if (find.value == "title") {
        const titles = document.querySelectorAll(".search-title");
        const text = document.querySelector(".search").value;
        titles.forEach((title) => {
          console.log(title.innerText == text);
          // if (title.innerText == text) {
          //   console.log("c");
          // }
        });
      } else if (find.value == "content") {
        console.log("b");
      }
    };

    select.addEventListener("change", selectCategory);
    search.addEventListener("submit", searchSubmit);
  });
