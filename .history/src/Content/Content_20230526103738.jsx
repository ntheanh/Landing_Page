import Checkpoint from "../../src/assets/mobile/checkpoint.svg";
import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import { useSpring, animated } from "@react-spring/web";

const Content = () => {
  const customer = useSpring({ customers: 10423, from: { customers: 0 } });
  const card = useSpring({ cards: 12941, from: { cards: 0 } });

  return (
    <section className="flex flex-row">
      <div className="ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b shadow-md from-white/50 rounded-[12px] to-transparent md:w-[20%]">
        <div className="mt-16 gap-8 flex items-start">
          <FaUser size={"22px"} className="mt-[12px]" />
          <p className="text-26">
            <animated.div>
              {customer.customers.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold mb-[36px]">Customer</p>
          </p>
        </div>
        <div className="flex items-start gap-8 ">
          <BsFillCreditCardFill size={"22px"} className="mt-[12px]" />
          <p className="text-26">
            <animated.div>
              {card.cards.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold mb-[36px]">Cards Issued</p>
          </p>
        </div>
      </div>

      <div className="text-13 flex flex-col w-[100%] mt-[90px] font-semibold md:w-[30%] md:ml-[20%] md:text-16">
        <p className="check-content">
          <img src={Checkpoint} alt="" />
          Card reports sent to your phone every weeks
        </p>
        <p className="check-content">
          <img src={Checkpoint} alt="" />
          Card reports sent to your phone every weeks
        </p>
        <p className="check-content">
          <img src={Checkpoint} alt="" />
          Card reports sent to your phone every weeks
        </p>
      </div>
    </section>
  );
};

export default Content;
