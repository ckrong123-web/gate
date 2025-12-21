"use client";

import { useEffect } from "react";
import cn from "classnames";
import { usePopupContext } from "@/context/PopupProvider";

export default function PopupRoot() {
  const { popupList } = usePopupContext();

  useEffect(() => {
    popupList.length > 0
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [popupList]);

  return (
    <div
      className={cn("pop", {
        "pop--dimm": popupList.length > 0,
      })}
    >
      <div id="popup-root" />
    </div>
  );
}
