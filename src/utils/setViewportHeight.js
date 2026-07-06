// 카카오톡 인앱 브라우저 등 vh/dvh 계산이 어긋나는 환경 대응
// window.innerHeight 기준으로 1vh 값을 계산해 CSS 변수(--vh)로 주입한다.
function setViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

export default function initViewportHeight() {
  setViewportHeight();
  window.addEventListener("resize", setViewportHeight);
  window.addEventListener("orientationchange", setViewportHeight);
}
