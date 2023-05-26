import { FaUser } from "react-icons/fa";
const Content = () => {
  return (
    <section>
      <div className="ml-[70px] mr-[54px] bg-purple-400 flex ">
        <div className="mt-16 gap-8 flex items-start">
          <FaUser size={"22px"} className="mt-[12px]" />
          <p className="text-26">
            10423
            <p className="text-13 font-semibold mb-[36px]">Customer</p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
