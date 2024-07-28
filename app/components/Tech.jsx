import { cn } from "../../lib/utils";
import IconCloud from "../components/magicui/icon-cloud";
import DotPattern from "./magicui/dotPattern";

const slugs = [
  "javascript",
  "react",
  "android",
  "html5",
  "css3",
  "nextdotjs",
  "prisma",
  "postgresql",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "clerk",
  "native",
  "mongodb",
  "sanity",
  "redux",
  "openai",
  "ios",
  "botpress",
  "aws",
  "graphql",
  "flutter",
  "swift",
  "kotlin",
  "ruby",
  "python",
  "java",
];

function IconCloudDemo() {
  return (
    <div>
      <h2 className="font-bold text-center text-4xl text-black dark:text-white mb-5">Our Tech Stack</h2>
      <div className="relative shadow-md flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <DotPattern
      className={cn(
        "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
      )}
    />
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
}
export default IconCloudDemo;
