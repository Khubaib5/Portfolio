import React, { useEffect, useRef, useState } from "react";
import Meteors from "../components/magicui/meteors";
import GridPattern from "../components/magicui/grid-pattern";
import { cn } from "../../lib/utils";


const MeteorDemo = () => {
  const cardClasses =
    "relative flex items-center justify-center overflow-hidden rounded-lg border p-8 md:shadow-xl mb-8 hover:shadow-lg w-[28rem] max-w-[36rem] h-[28rem]"

   
  return (
    <>
      <h1 className="text-center font-bold text-black dark:text-white text-4xl mb-8">
        Our Approach
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-6">

        <div className={`${cardClasses} hover:border hover:border-white`} >
          <Meteors number={30}/>
          <GridPattern
            squares={[
              [4, 4],
              [5, 1],
              [8, 2],
              [6, 6],
              [10, 5],
              [13, 3],
            ]}
            className={cn(
              "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
            )}
          />
          <p className="z-10 whitespace-pre-wrap text-center text-xl font-medium sm:text-lg tracking-tighter text-black dark:text-white px-4">
            We'll collaborate to map out your website's goals, target audience,
            and key functionalities. We'll discuss things like site structure,
            navigation, and content requirements.
          </p>
        </div>
        <div className={`${cardClasses} hover:border hover:border-white`}>
          <Meteors number={30} />
          <GridPattern
            squares={[
              [4, 4],
              [5, 1],
              [8, 2],
              [6, 6],
              [10, 5],
              [13, 3],
            ]}
            className={cn(
              "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 "
            )}
          />
          <p className="z-10 whitespace-pre-wrap text-center text-xl font-medium sm:text-lg tracking-tighter text-black dark:text-white px-4">
            At MKW Softwares, we craft apps that align with your business goals.
            Our process includes intuitive design, robust development, seamless
            integration, and rigorous testing, followed by ongoing support to
            ensure your app's success.
          </p>
        </div>
        <div className={`${cardClasses} hover:border hover:border-white`}>
          <Meteors number={30} />
          <GridPattern
            squares={[
              [4, 4],
              [5, 1],
              [8, 2],
              [6, 6],
              [10, 5],
              [13, 3],
            ]}
            className={cn(
              "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 "
            )}
          />
          <p className="z-10 whitespace-pre-wrap text-center text-xl font-medium sm:text-lg tracking-tighter text-black dark:text-white px-4">
            Our AI chatbot development focuses on creating engaging and
            intelligent conversational experiences. We design user-friendly
            flows, leverage natural language processing, and provide continuous
            support to refine and enhance the chatbot's capabilities.
          </p>
        </div>
      </div>
    </>
  );
};

export default MeteorDemo;
