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
    name: "Always eager to Learn new Technologies",
    description: "I constantly try to improve",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 lg:top-20 opacity-80 w-fit sm:top-10" src="/b5.svg"/>,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Tech enthusiast with a passion for development.",
    description: "",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute lg:-top-40 w-[52rem] h-[50rem] opacity-40 -top-[15rem] md:-top-[5rem]"  src="/b1.svg"/>,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Currently starting with an agency",
    description: "MKW Softwares, where we provide services for Web development",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-2 lg:w-fit opacity-80 h-[10rem] md:w-[30rem] md:-right-5" src="/b4.svg"/>,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Always Punctual",
    description: "I deliver my work before the deadlines",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 bottom-20 md:-right-5 opacity-80 top-5" src="/bg-3.png"/>,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Do you want to start a project together?",
    description:
      "I will prove that your decision to choose me was the best",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-15 opacity-50 " src="/bg7.png"/>,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

const BentoLayout = () => {
  return (
    <BentoGrid className="lg:grid-rows-3 mb-20 px-6 ">
    {features.map((feature) => (
      <BentoCard key={feature.name} {...feature}/>
    ))}
  </BentoGrid>
  )
}

export default BentoLayout