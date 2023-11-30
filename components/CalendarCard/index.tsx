import Image from "next/image";
import EventSrc from "./event.jpg";

const CalendarCard = () => (
  <div className="flex h-[100px] w-[500px] items-center rounded-xl border-b-2 border-accent-500 bg-bg-300 p-2">
    <div className="relative h-[80px] w-[80px] overflow-hidden rounded-xl border-2 border-accent-200">
      <Image src={EventSrc} alt="calendar" fill={true} />
    </div>
    <div className="flex h-full flex-1 flex-col pl-3">
      <div className="flex flex-1 rounded-t-xl bg-primary-600 pt-5 ">
        <div className="flex flex-1 rounded-t-xl bg-primary-800  "></div>
      </div>
      <div className="flex flex-1"></div>
    </div>
  </div>
);

export default CalendarCard;
