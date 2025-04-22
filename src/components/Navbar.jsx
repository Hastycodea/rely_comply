import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
  return (
    <div className="bg-black">
      <div className="flex text-white justify-center items-center py-5 gap-6 w-full">
        <div>
          <p>RelyComply</p>
        </div>
        <div className="flex gap-4 pl-8 text-sm">
          <div className="flex items-center">
            <p>Platform</p>
            <RiArrowDropDownLine />
            <div className="hidden relative top-16 right-28 bg-gray-200 list-none text-black px-4 my-3 text-xs">
              <li>Case Management</li>
              <li>Case Management</li>
              <li>Case Management</li>
              <li>Case Management</li>
              <li>Case Management</li>
            </div>
          </div>
          <div className="flex items-center">
            <p>Solutions</p>
            <RiArrowDropDownLine />
          </div>
          <div className="flex items-center">
            <p>Industries</p>
            <RiArrowDropDownLine />
          </div>
          <div className="flex items-center">
            <p>Resources</p>
            <RiArrowDropDownLine />
          </div>
          <div className="flex items-center">
            <p>Company</p>
            <RiArrowDropDownLine />
          </div>
        </div>
        <div className="flex gap-4 pl-8  items-center">
          <p>Login</p>
          <p className="bg-green-700 hover:bg-green-400 text-black rounded-3xl px-4 py-3">
            Arrange a demo
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
