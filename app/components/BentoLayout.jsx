import { BentoCard, BentoGrid } from "../components/magicui/bento-grid";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

const features = [
  {
    Icon: FileTextIcon,
    name: "🚀 Automate Like a Savage with AI-Powered Systems Built for Growth",
    description: "At MKW Softwares, we build custom AI agents that do the boring sales work for you — so you can close more and stress less.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        className="absolute -right-20 lg:top-20 opacity-80 w-fit sm:top-10"
        src="/b5.svg"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "🔥 Why Clients Work With Us:",
    description:
      "✔️ You get real results — not just “cool tech",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        className="absolute lg:-top-40 w-[52rem] h-[50rem] opacity-40 -top-[15rem] md:-top-[5rem]"
        src="/b1.svg"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "🛠️ We Build. You Scale.",
    description:
      "We set it up, test it live, tweak it, and support it — so it works for your offer, not someone else's template.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        className="absolute -right-2 lg:w-fit opacity-80 h-[10rem] md:w-[30rem] md:-right-5"
        src="/b4.svg"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Always Punctual",
    description:
      "We pride ourselves on punctuality, ensuring that projects are completed on time and to the highest standards.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        className="absolute -right-20 bottom-20 md:-right-5 opacity-80 top-5"
        src="/bg-3.png"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Ready to stop babysitting leads and start closing more?",
    description:
      "Choosing MKW Softwares means partnering with a team committed to quality, innovation, and your business's success",
    href: "/",
    cta: "Learn more",
    background: (
      <img className="absolute -right-20 -top-15 opacity-50 " src="/bg7.png" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

const BentoLayout = () => {
  return (
    <section id="about">
      <h1 className="text-center font-bold text-[3rem]">About MKW</h1>
      <BentoGrid className="lg:grid-rows-3 mb-20 px-6 ">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
};

export default BentoLayout;
