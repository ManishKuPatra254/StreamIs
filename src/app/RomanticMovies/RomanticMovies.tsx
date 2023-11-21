"use client";
import React, { Fragment, useState } from "react";
import dataRomanticMovies from "./romanticmovies.json";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Modal from "@mui/material/Modal";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import ReactPlayer from "react-player/youtube";

export function BestReailtyShows() {
  const [open, setOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState<string | null>(null);

  function handleClickOpenModalOnImageClick(youUrl: string) {
    setVideoOpen(youUrl);
    setOpen(true);
  }

  function handleClickCloseModalOnImageClick() {
    setVideoOpen(null);
    setOpen(false);
  }

  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <Fragment>
      <div className=" mt-12">
        <h1 className="text-5xl font-extrabold px-14 py-3 max-lg:text-2xl max-lg:px-10 max-lg:py-2">
         Best Romantic Movies
        </h1>
        <div className="w-full m-auto mt-8">
          <div className="w-11/12 m-auto ">
            <Slider {...settings}>
              {dataRomanticMovies.map((romance) => (
                <div
                  key={romance.id}
                  className="relative overflow-hidden group"
                >
                  <Image
                    loading="eager"
                    className="cursor-pointer scale-100 h-[80%] w-[88%] hover:transition-transform transform transition duration-500 ease-in-out hover:scale-110"
                    src={romance.images_movie}
                    width={500}
                    height={500}
                    alt=""
                  />

                  <button
                    onClick={() =>
                      handleClickOpenModalOnImageClick(romance.links_new)
                    }
                    className="w-4/5 absolute hidden bottom-[10px] left-[18px] text-white px-8 py-2 bg-[#950101] rounded-sm font-extrabold hover:bg-white hover:text-black transition duration-700 ease-in-out group-hover:block"
                  >
                    Play
                  </button>
                  <Modal
                    keepMounted
                    open={open}
                    onClose={handleClickCloseModalOnImageClick}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "85%",
                        height: "85%",
                        "@media screen and (max-width: 1024px)": {
                          width: "90%",
                          height: "50%",
                        },
                      }}
                    >
                      {videoOpen && (
                        <ReactPlayer
                          url={videoOpen}
                          controls={true}
                          playing={false}
                          width="100%"
                          height="100%"
                        />
                      )}
                    </Box>
                  </Modal>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
