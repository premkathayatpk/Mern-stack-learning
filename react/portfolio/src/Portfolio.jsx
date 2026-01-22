import { FaRegHandPaper } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { PiMedalBold } from "react-icons/pi";
import { FaNetworkWired } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="flex pb-10  ">
      <div className="bg-black w-1/5    h-100% py-10 text-white">
        <div className="profile text-center ">
          <img
            className="h-30 w-30 m-auto rounded-full  border-4 border-blue-400"
            src="https://static.vecteezy.com/system/resources/previews/044/277/175/original/young-man-standing-holding-laptop-and-looking-at-camera-on-isolated-transparent-background-free-png.png"
            alt=""
          />
          <h1 className="mt-3 text-2xl font-medium">Smart Portfolio</h1>
          <p>Best Portfolio Templet</p>
        </div>
        <div className="mt-3 flex justify-center gap-x-3 ">
          <FaFacebookF size={35} className="bg-gray-600 p-1.5 rounded-full" />
          <FaInstagram size={35} className="bg-gray-600 p-1.5 rounded-full" />
          <FaTwitter size={35} className="bg-gray-600 p-1.5 rounded-full" />
          <FaLinkedinIn size={35} className="bg-gray-600 p-1.5 rounded-full " />
        </div>
        <div className="nav">
          <ul className="pt-10 pl-10 list-none space-y-4">
            <li className="w-12 border-b-2  border-transparent hover:border-blue-400 ">
              Home
            </li>
            <li className="w-12 border-b-2  border-transparent hover:border-blue-400 ">
              About
            </li>
            <li className="w-12 border-b-2  border-transparent hover:border-blue-400 ">
              Skills
            </li>
            <li className="w-12 border-b-2  border-transparent hover:border-blue-400 ">
              Resume
            </li>
            <li className="w-12 border-b-2  border-transparent hover:border-blue-400 ">
              Portfolio
            </li>
            <li className="w-12 border-b-2  border-transparent hover:border-blue-400 ">
              Contact
            </li>
          </ul>
        </div>
      </div>

      <div className=" w-4/5 ">
        <div className="h-120 bg-blue-900 flex  justify-evenly">
          <div className="text">
            <div className=" bg-white mt-10 ml-10 w-40 p-2 rounded-lg flex gap-4 items-center">
              <FaRegHandPaper size={30} />
              <div>
                <div></div>
                <p>Hello, I'm</p>
                <p className="text-2xl font-medium">Micael</p>
              </div>
            </div>
            <div className="t2 bg-white mt-10 ml-12 p-2 w-40 rounded-lg text-right">
              <p>Fullstack Developer </p>
              <p>Designer</p>
            </div>
          </div>
          <div className="bg-cyan-800 h-120 w-120 rounded-full">
            <img
              className="h-120  "
              src="https://static.vecteezy.com/system/resources/previews/044/277/175/original/young-man-standing-holding-laptop-and-looking-at-camera-on-isolated-transparent-background-free-png.png"
              alt=""
            />
          </div>
          <div className="space-y-25">
            <p className=" h-10 w-10 p-2  rounded-full bg-white mt-10 ">
              <FaWordpressSimple size={20} className="text-blue-400  " />
            </p>
            <p className="p-2.5 h-15 w-15 rounded-full bg-white">
              <FaHtml5 size={40} className="text-blue-400" />
            </p>
            <p className="p-2 h-10 w-10 rounded-full bg-white">
              <FaNodeJs size={20} className="text-blue-400" />
            </p>
          </div>
        </div>
        <div className="aboutMe  text-center pt-10">
          <h1 className="font-medium">Get To Know</h1>
          <h1 className="text-3xl">About Me</h1>

          <div className="pt-10 flex flex-wrap justify-around gap-5">
            <div className="picture">
              <img
                className="h-50 w-80"
                src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2022/07/museums-in-singapore.png"
                alt=""
              />
            </div>
            <div className="h-40  w-40 bg-blue-900  rounded-xl text-white ">
              <PiMedalBold className="text-blue-400 mt-8 mb-4  m-auto"  size={30} />
              <p className="font-medium text-xl">Experience</p>
              <p>3+ Years Working</p>
            </div>
            <div className="h-40  w-40 text-white bg-blue-900 rounded-xl">
              <FaNetworkWired className="text-blue-400 mt-8 mb-4 m-auto"  size={30} />
              <p className="font-medium text-xl">Projects</p>
              <p>80+ Completed</p>
            </div>
            <div className="h-40  w-40 text-white bg-blue-900 rounded-xl">
              <FaUsers className="text-blue-400 mt-8 mb-4 m-auto"  size={30} />
              <p className="font-medium text-xl">Clients</p>
              <p>200+ Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
