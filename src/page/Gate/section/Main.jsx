import { SparkleIco } from "@/icon";

export default function Main() {
  // 년도
  const date = new Date();
  const thisYear = date.getFullYear();

  return (
    <section className="main">
      <div className="main__wrap">
        <div className="main__cont">
          <div className="main__top">
            <span className="main-top">
              <span className="main-top__txt">WEB</span>
              <span className="main-top__txt">PUBLISHER</span>
            </span>
          </div>
          <div className="main__tit">
            <h2 className="main-tit">
              P<span className="main-tit--o">o</span>rt
              <span className="main-tit--f">f</span>olio
            </h2>
            <SparkleIco className="main__tit-ico" />
          </div>
          <div className="main__bottom">
            <div className="main-year">
              <span className="main-year__num">2021</span>
              <span className="main-year__num">{thisYear}</span>
            </div>
            <div className="main-name">
              <span className="main-name__pct">(</span>
              <span className="main-name__txt">Kim-Yebin</span>
              <span className="main-name__pct">)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
