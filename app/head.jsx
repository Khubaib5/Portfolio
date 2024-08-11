"use client"
// components/BotpressWebchat.js
import {useEffect}  from 'react';

const BotpressWebchat = () => {
  useEffect(() => {
    // Dynamically load the Botpress scripts
    const injectScript = document.createElement('script');
    injectScript.src = 'https://cdn.botpress.cloud/webchat/v2/inject.js';
    injectScript.async = true;
    document.body.appendChild(injectScript);

    const configScript = document.createElement('script');
    configScript.src = 'https://mediafiles.botpress.cloud/270d7db1-3e2f-4f71-aefe-61f945259f91/webchat/v2/config.js';
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
