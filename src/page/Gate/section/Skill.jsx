import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { forwardRef } from "react";
import { SparkleIco } from "@/icon";
import cn from "classnames";

gsap.registerPlugin(ScrollTrigger);

const Skill = forwardRef((props, ref) => {
  const listRef = useRef(null);
  const wrapRef = useRef(null);
  const [active, setActive] = useState(0);

  // const tl = useRef(null);

  useGSAP(() => {
    const steps = props.data.length - 1; // 예: 5
    const stepDeg = 10; // 단계별 회전각

    ScrollTrigger.create({
      trigger: wrapRef.current,
      start: "top top",
      end: "bottom-=10% bottom",
      onUpdate: (self) => {
        const progress = self.progress;
        const currentStep = Math.floor(progress * steps);
        gsap.to(listRef.current, {
          rotate: -stepDeg * currentStep,
          duration: 0.4,
        });

        setActive(currentStep);
      },
    });
  });

  console.log(props.data, props.data.length);
  return (
    <section className={cn("skill", props.className)} ref={ref}>
      <div className="skill__wrap" ref={wrapRef}>
        <div className="skill__sticky">
          <div className="skill-list">
            <strong className="skill-list__tit">Skill</strong>
            <ul className="skill-list__list" ref={listRef}>
              {props.data.map((item, num) => {
                return (
                  <li className="skill-list__item" key={num}>
                    <div
                      className={cn("skill-item", {
                        "skill-item--active": num === active,
                      })}
                    >
                      <SparkleIco
                        className="skill-item__ico"
                        color={num == active ? "0980e3" : "222222"}
                      />
                      <span className="skill-item__num">
                        {num + 1 < 10 && 0}
                        {num + 1}
                      </span>
                      <div className="skill-item__box">
                        <div className="skill-item__img-cont">
                          <img
                            src={item.img}
                            alt={`${item.name} 로고`}
                            className="skill-item__img"
                          />
                        </div>
                        <div className="skill-item__txt">
                          {item.sub && (
                            <span className="skill-item__sub">{item.sub}</span>
                          )}
                          <span className="skill-item__tit">{item.name}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Skill;
