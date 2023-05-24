import { BsSunFill } from "react-icons/bs";
const NavBar = () => {
  return (
    <nav>
      <div className="flex items-center">
        <div className="flex items-center mr-2">NerdCard</div>
        <BsSunFill />
      </div>
    </nav>
  );
};

export default NavBar;
