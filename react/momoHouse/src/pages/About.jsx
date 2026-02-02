import chef from "../assets/chef.png";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import decoratePlate from "../assets/decoratePlate.png";
import momoPlate from "../assets/momoPlate.png";
import radyPlate from "../assets/radyPlate.png";
import handcraftedMomo from "../assets/handcraftedMomo.png";
import serveCake from "../assets/serveCake.png";
import women from "../assets/women.png";
import momo from "../assets/momo.png";
import headChef from "../assets/headChef.png";
import assistChef1 from "../assets/assistChef1.png";
import assistChef2 from "../assets/assistChef2.png";
import { ImQuotesLeft } from "react-icons/im";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  const newLocal = "text-[39px] ";
  return (
    <div className=" bg-white space-y-10">
      <div className=" flex gap-30  h-190.75">
        <div>
          <h1 className=" text-[#0C6967] mt-50 ml-39 h-19.25 w-52.75 font-Allura text-[64px] ">
            About Us
          </h1>
          <div className=" w-138 h-46.25  ml-39 mt-20">
            <p className="text-[20px] text-[#6B788E] ">WE PRIDE OURSELF ON</p>
            <p className="text-[39px] font-bold text-[#101828] ">
              <span className="text-[#D95103] ">
                Our authentic momo recipes{" "}
              </span>
              passed down through generations
            </p>
          </div>
        </div>

        <div className=" flex justify-center items-end  mt-30 w-145.75 h-157.75  ">
          <div className=" flex justify-center items-end h-148 rounded-b-full overflow-hidden">
            <div className="   flex justify-center items-end   bg-[#0c6967] h-114 w-114 rounded-full  ">
              <img className="h-148 w-97.75  " src={chef} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-150 bg-cover bg-center  flex flex-col justify-end pb-15 "
        style={{
          backgroundImage: `url("https://cdn.pixabay.com/photo/2024/10/19/12/21/vegetables-9132660_1280.jpg")`,
        }}
      >
        <div className="text-white px-20 py-4 bg-linear-to-r from-black/90 to-transparent">
          <div>
            <h1 className="text-4xl font-medium">Process behind the making</h1>
            <p className="my-2 text-xl">
              See how we make momos that you like from only the best ingredients
            </p>
          </div>
          <button className=" bg-green-700  rounded-2xl p-2 flex w-45 items-center gap-x-1">
            <p className="bg-white rounded-full">
              <MdOutlineSlowMotionVideo size="25px" className="text-gray-700" />
            </p>
            Watch the Video
          </button>
        </div>
      </div>
      <div className=" h-480 py-36 px-39 space-y-30 ">
        <div className="flex flex-wrap gap-30">
          <div className=" w-114 h-67.5 space-y-2.5 ">
            <h1 className="text-[39px] font-bold ">
              Our momos are{" "}
              <span className="text-[#D95103]">made with love</span>
            </h1>
            <p className="text-[20px] text-[#6B788E] ">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>
          <div>
            <img
              className="h-112 w-138 rounded-sm "
              src={decoratePlate}
              alt=""
            />
            <div className="-mt-33 -ml-38 ">
              <img className=" h-47.75 w-66  " src={momoPlate} alt="" />
            </div>
          </div>
        </div>
        <div className="flex h-112 gap-28  ">
          <div>
            <img
              className="w-138 h-112 rounded-sm "
              src={radyPlate}
              alt="radyPlate"
            />
            <img
              className="w-65.75 h-42.5 -mt-28.75 ml-100 "
              src={handcraftedMomo}
              alt="handcraftedMomo"
            />
          </div>
          <div className=" w-120 h-67.5 ">
            <h1 className="text-[39px] font-bold w-full ">
              Taste the difference with
              <span className="text-[#D95103] "> our handcrafted momos</span>
            </h1>
            <p className="text-[20px] text-[#6B788E] ">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-28">
          <div className=" w-120 h-67.5 space-y-2.5 ">
            <h1 className="text-[39px] font-bold ">
              Our momos are the perfect
              <span className="text-[#D95103]">
                {" "}
                blend of tradition <span className="text-black">and</span>{" "}
                innovation
              </span>
            </h1>
            <p className="text-[20px] text-[#6B788E] ">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>
          <div>
            <img
              className="h-112 w-138 rounded-sm "
              src={serveCake}
              alt="serveCake"
            />
            <div className="-mt-33 -ml-38 ">
              <img className=" h-47.75 w-66  " src={momo} alt="momo" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-between h-160 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://tse4.mm.bing.net/th/id/OIP.avZdbeaP30ubrrOFfe_EhwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3)`,
        }}
      >
        <div className=" flex  w-xl h-103.25 ml-39 mt-28.5 gap-16 text-white ">
          <div className="  space-y-16 w-xl ">
            <div>
              <h1 className="text-[37px] ">
                <ImQuotesLeft />
              </h1>
              <p className="text-[24px] font-(--font-inter)  ">
                Momo is not just about sustenance, it's about bringing people
                together and creating memories. At our restaurant, we strive to
                create a warm and inviting atmosphere where our guests can enjoy
                delicious momo, great company, and unforgettable experiences
              </p>
            </div>

            <div>
              <p className="text-[39px] font-bold ">Marcus Schleifer</p>
              <p className="text-[25px] font-bold ">CEO</p>
            </div>
          </div>
        </div>

        <img className="w-153 h-160  " src={women} alt="women" />
      </div>
      <div className="border h-224.25 px-39 py-20 text-center ">
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
    </div>
  );
};

export default About;
