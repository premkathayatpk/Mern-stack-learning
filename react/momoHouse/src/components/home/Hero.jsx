import { useNavigate } from "react-router-dom";
import c from "../../assets/c.png";
import Frame from "../../assets/Frame.png";
import oneBg from "../../assets/oneBg.png";

import { CgArrowRight } from "react-icons/cg";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="  bg-white  min-h-[90vh] flex flex-wrap justify-end gap-2">
      <div className="     space-y-5 h-96 mr-44 p-4 mt-14 ">
        <p> RESTAURANT</p>

        <h1 className="text-4xl font-bold  ">
          {" "}
          The{" "}
          <span
            style={{
              backgroundImage: ` url(${oneBg})`,
              backgroundSize: "160px",
            }}
            className="bg-no-repeat  text-center bg-center text-white  w-40 p-4 inline-block   "
          >
            #One
          </span>{" "}
        </h1>
        <h1 className="text-4xl font-bold  ">
          Momo <span className="text-[#D95103]"> Restaurant</span>{" "}
        </h1>
        <p className="font-semibold  text-xl  ">
          {" "}
          More than <span className="text-[#D95103]"> 20+ Varieties</span> of
          momo available for you{" "}
        </p>

        <button
          onClick={() => {
            navigate("/menu");
          }}
          className="border flex items-center justify-center p-4 gap-2  text-white bg-[#0C6967]  rounded-4xl hover:bg-green-800  "
        >
          {" "}
          Explore Food Menu
          <CgArrowRight />
        </button>
      </div>
      <div className="   image w-125 flex justify-end items-center  relative  overflow-hidden">
        <img className="w-w-[300px] h-150 -top-14  absolute  " src={c} alt="" />
        <img className="w-75  absolute top-30 right-30   " src={Frame} alt="" />
      </div>
    </section>
  );
}

export default Hero;
