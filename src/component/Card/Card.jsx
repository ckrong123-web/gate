import { SparkleIco, ArrowIco, PlusIco } from "@/icon";
import cn from "classnames";
import { span } from "motion/react-client";

export default function Card({
  className,
  num,
  tit,
  img,
  tag,
  year,
  children,
  isClose,
  isInternal,
  percent,
  onClick,
  href,
}) {
  const ImgCont = (
    <>
      <img src={img} alt={`${tit} 이미지`} className="card__img" />

      {!isClose && !isInternal && href && (
        <span className="card__arrow">
          <ArrowIco className="card__arrow-ico" />
          <span className="hidden">링크로 이동</span>
        </span>
      )}
      {onClick && (
        <span className="card__arrow">
          <PlusIco className="card__arrow-ico" />
          <span className="hidden">팝업 열기</span>
        </span>
      )}
      {isClose && <span className="card__dimm">Not Live</span>}
      {isInternal && <span className="card__dimm">내부용 시스템입니다.</span>}
    </>
  );

  return (
    <div className={cn("card", className)}>
      <div className="card__wrap">
        <div className="card__title">
          <span className="card__num">
            {num < 10 && 0}
            {num}
          </span>
          <span className="card__tit">
            {tit}
            <span className="card__ico-box">
              <SparkleIco className="card__ico" />
            </span>
          </span>
        </div>
        <div className="card__img-box">
          {href ? (
            <a href={href} target="_blank">
              {ImgCont}
            </a>
          ) : onClick ? (
            <button
              onClick={() => {
                onClick();
              }}
            >
              {ImgCont}
            </button>
          ) : (
            ImgCont
          )}
        </div>
        <div className="card__txt-box">
          <div className="card__txt-top">
            <span className="card__tag">{tag}</span>
            {year && <span className="card__year">{year}</span>}
          </div>
          <div className="card__desc">
            {percent && (
              <strong className="card__desc-item">
                퍼블리싱 참여도 :{" "}
                <em className="card__desc-percent">{percent}</em>
              </strong>
            )}
            <p className="card__desc-item">{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
