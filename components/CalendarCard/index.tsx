import Image from "next/image";
import EventSrc from "./event.jpg";
import { Chip, ChipType } from "@/components/Chip";

const CalendarCard = () => (
  <div className="flex h-[100px] w-[500px] items-center rounded-xl border border-primary-600 border-b-accent-500 bg-bg-300 p-2">
    <div className="relative h-[80px] w-[80px] overflow-hidden rounded-xl border-2 border-accent-200">
      <Image src={EventSrc} alt="calendar" fill={true} />
    </div>
    <div className="relative h-full flex-1 flex-col pl-3">
      <div className="absolute bottom-[-20px] h-[30px] w-full">
        <div className="flex h-full w-full flex-1 justify-end">
          <Chip text="Fiesta" type={ChipType.Primary}></Chip>
        </div>
      </div>
      <div className="flex-10 flex h-full flex-col items-end justify-center pb-3 pr-5">
        <div className="flex flex-1">
          <span className="text-lg font-semibold text-white drop-shadow-title-card">
            Eventos de Taylor todo 2023
          </span>
        </div>
        <div className="flex flex-1">
          <span className="text-base font-normal text-primary-500">
            seguida por <span className="text-accent-200">taylorswift</span>,
            <span className="text-accent-200"> emoporemilio </span> y
            <span className="text-accent-200"> 2 más</span>
          </span>
        </div>
      </div>
      <div className="flex flex-1"></div>
    </div>
  </div>
);

export default CalendarCard;
