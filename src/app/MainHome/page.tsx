"use client";
import React, { Fragment, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function Page() {
  const [isSidebar, setSidebar] = useState(false);

  function handleToggleSidebar() {
    setSidebar(!isSidebar);
  }

  return (
    <Fragment>
      <div className="flex items-center justify-between max-lg:w-full max-lg:justify-around py-3 ">
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
        <h1 className="text-5xl font-extrabold px-14 py-3 max-lg:text-2xl max-lg:px-10 max-lg:py-2">
          Streamis
        </h1>
        <ul className=" bg-zinc-800 p-3 rounded-full flex gap-4 text-xl font-bold max-xl:hidden">
          <li className="cursor-pointer hover:text-zinc-400 transition duration-300 ease-in-out">
            Movies
          </li>
          <li className="cursor-pointer hover:text-zinc-400 transition duration-300 ease-in-out">
            Web shows
          </li>
          <li className="cursor-pointer hover:text-zinc-400 transition duration-300 ease-in-out">
            Reality shows
          </li>
          <li className="cursor-pointer hover:text-zinc-400 transition duration-300 ease-in-out">
            New and popular
          </li>
        </ul>
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
    
    
    </Fragment>
  );
}
