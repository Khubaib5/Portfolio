import React from 'react';
import { Github, GithubIcon, Instagram } from 'lucide-react';
import LinkedInBadge from "./LinkedIn"; 

const Footer = () => {
  return (
    <footer className="bg-background text-black dark:text-white py-4">
    <div className="container mx-auto flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
      <p className="text-center sm:text-left">&copy; 2024 Khubaib Wasim. All rights reserved.</p>
      <div className="flex space-x-4">
      <div>
     
     

      <LinkedInBadge />
              
    </div>
        <a
          href="https://www.instagram.com/mkw_softwares_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black dark:text-white hover:dark:text-white hover:text-black "
        >
          <Instagram  />
        </a>
        <a
            href="https://github.com/Khubaib5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:dark:text-white hover:text-black"
          >
            <GithubIcon  />
          </a>
      </div>
    </div>
  </footer>
  );
};

export default Footer; 
