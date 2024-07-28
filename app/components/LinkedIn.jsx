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
      <div className="badge-base LI-profile-badge">
        <a className="badge-base__link LI-simple-link"
            target="_blank"
            href="https://www.linkedin.com/in/m-khubaib-wasim/" >
         <LinkedinIcon />
        </a>
      </div>
    </div>
  );
};

export default LinkedInBadge;
