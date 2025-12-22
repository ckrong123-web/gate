import { SparkleIco, ArrowIco, PlusIco } from "@/icon";
import cn from "classnames";

export default function Card({
  className,
  num,
  tit,
  img,
  tag,
  year,
  children,
  isClose,
  onClick,
  isSubPage,
  href = "#",
}) {
  const ImgCont = (
    <>
      <img src={img} alt={`${tit} 이미지`} className="card__img" />

      {!isClose && href && (
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
            {!isSubPage && (
              <>
                Project
                <br />
              </>
            )}
            {tit}
            <span className="card__ico-box">
              <SparkleIco className="card__ico" />
            </span>
          </span>
        </div>
        <div className="card__img-box">
          {href ? (
            <a href={href}>{ImgCont}</a>
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
            <span className="card__year">{year}</span>
          </div>
          <span className="card__desc">{children}</span>
        </div>
      </div>
    </div>
  );
}
