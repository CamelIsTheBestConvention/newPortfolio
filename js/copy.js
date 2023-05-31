// 폰번호 카피
function phoneCopy() {
  var phoneCopy = document.getElementById("phone-number").innerText;

  navigator.clipboard
    .writeText(phoneCopy)
    .then(function () {
      alert("텍스트가 클립보드에 복사되었습니다: ");
    })
    .catch(function (err) {
      console.error("텍스트 복사 실패:", err);
    });
}

// 이메일 카피
function emailCopy() {
  var emailCopy = document.getElementById("e-mail").innerText;

  navigator.clipboard
    .writeText(emailCopy)
    .then(function () {
      alert("텍스트가 클립보드에 복사되었습니다: ");
    })
    .catch(function (err) {
      console.error("텍스트 복사 실패:", err);
    });
}
