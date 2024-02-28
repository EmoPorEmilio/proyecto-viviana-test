import { Icon } from "@/components/Icon";
import { MdFavorite } from "react-icons/md";
import { IconType } from "../types";
import { Avatar } from "@/components/Avatar";
import { sen, jost } from "@/components/fonts";

const TimelineItem = () => {
  return (
    <div className="inline-flex w-auto flex-col gap-5 rounded-2xl border border-primary-700 bg-bg-200 p-5 hover:bg-bg-300">
      <div className="flex items-center justify-around gap-3">
        <Avatar />
        <Icon icon={MdFavorite} type={IconType.FULL} size="30px" />
        <Avatar />
      </div>
      <div className="flex items-center justify-center gap-3 text-center">
        <span className={`${sen.className} font-light text-primary-300`}>
          <span className={`${jost.className} font-semibold text-accent-200`}>
            emoporemilio
          </span>{" "}
          ha empezado a seguir a{" "}
          <span className={`${jost.className}  font-semibold text-accent-200`}>
            taylorswift
          </span>
        </span>
      </div>
    </div>
  );
};

export default TimelineItem;
