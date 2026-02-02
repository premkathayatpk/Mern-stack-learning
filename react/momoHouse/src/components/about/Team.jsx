import headChef from "../../assets/headChef.png";
import assistChef1 from "../../assets/assistChef1.png";
import assistChef2 from "../../assets/assistChef2.png";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const Team = () => {
  return (
    <section>
      <div className=" h-224.25 px-39 py-20 text-center ">
        <div className=" w-190 space-y-2">
          <h1 className="text-[49px] font-bold">
            Meet The <span className="text-[#D95103] ">Team</span>
          </h1>
          <p className="text-[25px] text-[#0C6967] font-bold ">
            Our talented team members who delivers only the best results
          </p>
        </div>
        <div className="w-282 h-128 flex justify-between gap-6 mt-10 ">
          <div className="h-128 w-90 ">
            <img src={headChef} alt="Head Chef" />
            <h3 className="text-[31px] font-bold text-white -mt-17.5 bg-black">
              Head Chef
            </h3>
          </div>
          <div className="h-128 w-90  ">
            <img src={assistChef1} alt="Assistant Chef" />
            <h3 className="text-[31px] font-bold text-white -mt-17.5 bg-black">
              Assistant Chef
            </h3>
          </div>
          <div className="h-128 w-90 ">
            <img src={assistChef2} alt="Assistant Chef" />
            <h3 className="text-[31px] font-bold text-white -mt-17.5 bg-black">
              Assistant Chef
            </h3>
          </div>
        </div>
        <div className="flex justify-between mt-10 w-282 text-[24px] font-bold ">
          <p>
            01<span className="text-[#C2C7D0] ">/05</span>
          </p>
          <p className="flex text-3xl gap-1 ">
            <FaArrowLeft className="border p-1 border-gray-400  rounded-full" />
            <FaArrowRight className="border p-1 border-gray-400  rounded-full" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
