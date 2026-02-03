import chef2 from "../../assets/chef2.png";

const Hero = () => {
  return (
    <section className=" flex gap-30  h-190.75 ">
      <div className="w-180 mt-40">
        <h1 className=" text-[#0C6967]  ml-39 h-19.25  font-Allura text-[64px] ">
          Our Services
        </h1>
        <div className=" h-46.25  ml-39 mt-15 space-y-5 ">
          <p className="text-[24px] text-[#6B788E]  ">
            KNOWING OUR CUSTOMERS NEEDS
          </p>
          <p className="text-[30px] font-bold text-[#101828] ">
            <p className="text-[#D95103] ">We're more than just momos.</p>
            <p>We're a full-service dining experience.</p>
          </p>
        </div>
      </div>

      <div className=" flex justify-center items-end  w-155 h-157.75  ">
        <div className="  flex justify-center items-end h-148 w-114  rounded-b-full overflow-hidden">
          <div className="   flex  items-end   bg-[#0c6967] h-114 w-114 rounded-full p-0  ">
            <img className="h-148    " src={chef2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
