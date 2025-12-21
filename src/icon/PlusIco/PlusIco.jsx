import Icon from "@/assets/img/icon/plus.svg?react";
import cn from "classnames";

export default function PlusIco({ color = "222222", className }) {
  return (
    <i className={cn("icon", className)}>
      <Icon style={{ color }} />
    </i>
  );
}
