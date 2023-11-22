"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import aqua from "../assets/t2.jpg";
import dhunki from "../assets/t3.jpg";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import ReactPlayer from "react-player/youtube";

export function ComingSoon() {
  const [open, setOpen] = useState(false);

  function handleClickOpenModal() {
    setOpen(!open);
  }

  function handleClickCloseModal() {
    setOpen(false);
  }

  const [openD, setOpenD] = useState(false);

  function handleClickOpenModalD() {
    setOpenD(!openD);
  }

  function handleClickCloseModalD() {
    setOpenD(false);
  }
  return (
    <Fragment>
      <h1 className=" py-10 text-center text-8xl font-[900] max-lg:text-6xl">
        Upcomings
      </h1>
      <div className="relative flex items-center justify-around  py-12 max-xl:flex-col">
        <Image src={aqua} className="p-3 rounded max-lg:p-3" alt="" />
        <p
          onClick={handleClickOpenModal}
          className=" cursor-pointer absolute top-1/2 left-[27%] max-lg:absolute max-lg:top-[20%] max-lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <PlayCircleFilledWhiteOutlinedIcon
            sx={{
              fontSize: "120px",
              "@media screen and (max-width: 1024px)": {
                fontSize: "75px",
              },
            }}
          />
        </p>
        <Modal
          keepMounted
          open={open}
          onClose={handleClickCloseModal}
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
            <ReactPlayer
              url="https://youtu.be/FV3bqvOHRQo?si=47yCRSpkMbjM_ALr"
              controls={true}
              playing={false}
              width="100%"
              height="100%"
            />
          </Box>
        </Modal>

        <div className="text-justify max-xl:text-center">
          <h1 className="text-5xl px-3 font-extrabold max-lg:text-4xl p-4 max-lg:text-center">
            Aquaman and the Lost Kingdom
          </h1>
          <p className="text-xl px-5 max-lg:text-center">
            1h 55m | <span className="text-[#ff4545]">Action/Adventure</span> |{" "}
            <span>22 December 2023 (USA)</span>
          </p>
          <p className="mt-5 text-justify px-5">
            After failing to defeat Aquaman the first time, Black Manta wields
            the power of the mythic Black Trident to unleash an ancient and
            malevolent force. Hoping to end his reign of terror, Aquaman forges
            an unlikely alliance with his brother, Orm, the former king of
            Atlantis. Setting aside their differences, they join forces to
            protect their kingdom and save the world from irreversible
            destruction.
          </p>
          <div className="px-5 max-lg:flex items-center justify-center mt-5">
            <button
              onClick={handleClickOpenModal}
              className="px-14 py-3 bg-[#f5633f] hover:bg-orange-700 transition duration-300 ease-in-out"
            >
              Play Video
            </button>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-around  py-12 max-xl:flex-col">
        <Image
          src={dhunki}
          className="p-3 rounded max-lg:p-3"
          alt=""
          width={800}
          height={800}
        />
        <p
          onClick={handleClickOpenModalD}
          className=" cursor-pointer absolute top-1/2 left-[27%] max-lg:absolute max-lg:top-[20%] max-lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <PlayCircleFilledWhiteOutlinedIcon
            sx={{
              fontSize: "120px",
              "@media screen and (max-width: 1024px)": {
                fontSize: "75px",
              },
            }}
          />
        </p>
        <Modal
          keepMounted
          open={openD}
          onClose={handleClickCloseModalD}
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
            <ReactPlayer
              url="https://youtu.be/LOzucm1jbzs?si=uzRkjt5l3DFlyNcU"
              controls={true}
              playing={false}
              width="100%"
              height="100%"
            />
          </Box>
        </Modal>

        <div className="text-justify max-xl:text-center">
          <h1 className="text-5xl px-3 font-extrabold max-lg:text-4xl p-4 max-lg:text-center">
            Dunki
          </h1>
          <p className="text-xl px-5 max-lg:text-center">
            2h 40m | <span className="text-[#ff4545]">Drama/Action</span> |{" "}
            <span>22 December 2023 (INDIA)</span>
          </p>
          <p className="mt-5 text-justify px-5">
            Dunki is an upcoming Indian Hindi-language comedy-drama film based
            on an illegal immigration technique named, Donkey Flight. It is
            directed by Rajkumar Hirani, who co-wrote the screenplay with
            Abhijat Joshi and Kanika Dhillon.
          </p>
          <div className="px-5 max-lg:flex items-center justify-center mt-5">
            <button
              onClick={handleClickOpenModalD}
              className="px-14 py-3 bg-[#f5633f] hover:bg-orange-700 transition duration-300 ease-in-out"
            >
              Play Video
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
