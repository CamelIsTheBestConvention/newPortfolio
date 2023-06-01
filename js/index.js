// fadeup 클래스를 가진 요소들을 모두 선택합니다.
var fadeUpElements = document.querySelectorAll(".fadeup");

// 각 요소를 순회하면서 순차적으로 fade-in 클래스를 추가합니다.
fadeUpElements.forEach(function (element, index) {
  // 각 요소의 애니메이션 지연 시간을 계산합니다.
  var delay = index * 300; // 순차적인 딜레이 시간을 조정할 수 있습니다.

  // 애니메이션 지연 시간을 CSS 스타일로 설정합니다.
  element.style.animationDelay = delay + "ms";

  // fade-in 클래스를 추가하여 애니메이션을 시작합니다.
  element.classList.add("fadeup");
});
