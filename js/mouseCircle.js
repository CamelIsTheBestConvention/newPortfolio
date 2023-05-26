var circle = document.getElementById("circle");

function moveCircle(event) {
  var x = event.clientX;
  var y = event.clientY;
  circle.style.left = x - 10 + "px";
  circle.style.top = y - 10 + "px";
}

document.addEventListener("mousemove", moveCircle);

window.addEventListener("scroll", function () {
  if (!circle.classList.contains("hidden")) {
    circle.classList.add("hidden");
  }
  clearTimeout(circle.timer);
  circle.timer = setTimeout(function () {
    circle.classList.remove("hidden");
  }, 300);
});
