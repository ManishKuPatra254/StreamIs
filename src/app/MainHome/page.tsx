"use client";
import React, { Fragment, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Image from "next/image";
import image1 from "../assets/n1.jpg";
import image2 from "../assets/n3.jpg";
import image3 from "../assets/n2.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ReactPlayer from "react-player/youtube";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { TrendingShows } from "../TrendingShows/TrendingShows";
import { PopularWeb } from "../PopularWebShows/PopularWeb";
import { Footer } from "../Footer/Footer";

export default function Page() {
  const [isSidebar, setSidebar] = useState(false);
  function handleToggleSidebar() {
    setSidebar(!isSidebar);
  }

  const [open, setOpen] = useState(false);
  function handleClickOpenModal() {
    setOpen(!open);
  }

  function handleClickCloseModal() {
    setOpen(false);
    // console.log("HI");
  }

  return (
    <Fragment>
      <div className=" sticky top-0 bg-[#3D0000] z-10 flex items-center justify-between max-lg:w-full max-lg:justify-around py-3 ">
        <p onClick={handleToggleSidebar} className="hidden max-xl:block">
          <MenuIcon onClick={handleToggleSidebar} sx={{ fontSize: "30px" }} />
        </p>
        <Drawer anchor="left" open={isSidebar} onClose={handleToggleSidebar}>
          <List>
            <ListItem>
              <p>Movies</p>
            </ListItem>
            <ListItem>
              <p>Web shows</p>
            </ListItem>
            <ListItem>
              <p>Reality shows</p>
            </ListItem>
            <ListItem>
              <p>New and popular</p>
            </ListItem>
          </List>
        </Drawer>
        <div className="flex items-center">
          <h1 className="text-5xl font-extrabold  px-14 py-1 max-lg:text-2xl max-lg:px-10 max-lg:py-2">
            Streamis
          </h1>
          <ul className=" p-3 flex gap-4 text-xl font-[500] max-xl:hidden">
            <li className="px-2.5 py-1.5 rounded-[5px] cursor-pointer hover:text-[#000] hover:bg-[#E25E3E] transition duration-300 ease-in-out max-lg:px-0 max-lg:py-0">
              Tv Shows
            </li>
            <li className="px-2.5 py-1.5 rounded-[5px] cursor-pointer hover:text-[#000] hover:bg-[#E25E3E] transition duration-300 ease-in-out max-lg:px-0 max-lg:py-0">
              Web shows
            </li>
            <li className="px-2.5 py-1.5 rounded-[5px] cursor-pointer hover:text-[#000] hover:bg-[#E25E3E] transition duration-300 ease-in-out max-lg:px-0 max-lg:py-0">
              Movies
            </li>
            <li className="px-2.5 py-1.5 rounded-[5px] cursor-pointer hover:text-[#000] hover:bg-[#E25E3E] transition duration-300 ease-in-out max-lg:px-0 max-lg:py-0">
              New and Popular
            </li>
          </ul>
        </div>
        <div className="flex items-center px-14 py-3 gap-5 max-lg:gap-3 max-lg:px-5 max-lg:py-2">
          <p className="cursor-pointer">
            <SearchOutlinedIcon
              sx={{
                fontSize: "30px",
                "@media screen and (max-width: 1024px)": {
                  fontSize: "25px",
                },
              }}
            />
          </p>
          <p>
            <NotificationsNoneOutlinedIcon
              sx={{
                fontSize: "30px",
                "@media screen and (max-width: 1024px)": {
                  fontSize: "25px",
                },
              }}
            />
          </p>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              backgroundColor: "red",
              cursor: "pointer",
            }}
          >
            M
          </Avatar>
        </div>
      </div>

      <div className=" flex items-center overflow-hidden">
        <Image src={image1} className="w-2/6 max-lg:hidden" alt="" />
        <div className="relative">
          <Image
            src={image2}
            className="w-full max-xl:w-full object-fill max-lg:w-full max-lg:object-cover"
            alt=""
          />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h1 className="text-6xl text-slate-100 font-extrabold max-lg:text-5xl">
              John Wick
            </h1>
            <div className="flex gap-3 mt-4">
              <p className="text-xl font-semibold">New</p>
              <button className="px-2  bg-gray-200 text-black font-semibold">
                18 +
              </button>
              <button className="px-2  bg-gray-200 text-black font-semibold">
                HD
              </button>
              <button className="px-2 bg-gray-200 text-black font-semibold">
                cc
              </button>
            </div>
            <p className="mt-5 text-xl font-semibold ">Movie 1hr 41m</p>
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleClickOpenModal}
                className="flex items-center gap-1 bg-gray-100 font-semibold text-2xl px-10 py-1 text-black rounded-sm max-lg:text-xl max-lg:px-3"
              >
                <PlayArrowIcon /> Play
              </button>
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
                    url="https://youtu.be/qEVUtrk8_B4?si=MAB2uxVyy9_dk6x5"
                    controls={true}
                    playing={false}
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Modal>

              <button className="flex items-center gap-1 text-2xl font-semibold bg-red-700 px-5 py-1 text-white rounded-sm max-lg:text-xl max-lg:px-3">
                <InfoOutlinedIcon /> More info
              </button>
            </div>
          </div>
        </div>
        <Image src={image3} className="w-2/6 max-lg:hidden" alt="" />
      </div>
      <TrendingShows />
      <PopularWeb />
      <Footer />
    </Fragment>
  );
}
