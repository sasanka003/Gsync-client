import React from "react";
import Image from "next/image";

interface ProfilePictureProps {
  name: string;
  imageUrl?: string;
  className?: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({
  name,
  imageUrl,
  className = "",
}) => {
  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <div
      className={`relative w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 ${className}`}
    >
      {imageUrl ? (
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
      ) : (
        <span className="text-lg font-semibold text-gray-700">
          {firstLetter}
        </span>
      )}
    </div>
  );
};

export default ProfilePicture;
