import { useRef, useEffect, useState } from "react";

export default function Header({ data, activeIndex, clickEvt }) {
  const itemRefs = useRef([]);
  const lineRef = useRef();

  const [lineX, setLineX] = useState(0);

  // const
  useEffect(() => {
    const activeItem = itemRefs.current[activeIndex];
    setLineX(activeItem.offsetLeft);
  }, [activeIndex]);

  return (
    <header className="header">
      <div className="header__wrap">
        <h1 className="header__txt">PORTFOLIO</h1>
        <div className="header__list">
          <ul className="header-list">
            {data.map((item, index) => {
              return (
                <li
                  className="header-list__item"
                  key={index}
                  ref={(item) => {
                    itemRefs.current[index] = item;
                  }}
                >
                  <button
                    className="header-list__btn"
                    onClick={() => clickEvt(index)}
                  >
                    {item.txt}
                  </button>
                </li>
              );
            })}
          </ul>
          <span
            className="header-list__line"
            style={{ left: `${lineX}px` }}
            ref={lineRef}
          />
        </div>
      </div>
    </header>
  );
}
