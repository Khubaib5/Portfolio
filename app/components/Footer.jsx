import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { GitHubLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons';
const Footer = () => {
  return (
    <footer className="bg-background text-white py-4">
    <div className="container mx-auto flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
      <p className="text-center sm:text-left">&copy; 2024 Khubaib Wasim. All rights reserved.</p>
      <div className="flex space-x-4">
      <div>
      <Helmet>
        <script
          src="https://platform.linkedin.com/badges/js/profile.js"
          async
          defer
          type="text/javascript"
        />
      </Helmet>
      {/* Your LinkedIn badge HTML goes here */}
      <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="m-khubaib-wasim-385884283" data-version="v1"><a class="badge-base__link LI-simple-link" className="text-black dark:text-white hover:dark:text-white hover:text-black" target="_blank" href="https://pk.linkedin.com/in/m-khubaib-wasim-385884283?trk=profile-badge"><Linkedin size={24}/></a></div>
              
    </div>
        <a
          href="https://www.instagram.com/mkw_softwares_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black dark:text-white hover:dark:text-white hover:text-black"
        >
          <Instagram size={24} />
        </a>
        <a
            href="https://github.com/Khubaib5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:dark:text-white hover:text-black"
          >
            <Github size={24} />
          </a>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
