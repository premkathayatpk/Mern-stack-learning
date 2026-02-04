import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";

const Main = () => {
  return (
    <section className="h-146.25 bg-white flex flex-col gap-10 items-center pt-20 ">
      <h1 className="text-[#0C6967] text-6xl font-Allura ">Our Contact</h1>
      <div className="text-center space-y-3 ">
        <p className="text-[#6B788E] text-xl ">GET IN TOUCH</p>
        <p className="text-2xl font-bold  ">
          <span className="text-[#D95103] "> Our Friendly Team </span> would
          love to hear form you
        </p>
      </div>
      <div className="flex gap-5 flex-wrap">
        <div className=" w-80 p-8 py-12 space-y-1 shadow-2xl rounded-2xl ">
          <h3 className="text-xl font-semibold pb-4 flex items-center gap-2 ">
            <FaLocationDot size={25} className="text-[#D95103]" />
            LOCATION{" "}
          </h3>
          <p className="italic text-xl ">
            New Baneshwor -4121, Kathmandu, Bagmati, Nepal
          </p>
        </div>
        <div className=" w-80 p-8 py-12 space-y-1 shadow-2xl rounded-2xl ">
          <h1 className="text-xl font-semibold pb-4  flex items-center gap-2 ">
            <FaPhoneVolume size={25} className="text-[#D95103]" />
            PHONE
          </h1>
          <div className="flex justify-between">
            <p className="text-[#0C6967] font-semibold  ">Mobile:</p>
            <p className="italic ">
              (+977) 980 5689789
              <br />
              (+977) 9841 275897
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#0C6967] font-semibold ">Tel: </p>
            <p className="italic "> 01-4783972</p>
          </div>
        </div>
        <div className=" w-80 p-8 py-12 space-y-1 shadow-2xl rounded-2xl ">
          <h1 className="text-xl font-semibold pb-4 flex items-center gap-2 ">
            <MdAccessTimeFilled size={25} className="text-[#D95103]" />
            SERVICE TIME
          </h1>

          <div className="flex justify-between">
            <p className="text-[#0C6967] font-semibold ">MON - FRI </p>
            <p className="italic "> 8 am - 8 pm</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#0C6967] font-semibold ">SAT - SUN </p>
            <p className="italic "> Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
