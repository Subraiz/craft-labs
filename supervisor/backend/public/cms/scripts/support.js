let questionContainers = document.querySelectorAll(".question");

questionContainers.forEach(question => {
  question.addEventListener("click", () => {
    let answer = question.nextElementSibling;
    if (
      answer.style.maxHeight == "0px" ||
      answer.style.maxHeight == "0" ||
      answer.style.maxHeight == ""
    ) {
      showAnswer(question);
    } else {
      hideAnswer(question);
    }
  });
});

// Helper Function
function showAnswer(div) {
  let icon = div.querySelector("i");
  icon.style.transform = "rotate(45deg)";
  let answer = div.nextElementSibling;
  answer.style.maxHeight = "240px";
  let answerParagraphs = answer.querySelectorAll("p");
  answerParagraphs.forEach((paragaph, index) => {
    paragaph.style.margin = "20px";
    paragaph.style.display = "block";
    setTimeout(() => {
      paragaph.style.opacity = "1";
    }, 200 * (index + 1));
  });
}

function hideAnswer(div) {
  let icon = div.querySelector("i");
  icon.style.transform = "rotate(0deg)";
  let answer = div.nextElementSibling;
  let answerParagraphs = answer.querySelectorAll("p");

  answerParagraphs.forEach((paragaph, index) => {
    setTimeout(() => {
      paragaph.style.opacity = "0";
      paragaph.style.transition = ".2s linear";
      paragaph.style.margin = "0px";
    }, 170 * index);
  });

  answer.style.maxHeight = "0";

  answerParagraphs.forEach((paragaph, index) => {
    setTimeout(() => {
      paragaph.style.display = "none";
    }, 800);
  });
}
