import map from "../../assets/map.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";

const Map = () => {
  return (
    <section className="flex items-center  flex-wrap ">
      <div
        className=" flex flex-col justify-between w-[40%]  bg-cover bg-center  h-265.5  "
        style={{ backgroundImage: `url(${map})` }}
      >
        <div className=" w-30 mt-8 ml-7   flex gap-x-0.5  shadow-2xl font-semibold  ">
          <button className=" bg-white rounded-l-xl shadow-xl  p-2">Map</button>
          <button className=" bg-white rounded-r-xl shadow-xl  p-2">
            Satellite
          </button>
        </div>
        <div className=" w-90 m-auto flex flex-col justify-center items-center gap-4">
          <div className=" w-90 bg-white px-3 py-4 rounded-xl flex flex-col items-center justify-center">
            <p>New Baneshwor, Kathmandu, Bagmati, Nepal</p>
            <button className="flex items-center gap-3">
              Get Direction <FaGreaterThan />{" "}
            </button>
          </div>
          <div>
            <FaLocationDot />
          </div>
        </div>
        <div className=" flex flex-col gap-2 items-end mr-10 mb-5 w-20 m-auto ">
          <button className="rounded-full text-5xl flex  items-center justify-center w-13 h-13 bg-white shadow-xl  ">
            +
          </button>
          <button className="rounded-full text-5xl flex items-center justify-center w-13 h-13 shadow-xl bg-white  ">
            -
          </button>
        </div>
      </div>

      <div className=" w-[60%] p-20 ">
        <form className="rounded-2xl space-y-10 bg-white p-10 mr-10  ">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold ">
              Contact <span className="text-[#D95103] ">Us</span>
            </h1>
            <p className="text-[#6B788E]">
              If you have any queries, send us a message. Our Friendly team
              would love to hear from you
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-2  justify-between">
              <div className=" w-[50%] ">
                <label htmlFor="f-name">First Name</label>
                <br />
                <input
                  className="border-2 border-gray-200 p-2 rounded-xl w-full"
                  type="text"
                  id="f-name"
                />
              </div>
              <div className=" w-[50%] ">
                <label htmlFor="l-name">Last Name</label>
                <br />
                <input
                  className="border-2 border-gray-200 p-2 rounded-xl w-full"
                  type="text"
                  id="l-name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="foryou">What can we do for you</label>
              <input
                className="border-2 border-gray-200 p-2 rounded-xl w-full"
                type="text"
                id="foryou"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input
                className="border-2 border-gray-200 p-2 rounded-xl w-full"
                type="text"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <br />
              <input
                className="border-2 border-gray-200 p-2 rounded-xl w-full"
                type="number"
                id="phone"
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                className="border-2 border-gray-200 p-2 rounded-xl w-full"
                name="msg"
                id="message"
                rows={5}
              ></textarea>
            </div>
          </div>
          <button className="bg-[#0C6967] py-3 px-10 rounded-3xl text-white ">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Map;
