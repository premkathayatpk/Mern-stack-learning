import React from "react";
import { NavLink } from "react-router-dom";

function Fail() {
  return (
    <div>
      <div className="w-80 p-8  mt-10 shadow-2xl shadow-gray-500 rounded-xl  space-y-6 m-auto  ">
        <div className="">
          <img
            className="w-full"
            src="https://cdn.shopify.com/s/files/1/2301/4381/files/1024px-OOjs_UI_icon_alert_destructive.svg_dd7d0ac6-c8e7-4043-b3a1-ceb3a4fd0daf_480x480.png?v=1589826423"
            alt=""
          />
        </div>
        <div className="text-xl font-serif  ">
          <h1 className="flex  flex-col  justify-between">
            <div>
              <span>Payment Status:</span>
              <span className=" text-red-500   font-bold  underline">Fail</span>
            </div>

            <NavLink
              className="border p-3 text-center mt-3 bg-gray-300"
              to="/payment"
            >
              Try Again
            </NavLink>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Fail;
