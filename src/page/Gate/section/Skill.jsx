import { SparkleIco } from "@/icon";
import cn from "classnames";

export default function Skill({ data }) {
  const active = 0;
  return (
    <section className="skill">
      <div className="skill__wrap">
        <div className="skill-list">
          <strong className="skill-list__tit">Skill</strong>
          <ul className="skill-list__list">
            {data.map((item, num) => {
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
    </section>
  );
}
