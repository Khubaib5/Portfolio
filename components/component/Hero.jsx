import AnimatedGradientText from "../../app/components/magicui/animated-gradient-text.";
import DotPattern from "../../app/components/magicui/dotPattern";
import TypingAnimation from "../../app/components/magicui/typing-animation";
import WordRotate from "../../app/components/magicui/word-rotate";
import { cn } from "../../lib/utils";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 mb-[10rem] lg:mb-[5rem] md:mb-[5rem] mt-[8rem]">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="flex flex-col gap-5 items-center justify-between">
        <div className="flex flex-row justify-center items-center gap-3 ">
          <TypingAnimation
            className="text-4xl font-bold text-black dark:text-white"
            text="Elevate with MKW"
          />
        </div>
        <WordRotate
          className="text-2xl lg:text-4xl md:text-3xl font-bold text-black dark:text-white "
          words={[
            "Web Developers",
            "App Developers",
            "FullStack Developers",
            "Responsive Design",
            "IOS Developers",
            "Android Developers",
            "AI Chatbots Developers",
          ]}
        />
        <div>
          <AnimatedGradientText>
            🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent w-[7rem]`
              )}
            >
              MKW Softwares
            </span>
          </AnimatedGradientText>
        </div>
      
      </div>
    </section>
  );
}
