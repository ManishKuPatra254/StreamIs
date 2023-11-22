import React, { Fragment } from "react";
import "./Navbar.css";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";

export function Navbar() {
  return (
    <Fragment>
      <div className="main_one">
        <div className=" inset-0 flex justify-between items-start px-4 py-3 lg:flex lg:flex-row lg:items-start lg:px-24">
          <h1 className=" heads_one  p-1 text-2xl lg:text-5xl inline px-4">
            <strong className="text-[#dc6f54]">S</strong>tream
            <strong className="text-[#dc6f54]">I</strong>s
          </h1>
          <div className="flex gap-3 p-1">
            <select
              className="bg-transparent border-2 rounded p-1"
              name="language"
              id="language"
            >
              <option value="english">English</option>
              <option value="hindi">हिन्दी</option>
            </select>
            <Link href="/MainHome">
              <button className="bg-[#3d0000]  hover:bg-[#fff] hover:text-[#000] transition duration-500 ease-in-out px-5 py-1.5 rounded-md font-bold text-white">
                Sign in
              </button>
            </Link>
          </div>
        </div>
        <div className="block">
          <h1 className="text-center mt-32 mb-10 text-6xl font-extrabold px-24 max-lg:text-3xl max-lg:px-2 max-xl:mt-20">
            Get unlimited access to movies , TV shows , web series and more
          </h1>
          <div className="flex items-center flex-col justify-center gap-3 max-lg:flex-col">
            <TextField
              label="Email address"
              variant="filled"
              className="text"
              type="email"
              placeholder="Enter email address"
              sx={{
                maxWidth: "40%",
                width: "100%",
                "@media screen and (max-width: 1024px)": {
                  maxWidth: "90%",
                },
                border: "3px solid white",
                borderRadius: "5px",
                color: "white",
                "& .MuiInputBase-input": { color: "rgb(255,255,255)" },
              }}
            />

            <button className="w-3/12 bg-[#3d0000] hover:bg-[white] hover:text-black transition duration-500 ease-in-out p-4 rounded text-xl font-extrabold max-lg:w-11/12  ">
              Get Started <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
