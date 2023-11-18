import React, { Fragment } from "react";
import Image from "next/image";
import image1 from "../assets/176289_Untitleddesign-2022-11-25T114744.329.png";

export function Navbar() {
  return (
    <Fragment>
      <div className="relative">
        <Image src={image1} alt="" className="w-full h-auto" />
        <div className="absolute inset-0 flex justify-between items-start px-4 py-3 lg:flex lg:flex-row lg:items-start lg:px-24">
          <h1 className=" bg-slate-950  p-1 rounded text-2xl lg:text-5xl inline px-4 text-red-600">
            Streamis
          </h1>
          <div className="flex gap-3 p-1">
            <select
              className="bg-transparent border-2 rounded p-1"
              name="language"
              id="language">
              <option value="english">English</option>
              <option value="hindi">हिन्दी</option>
            </select>
            <a href="">
              <button className="bg-red-600 px-3 py-1 rounded-md font-bold text-white">
                Sign in
              </button>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
