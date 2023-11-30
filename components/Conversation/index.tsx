import Avatar from "@/components/Avatar";

const Conversation = () => (
  <div className="flex h-[100px] w-[500px] items-center rounded-s-xl p-2">
    <Avatar />
    <div className="flex h-full flex-1 flex-col pl-3">
      <div className="flex flex-1 rounded-t-xl bg-primary-600 pt-5 ">
        <div className="flex flex-1 rounded-t-xl bg-primary-800  "></div>
      </div>
      <div className="flex flex-1"></div>
    </div>
  </div>
);

export default Conversation;
