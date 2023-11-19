"use client";
import React, { Fragment, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TextField from "@mui/material/TextField";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export function FrequentlyAskedQuestions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Fragment>
      <div className="mt-10">
        <div className="">
          <h1 className="text-center text-5xl font-extrabold max-lg:text-3xl p-2">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="mt-10 w-4/5 m-auto">
          <Accordion
            sx={{ backgroundColor: "#2c2c2c" }}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<KeyboardArrowDownIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ color: "white" }}>What is Streamis</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "white" }}>
                Streamis is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices. <br /> <br />
                You can watch as much as you want, whenever you want, without a
                single ad – all for one low monthly price. There is always
                something new to discover, and new TV shows and movies are added
                every week!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center mt-8 max-lg:p-3">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex items-center mt-8 gap-5 justify-center max-lg:flex-col w-full">
            <TextField
              label="Email address"
              variant="outlined"
              type="email"
              className=""
              sx={{
                maxWidth: "30%",
                width: "100%",
                "@media screen and (max-width: 1024px)": {
                  maxWidth: "90%",
                },
                color: "white",
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                  backgroundColor: "rgba(0 ,0 , 0 , .5)",
                },
                "& .MuiInputBase-input": { color: "rgb(255,255,255)" },
              }}
            />

            <button className="bg-sky-900 hover:bg-sky-950 transition duration-500 ease-in-out p-4 rounded text-xl font-extrabold max-lg:w-3/4">
              Get Started <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
