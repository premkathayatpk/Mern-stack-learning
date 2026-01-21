import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const SideNav = () => {
  return (
    <div className="bg-black w-60 h-100% py-10 text-white">
      <div className="profile text-center ">
        <img
          className="h-30 rounded-full m-auto border-4 border-blue-400"
          src="https://showit-better.transforms.svdcdn.com/production/uploads/images/profile-2.jpg?w=1200&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5125&fp-y=0.5033&dm=1714038302&s=1cabf294532d344c0f5c1c97272e8fc2"
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
  );
};

export default SideNav;
