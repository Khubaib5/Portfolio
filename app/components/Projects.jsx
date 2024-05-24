"use client";
import React from "react";
import { MagicCard, MagicContainer } from "../components/magicui/magic-card";
// import { ChevronRight } from "lucide-react";
import AnimatedGradientText from "../components/magicui/animated-gradient-text.";
import { cn } from "../../lib/utils";
import { Button } from "../../components/ui/button";
import DotPattern from "./magicui/dotPattern";

const Projects = () => {
  return (
    <div>
      <h1 className="font-bold text-center text-4xl mb-5 dark:text-white">
        My Projects
      </h1>
      <MagicContainer
        className={
          "flex h-[90rem] w-full flex-col gap-4 lg:h-[500px] lg:flex-row mb-[5rem] md:h-[86rem]"
        }
      >
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
          )}
        />
        <MagicCard
          borderWidth={3}
          className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-20 shadow-2xl"
        >
          <div className=" w-full flex flex-row mx-auto">
            <img
              src="/Pro 1.png"
              alt="bg"
              className="w-[34rem] absolute top-1 px-3 left-0 h-[16rem] rounded-md dark:opacity-70 md:w-[65rem]"
            />
            <div className=" w-full  text-white absolute bottom-5 px-3 left-0">
              <AnimatedGradientText>
                🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  E-Commerce Website
                </span>
              </AnimatedGradientText>
              <br />
              <p className="dark:text-white text-black md:text-center md:text-lg">
                E-Commerce website created using Next JS, tailwindcss and Sanity
              </p>
              <div className="md:flex md:items-center md:justify-center">
              <Button
                className="mt-3"
                onClick={() => {
                  window.open("https://e-commerc-sanity.vercel.app/", "_blank");
                }}
              >
                Check live Site
              </Button>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-20 shadow-2xl">
          <div className=" w-full flex flex-row mx-auto">
            <img
              src="/Pro 2.png"
              alt="bg"
              className="w-[34rem] absolute top-1 px-3 left-0 h-[16rem] rounded-md dark:opacity-70 md:w-[65rem]"
            />
            <div className=" w-full  text-white absolute bottom-5 px-3 left-0">
              <br />
              <AnimatedGradientText>
                🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  LinkedIn Clone
                </span>
              </AnimatedGradientText>
              <br />
              <p className="dark:text-white text-black md:text-center md:text-lg">
                LinkedIn clone created using Next JS, Tailwindcss, Clerk, and
                MongoDB
              </p>
              <div className="md:flex md:items-center md:justify-center">
                <Button
                  className="mt-3"
                  onClick={() => {
                    window.open(
                      "https://linked-in-clone-phi-ivory.vercel.app/",
                      "_blank"
                    );
                  }}
                >
                  Check live Site
                </Button>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-20 shadow-2xl">
          <div className=" w-full flex flex-row mx-auto">
            <img
              src="/Pro 3.png"
              alt="bg"
              className="w-[34rem] absolute top-1 px-3 left-0 h-[16rem] rounded-md dark:opacity-70 md:w-[65rem]"
            />
            <div className=" w-full  text-white absolute bottom-5 px-3 left-0">
              <br />
              <AnimatedGradientText>
                🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  Job Portal
                </span>
              </AnimatedGradientText>
              <br />
              <p className="dark:text-white text-black md:text-center md:text-lg">
                Job portal created using Next JS, Tailwindcss, Prisma, and
                MongoDB
              </p>
              <div className="md:flex md:items-center md:justify-center">
              <Button
                className="mt-3 "
                onClick={() => {
                  window.open(
                    "https://job-board-ruby-theta.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Check live Site
              </Button>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
      </MagicContainer>
    </div>
  );
};

export default Projects;
