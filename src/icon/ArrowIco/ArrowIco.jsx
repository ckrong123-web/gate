import Icon from "@/assets/img/icon/arrow.svg?react";
import cn from "classnames";

export default function ArrowIco({ color = "222222", className }) {
  return (
    <i className={cn("icon", className)}>
      <Icon style={{ color }} />
    </i>
  );
}
