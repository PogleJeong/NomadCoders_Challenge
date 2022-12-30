const h2 = document.querySelector("h2");
// 스타일 바꾸는 것은 CSS 에만 맡기자 !!

function ResizeEventOnWindow() {
  const windowOfWidth = window.innerWidth;
  const className = ["background1","background2","background3"]
  ; // 변경하면 기존거 없애기
  if (windowOfWidth > 1000) {
    document.body.classList.add(className[0]); // 니꼬썜 #3.7 많이 실수하는 것 변수이름 불일치
    document.body.classList.remove(className[1]);
    document.body.classList.remove(className[2]);
  } else if (windowOfWidth > 600) {
    document.body.classList.add(className[1]);
    document.body.classList.remove(className[0]);
    document.body.classList.remove(className[2]);
  } else if (windowOfWidth > 300) {
    document.body.classList.add(className[2]);
    document.body.classList.remove(className[0]);
    document.body.classList.remove(className[1]);
  }
}


window.addEventListener("resize", ResizeEventOnWindow);