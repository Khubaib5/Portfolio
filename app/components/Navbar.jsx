"use client";
import Link from "next/link";
import { navLinks } from "../../constants";
import { Menu, Sun, Moon, X as Cross } from "lucide-react"; // Imported Cross and Moon correctly
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import Image from "next/image";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [mounted, setMounted] = useState(false); // For client-side rendering
  const { setTheme } = useTheme();

  // Ensure the component is mounted before rendering client-side code
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpenMobile = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  if (!mounted) {
    // Avoid rendering until mounted
    return null;
  }

  return (
    <>
      <nav className="py-5 bg-transparent relative top-0 z-10 w-full">
        <div className="max-w-[1450px] w-[90%] mx-auto flex justify-between items-center">
          <Link href={"/"}>
            <div className="flex items-center gap-3">
              <Image 
              src={"/Logo.jpeg"}
              alt="logo"
              width={70}
              height={70}
              className="rounded-full"
              />
              <h1 className="text-black font-semibold uppercase text-xl dark:text-white">
                Khubaib
              </h1>
            </div>
          </Link>
          <ul className="flex gap-16 items-center max-md:hidden">
            {navLinks.map((link, index) => (
              <Link href={link.route} key={index}>
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
  
          <div className="max-md:flex justify-center items-center ">
            <div className="gap-5 md:gap-3 flex items-center justify-center">
              <div className="gap-5"></div>
              <Link href={"#projects"}>
                <Button className="hidden">See my projects</Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="flex items-center justify-center">
                    <Button variant="outline" size="icon">
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div
              className="md:hidden text-3xl cursor-pointer text-black gap-4"
              onClick={handleOpenMobile}
            >
              {openMobileMenu ? <Cross className="dark:text-white ml-3"/> : <Menu className="dark:text-white ml-3"/>}
            </div>

            {openMobileMenu && (
              <ul className="md:hidden bg-black absolute top-14 right-5 px-4 py-6 text-center text-white rounded-lg flex flex-col gap-4 shadow-md mt-4">
                {navLinks.map((link, index) => (
                  <Link
                    href={link.route}
                    key={index}
                    onClick={() => setOpenMobileMenu(false)}
                  >
                    <li>{link.name}</li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
