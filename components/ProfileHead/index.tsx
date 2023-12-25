import { sen } from "@/app/fonts";
import { Button, ButtonType } from "@/components/Button";
import { Chip, ChipType } from "@/components/Chip";

const ProfileHead = () => (
  <div className="flex h-[380px] flex-col md:w-[540px]">
    <span className="relative left-8 top-4 bg-gradient-to-b from-primary-100 to-primary-500	bg-clip-text text-4xl font-extrabold text-transparent">
      main.rs
    </span>
    <div className="flex h-[50px] flex-col justify-end rounded-t-[26px] bg-primary-800 md:w-[500px] ">
      <div className="flex h-[40px] flex-col justify-end rounded-t-[30px] bg-primary-600">
        <div className="flex h-[20px] items-center justify-end rounded-t-[100px] bg-primary-700 pr-4">
          <span className="font-regular text-base text-primary-300">
            Emo - 16/4/22
          </span>
        </div>
      </div>
    </div>
    <div className="mt-1 flex h-[300px] flex-col rounded-b-[26px] rounded-t-lg border-b border-accent-500 bg-bg-300 md:w-[500px]">
      <div className="flex flex-1 flex-col p-4">
        <span className={`${sen.className} text-lg text-gray-100`}>
          Esto es un test de texto! Esto es un test de texto!
        </span>
        <div className="flex flex-1 flex-row items-end justify-center gap-5 py-5">
          <Button
            type={ButtonType.Secondary}
            onClick={() => {
              console.log("test1");
            }}
          >
            <span className="w-auto">SALÍ DE ACÁ</span>
          </Button>
          <Button
            type={ButtonType.Primary}
            onClick={() => {
              console.log("test1");
            }}
          >
            ME INTERESA
          </Button>
        </div>
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
