import React from "react";

interface NavLinkProps {
  label: string;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ label, isActive = false }) => {
  return (
    <div className={`flex justify-center items-center gap-2.5 relative p-2.5`}>
      <div
        className={`text-[#444] text-base ${
          isActive ? "font-bold" : "font-normal"
        } leading-[14px]`}
      >
        {label}
      </div>
      {isActive && (
        <div className="absolute flex gap-[3px] left-3 top-[34.5px]">
          <div className="w-1.5 h-[3px] bg-[#FFCF49] rounded-sm" />
          <div className="w-[23px] h-[3px] bg-[#FFCF49] rounded-sm" />
        </div>
      )}
    </div>
  );
};

const NavLinks: React.FC = () => {
  return (
    <nav className="flex w-full justify-center items-start gap-1 max-sm:hidden">
      <NavLink label="Home" />
      <NavLink label="Campaigns" isActive={true} />
      <NavLink label="Sites" />
    </nav>
  );
};

export default NavLinks;
