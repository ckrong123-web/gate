import { forwardRef } from "react";
import { SparkleIco } from "@/icon";
import cn from "classnames";

import Line from "@/assets/img/line.svg?react";
import Round from "@/assets/img/roundTxt.svg?react";

const About = forwardRef((props, ref) => {
  return (
    <section className="about" ref={ref}>
      <div className="about__wrap">
        <span className="about__line">
          <Line style={{ color: "0980e3" }} />
        </span>
        <div className="about__cont">
          <div className="about-top">
            <div className="about-top__left">
              <span className="about-top__deco">
                <SparkleIco className="about-top__ico" />
                <Round
                  className="about-top__round"
                  style={{ color: "0980e3" }}
                />
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
              <span className="about-top__contact">ckrong123@naver.com</span>
              <span className="about-top__contact">Kakao ID · Eorns99</span>
            </div>
          </div>
          <div className="about-bottom">
            {props.data.map((item, num) => {
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
  );
});

export default About;
