import { BsSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/bs";
const NavBar = () => {
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
        <div>
          <GiHamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
