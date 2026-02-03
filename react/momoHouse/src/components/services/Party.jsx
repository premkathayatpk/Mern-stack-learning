import { GiPartyPopper } from "react-icons/gi";
import party from "../../assets/party.png";
import qr2 from "../../assets/qr2.png";
import { PiChefHat } from "react-icons/pi";

const Party = () => {
  return (
    <section className="my-30 space-y-20">
      <div className="flex justify-around">
        <div className="w-114 space-y-7 ">
          <div className="space-y-5 ">
            <GiPartyPopper className="text-[#D95103] text-[56px] " />
            <h1 className="text-[31px] font-bold ">Private Party</h1>
            <p className="text-[16px] text-[#6B788E] leading-9 ">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt.
            </p>
          </div>
          <div className="flex items-center justify-around bg-gray-100 rounded-2xl p-4">
            <div>
              <p className="text-[25px] font-bold text-[#0C6967] ">
                Scan the QR code
              </p>
              <p className="text-[14px] text-[#6B788E] ">
                You can also check about the service
              </p>
            </div>
            <img className="w-30 h-30 " src={qr2} alt="" />
          </div>
        </div>
        <img className="w-[552px] h-[448px] rounded-2xl " src={party} alt="" />
      </div>
      <div className="flex justify-around">
        <img className="w-[552px] h-[448px] rounded-2xl " src={party} alt="" />
        <div className="w-114 space-y-7 ">
          <div className="space-y-5 ">
            <PiChefHat className="text-[#D95103] text-[56px] " />
            <h1 className="text-[31px] font-bold ">Categring</h1>
            <p className="text-[16px] text-[#6B788E] leading-9 ">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt.
            </p>
          </div>
          <div className="flex items-center justify-around bg-gray-100 rounded-2xl p-4 ">
            <div>
              <p className="text-[25px] font-bold text-[#0C6967] ">
                Scan the QR code
              </p>
              <p className="text-[14px] text-[#6B788E] ">
                You can also check about the service
              </p>
            </div>
            <img className="w-30 h-30 " src={qr2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Party;
