import { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import useDarkMode from "../../useDarkMode";
const NavBar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { isMobile } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav>
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="text-20 mr-2 font-bold">NerdCard</div>
          {isDarkMode > (
            <BsSunFill
              className="cursor-pointer"
              size={"24px"}
              color={"#e9c46a"}
              onClick={() => toggleDarkMode(!isDarkMode)}
            />
          ):(
            <FaMoon
            className="cursor-pointer"
            size={"24px"}
            color={"#e9c46a"}
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
          )}
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
              <li className="hover-btn">Features</li>
              <li className="hover-btn">Menu</li>
              <li className="hover-btn">Our</li>
              <li className="hover-btn">Contact</li>
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
