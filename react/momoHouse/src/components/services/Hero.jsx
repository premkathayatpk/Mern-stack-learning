import chef2 from "../../assets/chef2.png";

const Hero = () => {
  return (
    <section>
      <div className=" flex gap-30  h-190.75 ">
        <div className="w-180 ">
          <h1 className=" text-[#0C6967] mt-50 ml-39 h-19.25  font-Allura text-[64px] ">
            Our Services
          </h1>
          <div className=" h-46.25  ml-39 mt-20  ">
            <p className="text-[24px] text-[#6B788E] ">AT OUR RESTAURANT</p>
            <p className="text-[30px] font-bold text-[#101828] ">
              We use only the freshest and highest quality ingredients in all
              our dishes,{" "}
              <span className="text-[#D95103] ">
                and offer transparency in our ingredient labeling.
              </span>
            </p>
          </div>
        </div>

        <div className=" flex justify-center items-end  mt-30 w-155 h-157.75  ">
          <div className="  flex justify-center items-end h-148 w-114  rounded-b-full overflow-hidden">
            <div className="   flex  items-end   bg-[#0c6967] h-114 w-114 rounded-full p-0  ">
              <img className="h-148    " src={chef2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
