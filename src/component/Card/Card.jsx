import { SparkleIco, ArrowIco } from "@/icon";
import cn from "classnames";

export default function Card({
  className,
  num,
  tit,
  img,
  tag,
  year,
  children,
  href = "#",
}) {
  return (
    <div className={cn("card", className)}>
      <div className="card__wrap">
        <div className="card__title">
          <span className="card__num">
            {num < 10 && 0}
            {num}
          </span>
          <span className="card__tit">
            Project
            <br />
            {tit}
            <span className="card__ico-box">
              <SparkleIco className="card__ico" />
            </span>
          </span>
        </div>
        <div className="card__img-box">
          {href ? (
            <a href={href}>
              <img src={img} alt={`${tit} 이미지`} className="card__img" />

              <span className="card__arrow">
                <ArrowIco className="card__arrow-ico" />
                <span className="hidden">링크로 이동</span>
              </span>
            </a>
          ) : (
            <img src={img} alt={`${tit} 이미지`} className="card__img" />
          )}
        </div>
        <div className="card__txt-box">
          <div className="card__txt-top">
            <span className="card__tag">{tag}</span>
            <span className="card__year">{year}</span>
          </div>
          <span className="card__desc">{children}</span>
        </div>
      </div>
    </div>
  );
}
