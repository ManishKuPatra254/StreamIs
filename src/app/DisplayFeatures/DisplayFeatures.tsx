import React, { Fragment } from "react";
import image1 from "../assets/p1.jpg";
import image2 from "../assets/p2.jpg";
import image3 from "../assets/p3.jpg";
import image4 from "../assets/p4.jpg";
import Image from "next/image";

export function DisplayFeatures() {
  return (
    <Fragment>
      <div className="flex flex-col gap-16 mt-24 max-lg:mt-12 max-lg:gap-14">
        <div className="flex items-center justify-around py-12 border-y-8 border-y-neutral-800 max-lg:flex-col">
          <div className="p-24 max-lg:p-3">
            <h1 className="text-5xl py-3 font-extrabold max-lg:text-4xl p-4 max-lg:text-center">
              Enjoy on your TV
            </h1>
            <p className="text-xl px-3 max-lg:text-center">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <Image src={image1} className="p-3 rounded max-lg:p-3" alt="" />
        </div>

        <div className="flex items-center justify-around  py-12 border-b-8 border-b-neutral-800 max-lg:flex-col">
          <Image src={image2} className="p-3 rounded max-lg:p-3" alt="" />
          <div className="">
            <h1 className="text-5xl px-3 font-extrabold max-lg:text-4xl p-4 max-lg:text-center">
              Download your shows to watch offline
            </h1>
            <p className="text-xl px-3 max-lg:text-center">
              Save your favourites easily and always have <br /> something to
              watch.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-around  py-12 border-b-8 border-b-neutral-800 max-lg:flex-col">
          <div className="p-24 max-lg:p-3">
            <h1 className="text-5xl py-3 font-extrabold max-lg:text-4xl p-4 max-lg:text-center">
              Watch everywhere
            </h1>
            <p className="text-xl px-3 max-lg:text-center">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV
            </p>
          </div>
          <Image src={image3} className="p-3 rounded max-lg:p-3" alt="" />
        </div>

        <div className="flex items-center justify-around  py-12  border-b-8 border-b-neutral-800 max-lg:flex-col">
          <Image src={image4} className="p-3 rounded max-lg:p-3" alt="" />
          <div className="">
            <h1 className="text-5xl py-3 font-extrabold max-lg:text-4xl p-4 max-lg:text-center">
              Create profiles for kids
            </h1>
            <p className="text-xl px-3 max-lg:text-center max-lg:px-3">
              Send children on adventures with their favourite characters in a
              space made just for them.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
