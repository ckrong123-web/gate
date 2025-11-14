import Icon from "@/assets/img/icon/sparkle.svg?react";
import cn from "classnames";

export default function SparkleIco({ color = "0980e3", className }) {
  return (
    <i className={cn("icon", className)}>
      <Icon style={{ color }} />
    </i>
  );
}
