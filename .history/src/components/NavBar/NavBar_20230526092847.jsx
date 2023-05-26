import { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io";
const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav>
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="text-20 mr-2 font-bold">NerdCard</div>
          <BsSunFill
            className="cursor-pointer"
            size={"24px"}
            color={"#e9c46a"}
          />
        </div>
        <ul className="ml-auto text-16 font-semibold ">
          {openMenu ? (
            <IoCloseSharp />
          ) : (
            <HiOutlineMenu
              size={"24px"}
              className="cursor-pointer"
              onClick={handleMenu}
            />
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
