import { BsSunFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
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
        <ul className="ml-auto text-16 font-semibold cursor-pointer">
          <HiOutlineMenu size={"24px"} />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
