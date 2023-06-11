var fadeUpElements = document.querySelectorAll(".fadeup");

fadeUpElements.forEach(function (element, index) {
  var delay = index * 300;

  element.style.animationDelay = delay + "ms";
  element.classList.add("fadeup");
});

document.getElementById("questionId1").addEventListener("click", function () {
  var answer1 = document.getElementById("answerId1");

  if (answer1.style.display === "none") {
    answer1.style.display = "flex";
  } else {
    answer1.style.display = "none";
  }
});

document.getElementById("questionId2").addEventListener("click", function () {
  var answer2 = document.getElementById("answerId2");
  var question2 = document.getElementById("questionId2");

  if (answer2.style.display === "none") {
    answer2.style.display = "flex";
    question2.style.textAlign = "right";
  } else {
    answer2.style.display = "none";
    question2.style.textAlign = "left";
  }
});

document.getElementById("questionId3").addEventListener("click", function () {
  var answer3 = document.getElementById("answerId3");

  if (answer3.style.display === "none") {
    answer3.style.display = "flex";
  } else {
    answer3.style.display = "none";
  }
});
