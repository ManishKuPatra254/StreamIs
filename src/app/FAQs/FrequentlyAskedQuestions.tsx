/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { Fragment, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TextField from "@mui/material/TextField";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export function FAQs() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Fragment>
      <div className="mt-10">
        <div className="">
          <h1 className="text-center text-5xl font-extrabold max-lg:text-3xl p-2">
            FAQ's
          </h1>
        </div>

        <div className="mt-10 w-4/5 m-auto">
          <Accordion
            sx={{ backgroundColor: "#2c2c2c" }}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<KeyboardArrowDownIcon sx={{ color: "white" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "26px",
                  "@media screen and (max-width: 1024px)": {
                    fontSize: "16px",
                  },
                }}
              >
                What is Streamis ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography
                sx={{
                  color: "white",
                  fontSize: "22px",
                  "@media screen and (max-width: 1024px)": {
                    fontSize: "16px",
                  },
                }}
              >
                Streamis is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices.
                <br /> <br />
                You can watch as much as you want, whenever you want, without a
                single ad – all for one low monthly price.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{ backgroundColor: "#2c2c2c" }}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<KeyboardArrowDownIcon sx={{ color: "white" }} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
                <Typography
                sx={{
                  color: "white",
                  fontSize: "26px",
                  "@media screen and (max-width: 1024px)": {
                    fontSize: "16px",
                  },
                }}
              >
                {" "}
                How much does Streamis cost ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography
                sx={{
                  color: "white",
                  fontSize: "22px",
                  "@media screen and (max-width: 1024px)": {
                    fontSize: "16px",
                  },
                }}
              >
                Watch Streamis on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from ₹ 100 to ₹ 400 a month. No extra costs, no contracts.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ backgroundColor: "#2c2c2c" }}
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<KeyboardArrowDownIcon sx={{ color: "white" }} />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
                <Typography
                sx={{
                  color: "white",
                  fontSize: "26px",
                  "@media screen and (max-width: 1024px)": {
                    fontSize: "16px",
                  },
                }}
              >
                {" "}
                How do I cancel ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography
                sx={{
                  color: "white",
                  fontSize: "22px",
                  "@media screen and (max-width: 1024px)": {
                    fontSize: "16px",
                  },
                }}
              >
                Streamis is flexible. There are no annoying contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ backgroundColor: "#2c2c2c" }}
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<KeyboardArrowDownIcon sx={{ color: "white" }} />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
                <Typography
                sx={{
                  color: "white",
                  fontSize: "26px",
                  "@media screen and (max-width: 1024px)": {
                    fontSize: "16px",
                  },
                }}
              >
                {" "}
                What I can watch on Streamis ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography
                sx={{
                  color: "white",
                  fontSize: "22px",
                  "@media screen and (max-width: 1024px)": {
                    fontSize: "16px",
                  },
                }}
              >
                Streamis has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Streamis
                originals, and more. Watch as much as you want, anytime you
                want.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ backgroundColor: "#2c2c2c" }}
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={<KeyboardArrowDownIcon sx={{ color: "white" }} />}
              aria-controls="panel6bh-content"
              id="panel6bh-header"
            >
                <Typography
                sx={{
                  color: "white",
                  fontSize: "26px",
                  "@media screen and (max-width: 1024px)": {
                    fontSize: "16px",
                  },
                }}
              >
                {" "}
                Is Streamis good for kids ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography
                sx={{
                  color: "white",
                  fontSize: "22px",
                  "@media screen and (max-width: 1024px)": {
                    fontSize: "16px",
                  },
                }}
              >
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and films in their own space.
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

            <button className="bg-[#3d0000] hover:bg-[#fff] hover:text-[#000] transition duration-500 ease-in-out p-4 rounded text-xl font-extrabold max-lg:w-3/4">
              Get Started <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
