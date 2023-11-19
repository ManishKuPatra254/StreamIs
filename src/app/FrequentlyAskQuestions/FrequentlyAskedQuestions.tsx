"use client";
import React, { Fragment, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TextField from "@mui/material/TextField";

export function FrequentlyAskedQuestions() {
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  const handleLabelClick = () => {
    setIsParagraphVisible((prev) => !prev);
  };

  return (
    <Fragment>
      <div className="mt-10">
        <div className="">
          <h1 className="text-center text-5xl font-extrabold max-lg:text-3xl p-2">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="mt-10 ">
          <ul className="list:none p-2 flex flex-col gap-4">
            <li>
              <label
                htmlFor="first"
                onClick={handleLabelClick}
                className=" cursor-pointer bg-neutral-900 flex items-center justify-start w-3/4 m-auto p-6 text-3xl  text-center max-lg:w-11/12 max-lg:text-lg"
              >
                What is Streamis ?
              </label>
              <div
                className="text-justify"
                style={{ display: isParagraphVisible ? "block" : "none" }}
              >
                <p className="hidden">
                  Streamis is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  – on thousands of internet-connected devices. <br /> <br />
                  You can watch as much as you want, whenever you want, without
                  a single ad – all for one low monthly price. There is always
                  something new to discover, and new TV shows and movies are
                  added every week!
                </p>
              </div>
            </li>

            <li>
              <label
                htmlFor="second"
                className="cursor-pointer bg-neutral-900 flex items-center justify-start w-3/4 m-auto p-6 text-3xl  text-center max-lg:w-11/12 max-lg:text-lg"
              >
                How much does Streamis cost ?
              </label>
              <div className="hidden">
                <p>
                  Watch Streamis on your smartphone, tablet, Smart TV, laptop,
                  or streaming device, all for one fixed monthly fee. Plans
                  range from ₹ 100 to ₹ 400 a month. No extra costs, no
                  contracts.
                </p>
              </div>
            </li>

            <li>
              <label
                htmlFor="third"
                className="cursor-pointer bg-neutral-900 flex items-center justify-start w-3/4 m-auto p-6 text-3xl  text-center max-lg:w-11/12 max-lg:text-lg"
              >
                Where can I watch ?
              </label>
              <div className="hidden">
                <p>
                  Watch anywhere, anytime. Sign in with your Streamis account to
                  watch instantly on the web at streamis.com from your personal
                  computer or on any internet-connected device that offers the
                  Streamis app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles.
                  <br /> <br />
                  You can also download your favourite shows with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while you
                  are on the go and without an internet connection. Take
                  Streamis with you anywhere.
                </p>
              </div>
            </li>

            <li>
              <label
                htmlFor="fourth"
                className="cursor-pointer bg-neutral-900 flex items-center justify-start w-3/4 m-auto p-6 text-3xl  text-center max-lg:w-11/12 max-lg:text-lg"
              >
                How do I cancel ?
              </label>
              <div className="hidden">
                <p>
                  Streamis is flexible. There are no annoying contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </p>
              </div>
            </li>

            <li>
              <label
                htmlFor="fifth"
                className="cursor-pointer bg-neutral-900 flex items-center justify-start w-3/4 m-auto p-6 text-3xl  text-center max-lg:w-11/12 max-lg:text-lg"
              >
                What I can watch on Streamis ?
              </label>
              <div className="hidden">
                <p>
                  Streamis has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Streamis
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </p>
              </div>
            </li>

            <li>
              <label
                htmlFor="sixth"
                className="cursor-pointer bg-neutral-900 flex items-center justify-start w-3/4 m-auto p-6 text-3xl  text-center max-lg:w-11/12 max-lg:text-lg"
              >
                Is Streamis good for kids ?
              </label>
              <div className="hidden">
                <p>
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and films in their own space.
                  <br /> <br />
                  Kids profiles come with PIN-protected parental controls that
                  let you restrict the maturity rating of content kids can watch
                  and block specific titles you don’t want kids to see.
                </p>
              </div>
            </li>
          </ul>
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
