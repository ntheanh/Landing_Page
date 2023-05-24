import { BsSunFill } from "react-icons/bs";
const NavBar = () => {
  return (
    <nav>
      <div className="flex items-center">
        <div>
          <div className="flex items-center mr-2">NerdCard</div>
          <BsSunFill />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
