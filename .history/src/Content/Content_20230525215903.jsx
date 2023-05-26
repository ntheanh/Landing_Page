import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
const Content = () => {
  return (
    <section>
      <div className="ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b shadow-md from-white/50 rounded-[12px] to-transparent">
        <div className="mt-16 gap-8 flex items-start">
          <FaUser size={"22px"} className="mt-[12px] " />
          <p className="text-26">
            10423
            <p className="text-13 font-semibold mb-[36px]">Customer</p>
          </p>
        </div>
        <div className="flex">
          <BsFillCreditCardFill />
          <p className="text-26">
            12941
            <p className="text-13 font-semibold mb-[36px]">Cards Issued</p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
