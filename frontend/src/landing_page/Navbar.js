import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="bg-white ">
      <div class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-[20px]">
        <Link to="/"><img className="w-[12%]" src="media/images/logo.svg" class="h-8" alt="zerodha-Logo" /></Link>


        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex p-0 mt-0 flex-row space-x-8 rtl:space-x-reverse ">
            <li>
              <Link className="text-sm text-[#666666]" to="/signup">Signup</Link>
            </li>
            <li>
              <Link className="text-sm text-[#666666]" to="/login">Login</Link>
            </li>

            <li>
              <Link className="text-sm text-[#666666]" to="/about">About</Link>
            </li>
            
            <li>
              <Link className="text-sm text-[#666666]" to="/products">Products</Link>
            </li>
            
            <li>
              <Link className="text-sm text-[#666666]" to="pricing">Pricing</Link>
            </li>
            
            <li>
              <Link className="text-sm text-[#666666]" to="support">Support</Link>
            </li>

            <li>
              <Link className="text-sm text-[#666666] visible" href="#"><i class="fa fa-bars" aria-hidden="true"></i></Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="text-gray-600" />
    </nav>
  );
}

export default Navbar;
