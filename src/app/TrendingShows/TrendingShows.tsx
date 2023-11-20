"use client";
import React, { Fragment } from "react";
import dataForTrending from "./trendingshows.json";
import Image from "next/image";

export function TrendingShows() {
  return (
    <Fragment>
      <div className=" mt-12">
        <h1 className="text-5xl font-extrabold px-14 py-3 max-lg:text-2xl max-lg:px-10 max-lg:py-2">
          Trending Shows
        </h1>
        <div className="">
          <div className="flex">
            {dataForTrending.map((items) => (
              <div key={items.id} className="">
                <Image
                  className="w-56 h-96"
                  src={items.images_movie}
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
