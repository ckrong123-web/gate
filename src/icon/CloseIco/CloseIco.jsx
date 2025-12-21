import Icon from "@/assets/img/icon/close.svg?react";
import cn from "classnames";

export default function CloseIco({ color = "222222", className }) {
  return (
    <i className={cn("icon", className)}>
      <Icon style={{ color }} />
    </i>
  );
}
