import chef from "../../assets/chef.png";
const Hero = () => {
  return (
    <section className=" flex pt-20 gap-30  h-190.75">
      <div>
        <h1 className=" text-[#0C6967]  ml-39 h-19.25 w-52.75 font-Allura text-[64px] ">
          About Us
        </h1>
        <div className=" w-138 h-46.25  ml-39 mt-20">
          <p className="text-[20px] text-[#6B788E] ">WE PRIDE OURSELF ON</p>
          <p className="text-[39px] font-bold text-[#101828] ">
            <span className="text-[#D95103] ">Our authentic momo recipes </span>
            passed down through generations
          </p>
        </div>
      </div>

      <div className=" flex justify-center items-end   w-145.75 h-157.75  ">
        <div className=" flex justify-center items-end h-148 rounded-b-full overflow-hidden">
          <div className="   flex justify-center items-end   bg-[#0c6967] h-114 w-114 rounded-full  ">
            <img className="h-148 w-97.75  " src={chef} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
