import React from "react";
import Meteors from "../components/magicui/meteors";
import GridPattern from "../components/magicui/grid-pattern";
import { cn } from "../../lib/utils";

const MeteorDemo = () => {
  
  return (
    <>
      <h1 className="text-center font-bold text-black dark:text-white text-4xl">
        My Approach
      </h1>
      <div className="flex items-center justify-center mt-5">
        <div className="relative flex lg:h-full lg:w-full w-[20rem] max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border p-20 md:shadow-xl mb-8 hover:dark:shadow-white hover:dark:shadow-lg hover:shadow-black hover:shadow-lg">
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
          <p className="z-10 whitespace-pre-wrap text-center text-xl font-medium sm:text-lg tracking-tighter text-black dark:text-white">
          We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements.
          </p>
        </div>
      </div>
    </>
  );
};

export default MeteorDemo;
