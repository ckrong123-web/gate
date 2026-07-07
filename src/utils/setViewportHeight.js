// 카카오톡 인앱 브라우저 등 vh/dvh 계산이 어긋나는 환경 대응
// window.innerHeight 기준으로 1vh 값을 계산해 CSS 변수(--vh)로 주입한다.
function setViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

export default function initViewportHeight() {
  setViewportHeight();

  // 모바일 인앱 브라우저는 스크롤 중 주소창이 접혔다 펴지며 innerHeight만
  // 바뀌는 resize를 계속 쏜다. 이때마다 --vh를 다시 계산하면 높이가 흔들려
  // 화면이 덜그럭거리므로, 실제 폭이 바뀐 경우(진짜 리사이즈/회전)에만 갱신한다.
  let lastWidth = window.innerWidth;
  window.addEventListener("resize", () => {
    if (window.innerWidth === lastWidth) return;
    lastWidth = window.innerWidth;
    setViewportHeight();
  });
  window.addEventListener("orientationchange", () => {
    lastWidth = window.innerWidth;
    setViewportHeight();
  });
}
