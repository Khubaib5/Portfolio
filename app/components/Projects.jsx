"use client";
import React from "react";
import { MagicCard, MagicContainer } from "../components/magicui/magic-card";
import AnimatedGradientText from "../components/magicui/animated-gradient-text.";
import { cn } from "../../lib/utils";
import { Button } from "../../components/ui/button";
import DotPattern from "./magicui/dotPattern";

const Projects = () => {
  return (
    <section id="work">
      <h1 className="font-bold text-center text-4xl mb-5 dark:text-white">
        Our Projects
      </h1>
      <div className="flex justify-center items-center flex-wrap">
        <MagicContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 w-full">
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
            )}
          />
          {[...Array(6)].map((_, index) => (
            <MagicCard
              key={index}
              borderWidth={3}
              className="relative flex flex-col w-full cursor-pointer overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] shadow-2xl"
            >
              <img
                src={`/${index + 1}.png`}
                alt={`Project ${index + 1}`}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 text-center flex-grow">
                <AnimatedGradientText>
                  🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                  <span
                    className={cn(
                      `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                    )}
                  >
                    {index === 0
                      ? "Lead Generation Chatbot"
                      : index === 1
                      ? "Appointment setting ChatBot"
                      : index === 2
                      ? "Meal Plan Chatbot"
                      : index === 3
                      ? "AI Persona Chatbot"
                      : index === 4
                      ? "GYM Support Chatbot"
                      : "Dental AI Assistant"}
                  </span>
                </AnimatedGradientText>
                <p className="dark:text-white text-black md:text-center md:text-lg mt-2">
                  {index === 0
                    ? "This AI chatbot enhances customer engagement by capturing leads and setting appointments via Calendly, automatically saving the data to a CSV file. Priced at $3,000, it’s a valuable tool for streamlining lead management."
                    : index === 1
                    ? "This chatbot streamlines your appointment scheduling by handling client bookings, sending reminders, and reducing no-shows, all while offering 24/7 support. Priced at $1,000, it’s a cost-effective solution for efficient appointment management."
                    : index === 2
                    ? " This AI-powered chatbot creates personalized meal plans based on your dietary preferences and goals, helping you eat healthier and save time. Priced at $2,000, it offers a smart solution for customized nutrition."
                    : index === 3
                    ? "This AI Persona chatbot, inspired by Ali Abdaal, delivers expert advice on productivity and financial freedom, offering actionable insights to help you optimize your time and achieve your financial goals. Priced at $2,600, it reflects the extensive knowledge required to train the bot."
                    : index === 4
                    ? "Our Gym Support Bot provides comprehensive information about gym memberships, class schedules, location details, and more. Get instant answers to your fitness queries and stay updated on gym timings and services. Priced at $2,500, this bot offers complete gym-related assistance."
                    : "This AI-powered chatbot is designed specifically for dental practices, enhancing patient engagement by capturing highly qualified leads and saving them directly to a database. Priced at $3,000, it’s a powerful solution for optimizing patient appointment scheduling and lead management."}
                </p>
                <Button
                  className="mt-3"
                  onClick={() => {
                    window.open(
                      index === 0
                        ? "https://mediafiles.botpress.cloud/e03ae7dc-96eb-4d2d-8150-c2a5426613df/webchat/bot.html"
                        : index === 1
                        ? "https://mediafiles.botpress.cloud/d4bf01dd-086f-4417-b202-ed97e90d5c0b/webchat/bot.html"
                        : index === 2
                        ? "https://mediafiles.botpress.cloud/aa6aa87c-495e-46f8-bcef-fb742685a3c8/webchat/bot.html"
                        : index === 3
                        ? "https://www.chatbase.co/chatbot-iframe/GbgG2YNPVERHOqBZ8A2O7"
                        : index === 4
                        ? "https://www.chatbase.co/chatbot-iframe/qgTpjQgFFIKwaKk2spZmh"
                        : "https://mediafiles.botpress.cloud/9ec1b023-9fa8-4fa8-b6f4-b4ccfb6a43c9/webchat/bot.html"
                    );
                  }}
                >
                  {index === 0
                    ? "Check out the Bot"
                    : "Check out the Bot"}
                </Button>
              </div>
              <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
            </MagicCard>
          ))}
        </MagicContainer>
      </div>
    </section>
  );
};

export default Projects;
