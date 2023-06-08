var fadeUpElements = document.querySelectorAll(".fadeup");

fadeUpElements.forEach(function (element, index) {
  var delay = index * 300;

  element.style.animationDelay = delay + "ms";
  element.classList.add("fadeup");
});
