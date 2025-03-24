import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NotificationBadge from "../ui/NotificationBadge";
import SearchButton from "./SearchButton";
import UserProfile from "./UserProfile";
import MobileMenu from "./MobileMenu";

const Navbar: React.FC = () => {
  return (
    <header className="flex w-full items-center gap-[29px] bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] h-[89px] px-[30px] py-[22px] max-md:px-6 max-md:py-4 max-sm:px-4 max-sm:py-3">
      <div className="flex-shrink-0">
        <Logo />
      </div>

      <div className="flex items-center gap-1.5 flex-1">
        <NavLinks />
        <MobileMenu />
      </div>

      <div className="flex items-center gap-7">
        <div className="flex items-center gap-3.5">
          <NotificationBadge count={3} />
          <SearchButton />
        </div>
        <UserProfile name="Vikram Doss" />
      </div>
    </header>
  );
};

export default Navbar;
