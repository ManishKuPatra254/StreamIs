import React, { Fragment } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

export function Footer() {
  return (
    <Fragment>
      <div className="bg-gray-300 w-full h-auto px-16 py-16 text-black max-lg:px-4 max-lg:py-4">
        <div className="flex items-center justify-between mb-5 max-lg:flex-col gap-4 ">
          <h4 className="font-bold pr-72 max-lg:pr-0 text-justify ">
            <strong className="text-sky-700 text-4xl max-lg:text-2xl">
              Streamis
            </strong>{" "}
            is a video streaming app that offers thousands of hours of premium,
            exclusive and original content from leading Producers and
            Publishers. The platform lays focus on Exclusive Original Content
            with emphasis.
          </h4>

          <h2 className="text-3xl font-extrabold text-black max-lg:text-xl">
            Have questions? Call 000-801-809-5289
          </h2>
        </div>

        <div className="flex justify-between mb-6">
          <div className="w-1/4">
            <a href="#12" className="block mb-4 hover:underline">
              FAQ
            </a>
            <a href="#12" className="block mb-4 hover:underline">
              Media Centre
            </a>
            <a href="#12" className="block mb-4 hover:underline">
              Ways to Watch
            </a>
            <a href="#12" className="block mb-4 hover:underline">
              Cookies Preferences
            </a>
            <a href="#12" className="block mb-4 hover:underline">
              Speed Test
            </a>
            <div className="flex gap-5">
              <a href="#12" className="block mb-4 hover:underline">
                <strong>Follow</strong>
              </a>
              <a href="#12" className="block mb-4 hover:underline">
                <InstagramIcon />
              </a>
              <a href="#12" className="block mb-4 hover:underline">
                <FacebookOutlinedIcon />
              </a>
            </div>
          </div>

          <div className="w-1/4">
            <a href="#12" className="block mb-4 hover:underline">
              Home
            </a>
            <a href="#12" className="block mb-4 hover:underline">
              Web shows
            </a>
            <a href="#12" className="block mb-4 hover:underline">
              Channels
            </a>
            <a href="#12" className="block mb-4 hover:underline">
              Movies
            </a>
            <a href="#12" className="block mb-4 hover:underline">
              Buzz
            </a>
          </div>

          <div className="w-1/4">
            <a href="#12" className=" block mb-4 hover:underline">
              Account
            </a>
            <a href="#12" className="block mb-4 hover:underline">
              Complaints
            </a>
            <a href="#12" className="block mb-4 hover:underline">
              Privacy
            </a>
            <a href="#12" className="block mb-4 hover:underline">
              Contact Us
            </a>
            <a href="#12" className="block mb-4 hover:underline">
              Only on Streamis
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center mb-6">
          <select className="bg-transparent border border-gray-900 text-black rounded-md py-2 px-4">
            <option value="">English</option>
            <option value="">हिन्दी</option>
          </select>
        </div>

        <div className="">
          <p className="text-black text-center text-5xl font-extrabold px-1 max-lg:text-3xl">
            Streamis India
          </p>
          <p className="text-center mt-5">Done by Manish</p>
        </div>
      </div>
    </Fragment>
  );
}
