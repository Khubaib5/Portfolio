"use client"
import { LinkedinIcon } from "lucide-react";
import React, { useEffect } from "react";

const LinkedInBadge = () => {
  useEffect(() => {
    // Load the LinkedIn script
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="badge-base LI-profile-badge"
           data-locale="en_US"
           data-size="medium"
           data-theme="dark"
           data-type="VERTICAL"
           data-vanity="m-khubaib-wasim-385884283"
           data-version="v1">
        <a className="badge-base__link LI-simple-link"
            target="_blank"
            href="https://pk.linkedin.com/in/m-khubaib-wasim-385884283?trk=profile-badge" >
         <LinkedinIcon />
        </a>
      </div>
    </div>
  );
};

export default LinkedInBadge;
