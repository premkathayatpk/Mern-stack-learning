import useFetch from "../hooks/useFetch";
import qr from "../assets/qr.png";
import { FaMobileScreenButton } from "react-icons/fa6";
import { useEffect, useState } from "react";

function Menu() {
  const { isError, isLoading, products } = useFetch();

  const [italian, setItalian] = useState([]);
  const [pakistan, setPakistani] = useState([]);

  useEffect(() => {
    if (products?.length > 0) {
      setItalian(products.filter((item) => item.cuisine === "Italian"));
      setPakistani(products.filter((item) => item.cuisine === "Pakistani"));
    }
  }, [products]);
  console.log(products);

  if (!isError && isLoading) {
    return (
      <div className="text-center text-2xl p-10 font-bold">
        Loading.............
      </div>
    );
  }

  return (
    <div className="bg-white space-y-30">
      <div className="space-y-12 pt-10 ">
        <div className="flex flex-col justify-center items-center gap-4 ">
          <h1 className="text-[56px] text-[#0C6967] font-Allura  ">Our Menu</h1>
          <p className="text-2xl font-bold text-center leading-10 ">
            <span className="block text-[#D95103]">
              Our menu is more than just momos,{" "}
            </span>
            with a variety of dishes to cater to all tastes and preferences.
          </p>
        </div>
        <div className="bg-[#f1f5f5] w-282 rounded-2xl p-10 space-y-12 flex flex-col items-center m-auto  ">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#0C6967] ">
              Scan the QR code
            </h2>
            <p className="text-xl  ">
              You can also check the allergy advices using your phone as well
            </p>
          </div>
          <div>
            <img className="h-48 w-48" src={qr} alt="" />
            <h1 className="flex  gap-2 items-center justify-center text-[31px] font-bold ">
              <span className="text-[#D95103]"> SCAN </span> ME!
              <FaMobileScreenButton />
            </h1>
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col items-center justify-center space-y-10">
        <h1 className="text-[40px] font-bold ">
          <span className="text-[#0C6967]">............</span>
          <span className="text-[#D95103]"> Italian</span> Recipes{" "}
          <span className="text-[#0C6967]">............</span>
        </h1>

        {italian?.length > 0 ? (
          <div className="flex flex-wrap w-[70%]  justify-center  gap-30 px-20  py-10 ">
            {italian?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-82    shadow-xl  bg-white shadow-gray-200   rounded-2xl flex flex-col"
                >
                  <div>
                    <img
                      className=" h-58  rounded-t-2xl w-full"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="p-3">
                    <h1 className=" text-2xl font-bold ">{item.name}</h1>
                    <h1>
                      Rs.{" "}
                      <span className="text-[#D95103] text-2xl font-bold ">
                        {item.caloriesPerServing}
                      </span>{" "}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Product Not Found.</div>
        )}
      </div>
      <div className="text-center flex flex-col items-center justify-center space-y-10">
        <h1 className="text-[40px] font-bold ">
          <span className="text-[#0C6967]">............</span>
          <span className="text-[#D95103]"> Pakastani</span> Recipes{" "}
          <span className="text-[#0C6967]">............</span>
        </h1>
        {pakistan?.length > 0 ? (
          <div className="flex flex-wrap w-[70%]  justify-center  gap-30 px-20  py-10  ">
            {pakistan.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-82    shadow-xl  bg-white shadow-gray-200   rounded-2xl flex flex-col"
                >
                  <div>
                    <img
                      className=" h-58  rounded-t-2xl w-full"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="p-3">
                    <h1 className=" text-2xl font-bold ">{item.name}</h1>
                    <h1>
                      Rs.{" "}
                      <span className="text-[#D95103] text-2xl font-bold ">
                        {item.caloriesPerServing}
                      </span>{" "}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Product Not Found.</div>
        )}
      </div>
    </div>
  );
}

export default Menu;
