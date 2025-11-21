import { forwardRef } from "react";
import { SparkleIco, ArrowIco } from "@/icon";
import Line from "@/assets/img/line.svg?react";
import cn from "classnames";

const Contact = forwardRef((props, ref) => {
  return (
    <section className={cn("contact", props.className)} ref={ref}>
      <div className="contact__wrap">
        <div className="contact__tit">
          <span className="contact__line">
            <Line style={{ color: "ffffff" }} />
          </span>
          <span className="contact__tit-txt">
            CONTACT
            <SparkleIco color="ffffff" className="contact__tit-ico" />
          </span>
        </div>
        <button
          className="contact__button"
          onClick={() => {
            props.clickEvt();
          }}
        >
          <ArrowIco className="contact__button-ico" />
          <span className="hidden">go top</span>
        </button>
        <div className="contact__info">
          <span className="contact__name">Kim Yebin</span>
          <ul className="contact__list">
            <li className="contact__item">010-9732-3205</li>
            <li className="contact__item">
              <a href="mailto:ckrong123@naver.com">ckrong123@naver.com</a>
            </li>
            <li className="contact__item">
              <a href="">블로그링크</a>
            </li>
            <li className="contact__item">
              <a href="">깃링크</a>
            </li>
          </ul>
          <span className="contact__copy">
            Copyright©2025 kimyebim. All rights reserved.
          </span>
        </div>
      </div>
    </section>
  );
});

export default Contact;
