import React, { useEffect, useRef, useState } from "react";
import Meteors from "../components/magicui/meteors";
import GridPattern from "../components/magicui/grid-pattern";
import { cn } from "../../lib/utils";

const MeteorDemo = () => {
  const cardClasses =
    "relative flex items-center justify-center overflow-hidden rounded-lg border p-8 md:shadow-xl mb-8 hover:shadow-lg w-[28rem] max-w-[36rem] h-[28rem]";

  return (
    <>
      <h1 className="text-center font-bold text-black dark:text-white text-4xl mb-8">
        🚀 Our Approach
      </h1>
      <p className="text-center font-bold text-black dark:text-white text-2xl mb-8">
        No fluff, No filler, Just systems that work.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6">
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
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
            )}
          />
          <p className="z-10 whitespace-pre-wrap text-center text-xl font-medium sm:text-lg tracking-tighter text-black dark:text-white px-4">
            🧠 Step 1: Understand the Flow We start by mapping your customer
            journey — from the moment they opt in to the moment they book, buy,
            or bounce. You tell us where your team’s wasting time. We show you
            how an AI agent can take over — instantly.
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
            ⚙️ Step 2: Build Smart, Talk Human No generic bots here. We create
            voice or chat-based AI agents that: <br></br> ✔️ Qualify leads like a pro<br></br> ✔️
            Book sales calls directly to your calendar<br></br> ✔️ Answer common
            objections or FAQs in real time<br></br> ✔️ Trigger follow-ups, handoffs, and
            CRM updates automatically All built with custom scripts, natural
            flows, and clean logic.
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
            🔁 Step 3: Test, Train, and Optimize We launch fast — then we watch
            how leads respond. If it’s off, we tweak. If it works, we scale. And
            yes, you’ll get:<br></br> 
            ✔️ Real-time test calls  <br></br>
            ✔️ Performance reviews  <br></br>
            ✔️ Ongoing support if you want it So your AI doesn’t just launch — it
            learns and improves.
          </p>
        </div>
      </div>
    </>
  );
};

export default MeteorDemo;
