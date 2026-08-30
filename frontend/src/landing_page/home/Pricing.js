import React from "react";

function Pricing() {
  return (
    <div className="container w-9/12 mt-20 mx-auto p-4">
      <div className="grid grid-cols-2">

        {/* Left Section */}
        <div className="mx-auto ">
          <h2 className="text-2xl mb-5 text-gray-800">Unbeatable pricing</h2>
          <p className="mb-5 text-[#666666]">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a className="mt-8 text-blue-600" href="">
            See pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>



        {/* Right Section */}

        <div className="grid grid-cols-3">
          <div class="text-center flex">
            <img
              className="my-auto w-[85px]"
              src="media/images/pricing-eq-new.svg"
              alt="₹0"
            />
            <p className=" text-gray-600 text-xs text-left my-auto ">
              Free account
              <br />
              opening
            </p>
          </div>
          <div className="flex">
            <img
              className="my-auto w-[85px] "
              src="media/images/pricing-eq-new.svg"
              alt=""
            />
            <p className=" text-gray-600 text-xs text-left my-auto ">
              Free equity delivery and direct mutual funds
            </p>
          </div>
          <div className="flex">
            <img
              className="my-auto w-[85px]"
              src="media/images/intradayTrades.svg"
              alt=""
            />
            <p className=" text-gray-600 text-xs text-left my-auto ">
              Intraday and F&O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
