import { sen } from "@/components/fonts";
import { Chip, ChipType } from "@/components/Chip";
import { Avatar, AvatarSizes } from "../Avatar";

const ProfileHead = () => (
  <div className="flex h-[220px] flex-col md:w-[540px]">
    <div className="relative left-[-8px] top-9">
      <div className="flex items-start">
        <Avatar size={AvatarSizes.Medium} />
        <span className="block h-min bg-gradient-to-b from-primary-100 to-primary-500	bg-clip-text text-4xl font-extrabold text-transparent">
          EmoPorEmilio
        </span>
      </div>
    </div>
    <div className="flex h-[50px] flex-col justify-end rounded-t-[26px] bg-primary-800 md:w-[500px] ">
      <div className="flex h-[40px] flex-col justify-end rounded-t-[30px] bg-primary-600">
        <div className="flex h-[20px] items-center justify-end rounded-t-[100px] bg-primary-700 pr-4">
          <div className="flex gap-1 text-base font-light text-gray-900">
            <span className="font-black text-primary-200 drop-shadow-title-card">
              100
            </span>
            <span>seguidos</span>
            <span className="pl-2 font-black text-primary-200 drop-shadow-title-card">
              49
            </span>
            <span>siguiendo</span>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-1 flex h-[120px] flex-col rounded-b-[26px] rounded-t-lg border-b border-accent-500 bg-bg-300 md:w-[500px]">
      <div className="flex flex-1 flex-col p-4">
        <span className={`${sen.className} text-lg text-gray-100`}>
          Esto es un test de texto! Esto es un test de texto!
        </span>
        <div className="flex flex-1 flex-row items-end justify-center gap-5 py-5"></div>
      </div>
    </div>
    <div className="relative bottom-4 right-4 md:w-[500px]">
      <div className="flex flex-row justify-end gap-2 pr-4">
        <Chip type={ChipType.Primary} text="Fiesta" />
      </div>
    </div>
  </div>
);

export default ProfileHead;
