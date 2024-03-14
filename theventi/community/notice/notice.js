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

    // const searchSubmit = (e) => {
    //   e.preventDefault();
    //   const find = document.querySelector("#find");
    //   if (find.value == "title") {
    //     const titles = document.querySelectorAll(".search-title");
    //     const text = document.querySelector(".search").value;
    //     titles.forEach((title) => {
    //       // console.log(typeof title.innerText);
    //       // console.log(typeof text);
    //       console.log(text.includes(title.innerText));
    //       // console.log(title.innerText == text);
    //       // if (title.innerText == text) {
    //       //   console.log("c");
    //       // }
    //     });
    //   } else if (find.value == "content") {
    //     console.log("b");
    //   }
    // };
    const searchSubmit = (e) => {
      e.preventDefault();
      const find = document.querySelector("#find").value;
      const searchText = document.querySelector(".search").value.toLowerCase();

      if (find === "title") {
        const titles = document.querySelectorAll(".search-title");
        titles.forEach((title) => {
          const titleText = title.innerText.toLowerCase();
          if (!titleText.includes(searchText)) {
            // output = "";
            // contents.innerHTML = output;
            contents.style.display = "none"; // 제목이 검색어를 포함하지 않으면 해당 공지사항을 숨깁니다.
          } else {
            // output = "";
            // contents.innerHTML = output;
            // news();
            // open();
            // contents.style.display = ""; // 검색어를 포함하는 공지사항은 보입니다.
            title.parentElement.style.display = "none";
            if (title.textContent.toLowerCase().includes(searchQuery)) {
              title.parentElement.style.display = "";
              // contents.style.display = "";
            }
          }
        });
      } else if (find === "content") {
        // 내용 기반 검색 로직 (예시 코드에는 내용 검색에 대한 부분이 구현되어 있지 않습니다.)
      }
    };

    select.addEventListener("change", selectCategory);
    search.addEventListener("submit", searchSubmit);
  });
