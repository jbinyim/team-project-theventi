const navs = document.querySelectorAll(".nav li");
const qnas = document.querySelectorAll(".qna-total li");

const xhr = new XMLHttpRequest();

xhr.open("GET", "qna.json", true);
xhr.send();

const renderHTML = (qna) => {
  let output = "";
  qna.forEach((qa) => {
    if (qa.catagory == "[스탬프]") {
      output += `
    <div class="qna-front">
    ${qa.catagory} ${qa.question}
    </div>
    <div class="qna-back">
    ${qa.answer}
    </div>
      `;
      document.querySelector(".stemp").innerHTML = output;
    } else if (qa.catagory == "[탄소중립포인트제도]") {
      output += `
      <div class="qna-front">
      ${qa.catagory} ${qa.question}
      </div>
      <div class="qna-back">
      ${qa.answer}
      </div>
        `;
      document.querySelector(".guitar").innerHTML = output;
    }
  });
};

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const qna = JSON.parse(xhr.responseText);
    renderHTML(qna);
  }
};

// const btn = qnas.forEach((qn) => {
//   qn.addEventListener("click", () => {
//     for (let i = 0; i < navs.length; i++) {
//       qnas[i].classList.remove("active");
//     }
//     qn.classList.add("active");
//     console.log(qn);
//   });
// });

// navs.forEach((nav) => {
//   nav.addEventListener("click", () => {
//     for (let i = 0; i < navs.length; i++) {
//       navs[i].classList.remove("active");
//       // qnas[i].classList.remove("active");
//     }
//     nav.classList.add("active");
//     // qnas.classList.add("active");
//   });
// });

for (let i = 0; i < navs.length; i++) {
  navs[i].addEventListener("click", function () {
    for (let j = 0; j < navs.length; j++) {
      navs[j].classList.remove("active");
      qnas[j].classList.remove("active");
    }
    navs[i].classList.add("active");
    qnas[i].classList.add("active");
  });
}
