const navs = document.querySelectorAll(".nav li");
const qnas = document.querySelectorAll(".qna-total li");

const toggle = () => {
  const fronts = document.querySelectorAll(".qna-front");
  const backs = document.querySelectorAll(".qna-back");

  for (let i = 0; i < fronts.length; i++) {
    fronts[i].addEventListener("click", () => {
      backs[i].classList.toggle("active");
    });
  }
};

fetch("qna.json")
  .then((response) => response.json())
  .then((json) => {
    let output = "";

    // 전체
    for (let i = 0; i < 3; i++) {
      output += `
            <div class="qna-front">
                ${json[0].catagory} ${json[0].question[i]}
            </div>
            <div class="qna-back">
            ${json[0].answer[i]}
            </div>
            `;
    }

    for (let i = 0; i < 7; i++) {
      output += `
          <div class="qna-front">
            ${json[1].catagory} ${json[1].question[i]}
          </div>
          <div class="qna-back">
          ${json[1].answer[i]}
          </div>
          `;
    }
    document.querySelector(".qna").innerHTML = output;

    // 스탬프/쿠폰
    output = "";
    for (let i = 0; i < 9; i++) {
      output += `
      <div class="qna-front">
        ${json[1].catagory} ${json[1].question[i]}
      </div>
      <div class="qna-back">
        ${json[1].answer[i]}
      </div>
    
    `;
    }
    for (let i = 0; i < 1; i++) {
      output += `
        <div class="qna-front">
          ${json[2].catagory} ${json[2].question[i]}
        </div>
        <div class="qna-back">
          ${json[2].answer[i]}
        </div>
    `;
    }
    document.querySelector(".stemp").innerHTML = output;

    // 회원
    output = "";
    for (let i = 0; i < 10; i++) {
      output += `
        <div class="qna-front">
          ${json[3].catagory} ${json[3].question[i]}
        </div>
        <div class="qna-back">
          ${json[3].answer[i]}
        </div>
    `;
    }
    document.querySelector(".member").innerHTML = output;

    // 더벤티 오더
    output = "";
    for (let i = 0; i < 9; i++) {
      output += `
        <div class="qna-front">
          ${json[4].catagory} ${json[4].question[i]}
        </div>
        <div class="qna-back">
          ${json[4].answer[i]}
        </div>
    `;
    }
    document.querySelector(".order").innerHTML = output;

    // 제품
    output = "";
    for (let i = 0; i < 4; i++) {
      output += `
        <div class="qna-front">
          ${json[5].catagory} ${json[5].question[i]}
        </div>
        <div class="qna-back">
          ${json[5].answer[i]}
        </div>
    `;
    }
    document.querySelector(".product").innerHTML = output;

    // 기타
    output = "";
    for (let i = 0; i < 3; i++) {
      output += `
            <div class="qna-front">
                ${json[0].catagory} ${json[0].question[i]}
            </div>
            <div class="qna-back">
            ${json[0].answer[i]}
            </div>
            `;
    }
    for (let i = 0; i < 1; i++) {
      output += `
        <div class="qna-front">
          ${json[6].catagory} ${json[6].question[i]}
        </div>
        <div class="qna-back">
          ${json[6].answer[i]}
        </div>
    `;
    }
    for (let i = 0; i < 3; i++) {
      output += `
        <div class="qna-front">
          ${json[7].catagory} ${json[7].question[i]}
        </div>
        <div class="qna-back">
          ${json[7].answer[i]}
        </div>
    `;
    }
    document.querySelector(".guitar").innerHTML = output;

    toggle();
  });

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
