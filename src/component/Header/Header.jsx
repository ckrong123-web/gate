import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import cn from "classnames";

import useDeviceBreakpoint from "@/hook/useDeviceBreakpoint";

export default function Header({ data, activeIndex, clickEvt }) {
  const itemRefs = useRef([]);
  const lineRef = useRef();

  const { isMobile, isTablet } = useDeviceBreakpoint();

  const [lineX, setLineX] = useState(0);
  const [open, setOpen] = useState(false);

  // const
  useEffect(() => {
    const activeItem = itemRefs.current[activeIndex];
    if (!isMobile) {
      setLineX(activeItem.offsetLeft);
    }
  }, [activeIndex, isMobile, isTablet]);

  useEffect(() => {
    if (!isMobile) {
      setOpen(false);
    }
  }, [isMobile]);

  const toggleEvt = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header__wrap">
        <h1 className="header__txt">PORTFOLIO</h1>
        <div className="header__list">
          <AnimatePresence>
            {(!isMobile || open) && (
              <motion.ul
                className={cn("header-list", {
                  "header-list--open": isMobile & open,
                })}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {data.map((item, index) => {
                  return (
                    <li
                      className={cn("header-list__item", {
                        "header-list__item--active": activeIndex === index,
                      })}
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
              </motion.ul>
            )}
          </AnimatePresence>
          {!isMobile ? (
            <motion.span
              className="header-list__line"
              style={{ left: `${lineX}px` }}
              ref={lineRef}
            />
          ) : (
            <button
              className={cn("header-list__hamburger", {
                "header-list__hamburger--open": open,
              })}
              onClick={() => toggleEvt()}
            >
              <span className="header-list__hamburger-line" />
              <span className="hidden">메뉴</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
