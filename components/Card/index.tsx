import Image from "next/image";
import EventImage from "./event.jpg";
import FireImage from "./fire.png";
import { MdOutlineAccessTime, MdAlternateEmail } from "react-icons/md";

export const Card = () => (
  <div className="flex h-[250px] w-[240px] flex-col items-center justify-center rounded-3xl border-b border-accent-500">
    <div className="h-full w-full rounded-t-3xl">
      <div className="relative h-full w-full rounded-t-3xl border-accent-200 bg-white">
        <div className="absolute right-[-15px] z-20 h-full w-9 bg-opacity-20">
          <div className="flex h-full w-full flex-col items-center">
            <div className="relative h-12 w-12">
              <Image src={FireImage} alt="fire" fill={true} />
            </div>
            <div className="relative h-12 w-12">
              <Image src={FireImage} alt="fire" fill={true} />
            </div>
            <div className="relative h-12 w-12">
              <Image src={FireImage} alt="fire" fill={true} />
            </div>
          </div>
        </div>
        <div className=" absolute bottom-0 left-0 z-10 h-full w-[240px] bg-gradient-to-b from-transparent from-20% to-bg-400 to-90%">
          <div className="flex h-full w-full flex-col items-center justify-end px-3 pb-2">
            <span className="text-center text-xl font-bold text-white drop-shadow-title-card">
              Fiesta de Taylor 2021 todos invitados
            </span>
          </div>
        </div>
        <Image
          alt="event"
          src={EventImage}
          fill={true}
          style={{ objectFit: "cover", borderRadius: "24px" }}
        />
      </div>
    </div>
    <div className="flex h-[46px] w-full flex-col items-center justify-center self-center rounded-b-3xl border-t border-primary-800 border-opacity-30 bg-bg-400">
      <div className="flex flex-1 items-center justify-center gap-8">
        <div className="flex h-full w-full flex-1 items-center justify-end gap-1">
          <div className="flex items-center gap-[2px]">
            <MdAlternateEmail className="text-primary-700" />
            &nbsp;
            <span className="font-semibold text-accent-200 ">taylorswift</span>
          </div>
        </div>
        <div className="flex h-full w-full flex-1 items-center justify-start ">
          <div className="flex items-center gap-[2px]">
            <MdOutlineAccessTime className="text-primary-700" />
            &nbsp;
            <span className="font-semibold text-primary-300 ">
              <b>2</b> días
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
