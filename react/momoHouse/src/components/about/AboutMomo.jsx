import decoratePlate from "../../assets/decoratePlate.png";
import momoPlate from "../../assets/momoPlate.png";
import radyPlate from "../../assets/radyPlate.png";
import handcraftedMomo from "../../assets/handcraftedMomo.png";
import serveCake from "../../assets/serveCake.png";
import momo from "../../assets/momo.png";

const AboutMomo = () => {
  return (
    <section>
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
    </section>
  );
};

export default AboutMomo;
