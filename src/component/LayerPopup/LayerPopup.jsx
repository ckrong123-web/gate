import { useState, useEffect } from "react";
import cn from "classnames";
import { createPortal } from "react-dom";
import { usePopupContext } from "@/context/PopupProvider";
import { useLayerPopup } from "@/hook/useLayerPopup";
import { AnimatePresence, motion } from "motion/react";
import { CloseIco, ArrowIco } from "@/icon";
import { div } from "motion/react-client";

export default function LayerPopup({
  id,
  img,
  title,
  className,
  children,
  href,
}) {
  const { popupList } = usePopupContext();
  const [isOpen, setOpen] = useState(false);

  const [popRoot, setPopRoot] = useState(null);
  const { onClose } = useLayerPopup();

  useEffect(() => {
    const inPopup = popupList.includes(id);

    setOpen(inPopup);
  }, [popupList]);

  useEffect(() => {
    setPopRoot(document.getElementById("popup-root"));
  }, []);
  return (
    <>
      {popRoot
        ? createPortal(
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={cn(`popup`, className)}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <div className={cn(`popup__wrap`)}>
                    <div className={cn(`popup__head`)}>
                      <button
                        className={cn(`popup__btn`)}
                        onClick={() => {
                          onClose(id);
                        }}
                      >
                        <CloseIco />
                      </button>
                    </div>
                    <div
                      className={cn(
                        `popup__body`,
                        img && !title && !children && `popup__body--onlyImg`
                      )}
                    >
                      <div className="popup__body-wrap">
                        {title && <span className="popup__title">{title}</span>}
                        {img && <img className="popup__img" src={img} alt="" />}
                        {children && children}
                      </div>
                      {href && (
                        <div className="popup__link-wrap">
                          <a href={href} className="popup__link">
                            Go Site
                            <ArrowIco className="popup__link-ico" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>,
            popRoot
          )
        : null}
    </>
  );
}
