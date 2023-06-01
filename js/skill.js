var contentTitle = document.getElementById("content-title");
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");
var text4 = document.getElementById("text4");
var text5 = document.getElementById("text5");
var textBox = document.getElementById("content-detail");

text4.style.listStyle = "none";
text5.style.listStyle = "none";

// css 텍스트
function cssText() {
  contentTitle.classList.remove("fade-in2s");
  textBox.classList.remove("fade-in3s");

  setTimeout(function () {
    contentTitle.innerHTML = "HTML/CSS";
    text4.style.listStyle = "none";
    text5.style.listStyle = "none";

    text1.innerHTML = "시맨틱 태그를 활용하여 코드를 작성할 수 있습니다.";
    text2.innerHTML =
      "미디어쿼리를 사용해 반응형 웹 페이지를 만들 수 있습니다.";
    text3.innerHTML =
      "애니메이션 속성을 이용해 부드러운 이벤트를 만들 수 있습니다.";
    text4.innerHTML = "";
    text5.innerHTML = "";

    contentTitle.classList.add("fade-in2s");
    textBox.classList.add("fade-in3s");
  }, 100);
}

// js 텍스트
function jsText() {
  contentTitle.classList.remove("fade-in2s");
  textBox.classList.remove("fade-in3s");

  setTimeout(function () {
    contentTitle.innerHTML = "JavaScript";

    text4.style.listStyle = "disc";
    text5.style.listStyle = "disc";

    text1.innerHTML =
      "자바스크립트를 사용하여 웹 페이지를 동적으로 변경하고 업데이트할 수 있습니다.";
    text2.innerHTML =
      "회원가입이나 로그인 같은 입력 양식의 데이터 유효성을 검사하는 기능을 자바스크립트로 구현할 수 있습니다.";
    text3.innerHTML =
      "ajax를 이용하여 페이지의 일부에 데이터를 가져와서 동적으로 표시할 수 있습니다.";
    text4.innerHTML =
      "자바스크립트를 사용하여 요소의 애니메이션과 효과를 구현할 수 있습니다.";
    text5.innerHTML =
      "버튼 클릭, 마우스 이동 등 다양한 이벤트에 대한 핸들러를 등록하여 원하는 동작을 수행할 수 있습니다.";
    contentTitle.classList.add("fade-in2s");
    textBox.classList.add("fade-in3s");
  }, 100);
}

// react 텍스트
function reactText() {
  contentTitle.classList.remove("fade-in2s");
  textBox.classList.remove("fade-in3s");

  setTimeout(function () {
    contentTitle.innerHTML = "React";

    text4.style.listStyle = "disc";
    text5.style.listStyle = "none";

    text1.innerHTML =
      "JSX방식의 컴포넌트 기반 구조로 코드를 작성할 수 있습니다.";
    text2.innerHTML =
      "리액트 라우터를 사용하여 url에 맞는 컴포넌트 렌더링을 할 수 있습니다.";
    text3.innerHTML =
      "리액트 Hook을 사용하여 상황에 맞게 적절히 코드를 작성할 수 있습니다.";
    text4.innerHTML =
      "회원가입과 로그인의 데이터를 서버와 연동하여 스토리지에 저장해 사용할 수 있습니다.";
    text5.innerHTML = "";
    contentTitle.classList.add("fade-in2s");
    textBox.classList.add("fade-in3s");
  }, 100);
}

// java 텍스트
function javaText() {
  contentTitle.classList.remove("fade-in2s");
  textBox.classList.remove("fade-in3s");

  setTimeout(function () {
    contentTitle.innerHTML = "Java";

    text4.style.listStyle = "disc";
    text5.style.listStyle = "none";

    text1.innerHTML = "객체지향에 대해 이해하고 코드를 작성할 수 있습니다.";
    text2.innerHTML =
      "명령문을 활용하여 기본적인 알고리즘 문제를 풀 수 있습니다.";
    text3.innerHTML =
      "메소드와 클래스에 대해 이해하며 코드를 작성할 수 있습니다.";
    text4.innerHTML = "JDBC를 사용하여 데이터베이스와 연동할 수 있습니다.";
    text5.innerHTML = "";
    contentTitle.classList.add("fade-in2s");
    textBox.classList.add("fade-in3s");
  }, 100);
}

// spring 텍스트
function springText() {
  contentTitle.classList.remove("fade-in2s");
  textBox.classList.remove("fade-in3s");

  setTimeout(function () {
    contentTitle.innerHTML = "Spring";

    text4.style.listStyle = "disc";
    text5.style.listStyle = "none";

    text1.innerHTML =
      "어노테이션을 활용하여 MVC 패턴으로 코드를 작성할 수 있습니다.";
    text2.innerHTML = "의존성 주입을 이해하고 활용할 수 있습니다.";
    text3.innerHTML =
      "스프링의 테스트 모듈을 활용하여 단위 테스트를 작성할 수 있습니다";
    text4.innerHTML =
      "타임리프를 사용하여 컨트롤러를 탄 데이터를 화면에 출력할 수 있습니다.";
    text5.innerHTML = "";
    contentTitle.classList.add("fade-in2s");
    textBox.classList.add("fade-in3s");
  }, 100);
}

// oracle 텍스트
function oracleText() {
  contentTitle.classList.remove("fade-in2s");
  textBox.classList.remove("fade-in3s");

  setTimeout(function () {
    contentTitle.innerHTML = "Oracle";

    text4.style.listStyle = "none";
    text5.style.listStyle = "none";

    text1.innerHTML =
      "데이터베이스의 종류에 대해 이해하며 적절히 사용할 수 있습니다.";
    text2.innerHTML =
      "데이터를 검색, 삽입, 갱신, 삭제하기 위한 쿼리문을 작성할 수 있습니다.";
    text3.innerHTML = "페이징 처리에 필요한 쿼리문을 작성할 수 있습니다.";
    text4.innerHTML = "";
    text5.innerHTML = "";
    contentTitle.classList.add("fade-in2s");
    textBox.classList.add("fade-in3s");
  }, 100);
}
