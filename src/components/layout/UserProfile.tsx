import React from "react";

interface UserProfileProps {
  name: string;
  avatarUrl?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  avatarUrl = "https://i.pravatar.cc/35",
}) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <div className="flex items-center">
        <img
          src={avatarUrl}
          alt={`${name}'s avatar`}
          className="w-[35px] h-[35px] rounded-full"
        />
        <span className="ml-4 text-[#1D1D1D] font-semibold text-[15px]">
          {name}
        </span>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-4 opacity-85"
        >
          <path
            d="M1.123 0.667L5.562 5.8167L10 0.667"
            stroke="#1D1D1D"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default UserProfile;
