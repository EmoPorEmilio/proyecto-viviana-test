import Image from "next/image";
import AvatarSRC from "./avatar.jpg";

export enum AvatarSizes {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

interface AvatarProps {
  size: AvatarSizes;
}

export const Avatar = ({ size = AvatarSizes.Small }: AvatarProps) => {
  const smallSize = "h-20 w-20";
  const mediumSize = "h-32 w-32";
  const largeSize = "h-48 w-48";
  const avatarSize = () => {
    switch (size) {
      case AvatarSizes.Small:
        return smallSize;
      case AvatarSizes.Medium:
        return mediumSize;
      case AvatarSizes.Large:
        return largeSize;
    }
  };
  return (
    <div
      className={`relative ${avatarSize()} overflow-hidden  rounded-full border-2 border-accent-200`}
    >
      <Image alt="avatar" src={AvatarSRC} fill={true} />
    </div>
  );
};
