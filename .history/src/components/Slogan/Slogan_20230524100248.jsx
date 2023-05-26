import Card from "../../assets/desktop/isocard.svg";
const Slogan = () => {
  return (
    <section className="text-36 my-14 font-extrabold">
      <div className="text-center">
        <p className="">
          EARN <span className="text-purple-300">MORE</span>
        </p>
        <p className="">PAY LESS </p>
        <button className="text-20 px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded-[12px] hover:bg-pink-500 transition-all duration-300">
          START
        </button>
        <div>
          <img src="{Card}" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Slogan;
