import React, { Fragment } from "react";

export function Footer() {
  return (
    <Fragment>
      <div className="w-full h-auto px-16 py-16 text-gray-100 max-lg:px-4 max-lg:py-4">
        <h2 className="text-3xl font-extrabold text-gray-100 mb-8 max-lg:text-xl mt-12 text-justify">
          Have questions? <p className="">Call 000-801-809-5289</p>
        </h2>

        <div className="flex justify-between mb-6">
          <div className="w-1/4">
            <a href="#12" className="underline block mb-4">
              FAQ
            </a>
            <a href="#12" className="underline block mb-4">
              Media Centre
            </a>
            <a href="#12" className="underline block mb-4">
              Ways to Watch
            </a>
            <a href="#12" className="underline block mb-4">
              Cookies Preferences
            </a>
            <a href="#12" className="underline block">
              Speed Test
            </a>
          </div>

          <div className="w-1/4">
            <a href="#12" className="underline block mb-4">
              Help Centre
            </a>
            <a href="#12" className="underline block mb-4">
              Investor Relations
            </a>
            <a href="#12" className="underline block mb-4">
              Terms of Use
            </a>
            <a href="#12" className="underline block mb-4">
              Corporate Information
            </a>
            <a href="#12" className="underline block">
              Legal Notices
            </a>
          </div>

          <div className="w-1/4">
            <a href="#12" className="underline block mb-4">
              Account
            </a>
            <a href="#12" className="underline block mb-4">
              Jobs
            </a>
            <a href="#12" className="underline block mb-4">
              Privacy
            </a>
            <a href="#12" className="underline block mb-4">
              Contact Us
            </a>
            <a href="#12" className="underline block">
              Only on Netflix
            </a>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <select className="bg-transparent border border-gray-300 text-white rounded-md py-1 px-4">
            <option value="">English</option>
            <option value="">हिन्दी</option>
          </select>
        </div>

        <div className="text-white">
          <p>Netflix India</p>
        </div>
      </div>
    </Fragment>
  );
}
