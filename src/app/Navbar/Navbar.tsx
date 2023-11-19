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
            Streamis
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
              <button className="bg-sky-900  hover:bg-sky-950 transition duration-500 ease-in-out px-3 py-1 rounded-md font-bold text-white">
                Sign in
              </button>
            </Link>
          </div>
        </div>
        <div className="block">
          <h1 className="text-center text-3xl font-extrabold mt-44 px-4 lg:text-6xl lg:px-72">
            Get unlimited access to movies , TV shows , web series and more
          </h1>
          <p className="text-center text-xl mt-14 px-4 lg:text-2xl lg:px-96">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex items-center justify-center mt-7 gap-3 max-lg:flex-col">
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

            <button className="bg-sky-900 hover:bg-sky-950 transition duration-500 ease-in-out p-4 rounded text-xl font-extrabold  ">
              Get Started <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
