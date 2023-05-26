import { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
const NavBar = (props) => {
  const { isMobile } = props;
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
        <ul className="md:flex md:gap-8 ml-auto text-16 font-semibold ">
          {openMenu && isMobile ? (
            <MdClose
              size={"24px"}
              className="cursor-pointer"
              onClick={handleMenu}
            />
          ) : !openMenu && isMobile ? (
            <HiOutlineMenu
              size={"24px"}
              className="cursor-pointer"
              onClick={handleMenu}
            />
          ) : (
            <>
              <li className="hover:bg-purple-500 cursor-pointer transition-all duration-200n">
                Features
              </li>
              <li>Menu</li>
              <li>Our</li>
              <li>Contact</li>
            </>
          )}
          {openMenu && (
            <div className="absolute bg-white right-8 p-8 text-black text-13 text-center ">
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
