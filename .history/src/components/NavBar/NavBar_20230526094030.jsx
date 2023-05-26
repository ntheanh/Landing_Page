import { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
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
            <MdClose
              size={"24px"}
              className="cursor-pointer"
              onClick={handleMenu}
            />
          ) : (
            <HiOutlineMenu
              size={"24px"}
              className="cursor-pointer"
              onClick={handleMenu}
            />
          )}
          {openMenu && (
            <div className="absolute bg-white right-8 p-8 text-black text-13 text-center">
              <li>Features</li>
              <li>Menu</li>
              <li>Our</li>
              <li>Contact</li>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
