"use client";
// components/BotpressWebchat.js
import { useEffect } from 'react';

const BotpressWebchat = () => {
  useEffect(() => {
    // Dynamically load the Botpress scripts
    const injectScript = document.createElement('script');
    injectScript.src = 'https://cdn.botpress.cloud/webchat/v2.1/inject.js';
    injectScript.async = true;
    document.body.appendChild(injectScript);

    const configScript = document.createElement('script');
    configScript.src = 'https://mediafiles.botpress.cloud/e9ae0766-531f-404c-b3d7-5ce841aeb19c/webchat/v2.1/config.js';
    configScript.defer = true;
    document.body.appendChild(configScript);

    return () => {
      // Clean up the scripts if needed
      document.body.removeChild(injectScript);
      document.body.removeChild(configScript);
    };
  }, []);

  return null;
};

export default BotpressWebchat;
