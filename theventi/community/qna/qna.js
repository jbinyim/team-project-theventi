const navs = document.querySelectorAll(".nav li");
const qnas = document.querySelectorAll(".qna-total li");

const xhr = new XMLHttpRequest();

xhr.open("GET", "qna.json", true);
xhr.send();

const renderHTML = (qna) => {
  let output = "";
  for (let i = 0; i < 3; i++) {
    output += `
    <div class="qna-front">
        ${qna[0].catagory} ${qna[0].question[i]}
    </div>
    <div class="qna-back">
    ${qna[0].answer[i]}
    </div>
    `;
    document.querySelector(".qna").innerHTML = output;
  }
  for (let i = 0; i < 7; i++) {
    output += `
    <div class="qna-front">
      ${qna[1].catagory} ${qna[1].question[i]}
    </div>
    <div class="qna-back">
    ${qna[1].answer[i]}
    </div>
    `;
    document.querySelector(".qna").innerHTML = output;
  }

  output = "";
  for (let i = 0; i < 9; i++) {
    output += `
    <div class="qna-front">
      ${qna[1].catagory} ${qna[1].question[i]}
    </div>
    `;
    document.querySelector(".stemp").innerHTML = output;
  }
  for (let i = 0; i < 1; i++) {
    output += `
    <div class="qna-front">
      ${qna[2].catagory} ${qna[2].question[i]}
    </div>
    `;
    document.querySelector(".stemp").innerHTML = output;
  }
};

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const qna = JSON.parse(xhr.responseText);
    renderHTML(qna);
  }
};

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
