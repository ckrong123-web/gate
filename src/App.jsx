import { Header } from "@/component";
import { SparkleIco } from "@/icon";
import cn from "classnames";

import Line from "@/assets/img/line.svg?react";

function App({ children }) {
  // 헤더 리스트
  const headerData = [
    { txt: "HOME" },
    { txt: "ABOUT" },
    { txt: "WORKS" },
    { txt: "CONTACT" },
  ];

  const aboutData = [
    {
      tit: "EDUCATION",
      child: [
        { year: "2018.02", txt: "해송 고등학교 졸업" },
        { year: "2020.02", txt: "신안산 대학교 졸업" },
        { year: "2021.10", txt: "그린 컴퓨터 아카데미 디지털디자인 과정 수료" },
      ],
    },
    {
      tit: "EXPERIENCE",
      child: [
        {
          year: "2021.10 ~ 2022.08",
          txt: "이즈디 | 사원",
          subTxt: "Web Design & Publishing",
        },
        {
          year: "2022.08 ~ now",
          txt: "프레임아웃 | 주임",
          subTxt: "UX Design Office Publishing Part",
        },
      ],
      during: true,
    },
  ];

  // 년도
  const date = new Date();
  const thisYear = date.getFullYear();

  return (
    <div className="wrapper">
      <div className="container">
        <Header data={headerData} />
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
        <section className="about">
          <div className="about__wrap">
            <span className="about__line">
              <Line style={{ color: "0980e3" }} />
            </span>
            <div className="about__cont">
              <div className="about-top">
                <div className="about-top__left">
                  <span className="about-top__deco">
                    <SparkleIco className="about-top__ico" />
                  </span>
                  <div className="about-top__info">
                    <span className="about-name">
                      Kim
                      <br />
                      Yebin
                    </span>
                    <span className="about-namesub">
                      <span className="about-namesub__txt">김예빈</span>
                      <span className="about-namesub__txt">1999.05.06</span>
                    </span>
                  </div>
                </div>
                <div className="about-top__right">
                  <span className="about-top__contact">010.9732.3205</span>
                  <span className="about-top__contact">
                    ckrong123@naver.com
                  </span>
                  <span className="about-top__contact">Kakao ID · Eorns99</span>
                </div>
              </div>
              <div className="about-bottom">
                {aboutData.map((item, num) => {
                  return (
                    <div className="about-group" key={num}>
                      <strong className="about-group__tit">{item.tit}</strong>
                      <ul className="about-group__list">
                        {item.child.map((childItem, childNum) => {
                          return (
                            <li
                              className={cn("about-group__item", {
                                "about-group__item--large": childItem.subTxt,
                              })}
                              key={childNum}
                            >
                              <div className="about-item">
                                <span
                                  className={cn("about-item__year", {
                                    "about-item__year--during": item.during,
                                  })}
                                >
                                  {childItem.year}
                                </span>
                                <span className="about-item__txt-box">
                                  <span className="about-item__txt">
                                    {childItem.txt}
                                  </span>
                                  {childItem.subTxt && (
                                    <span className="about-item__sub-txt">
                                      {childItem.subTxt}
                                    </span>
                                  )}
                                </span>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
