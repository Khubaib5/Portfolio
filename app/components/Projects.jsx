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
        What We Build
      </h1>
      <div className="flex justify-center items-center flex-wrap">
        <MagicContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-20 w-full max-w-5xl" // Adjusted grid-cols and added max-width
        >
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
            )}
          />
          {[...Array(4)].map((_, index) => (
            <MagicCard
              key={index}
              borderWidth={3}
              className="relative flex flex-col w-full cursor-pointer overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] shadow-2xl"
            >
              <img
                src={`/${index + 1}.png`}
                alt={`Project ${index + 1}`}
                className="w-full h-60 object-cover" // object-cover helps maintain aspect ratio
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
                      ? "1️⃣ AI Client Proposal Architect"
                      : index === 1
                      ? "2️⃣ AI Cyber Qualification Agent"
                      : index === 2
                      ? "3️⃣ AI Client-Fit Accelerator"
                      : index === 3
<<<<<<< HEAD
                      ? "4️⃣ AI Business Lead Qualifier"
                      : ""}
=======
                      ? "AI Persona Chatbot"
                      : index === 4
                      ? "GYM Support Chatbot"
                      : "Dental AI Assistant"}
>>>>>>> e5aae03849a00b674f6a50f7934cfb8779e49a5c
                  </span>
                </AnimatedGradientText>
                <p className="dark:text-white text-black md:text-center md:text-lg mt-2">
                  {index === 0
<<<<<<< HEAD
                    ? "For content agencies & creative service businesses📄 An AI-powered tool that instantly transforms client briefs or onboarding forms into structured, pitch-ready proposals. No more manual formatting, bloated Google Docs, or last-minute copy-paste jobs. Let your team focus on closing, not writing. 🧠 Built for speed, clarity, and conversion."
                    : index === 1
                    ? "For cybersecurity consultants & IT security firms 🛡 A smart voice agent that calls inbound leads, qualifies them based on your ideal client profile, and books the serious ones — automatically. Works 24/7. No missed leads. No wasted consults. Just solid conversations with companies who actually need protection. 🔐 It’s like having a security-aware SDR, minus the salary."
                    : index === 2
                    ? " For fitness coaches, gym consultants & performance specialists 💪 A voice-based AI assistant that screens new client inquiries, qualifies them by fitness goals & budget, and books the ones who match your program. Say goodbye to “just curious” leads and hello to action-takers. Focus your energy where it counts — with clients who are ready to commit. 🔥 Automate your intake. Keep your calendar clean. Close faster."
                    : index === 3
                    ? "For business consultants, strategy advisors & service pros 📈 Your personal AI rep that speaks to inbound leads the moment they opt in — asking smart pre-qual questions, filtering for fit, and scheduling the call. No more chasing dead leads or wasting time on “free advice” calls. You show up to calls where the deal’s already halfway closed. 📊 More qualified consults. Less calendar clutter."
                    : ""}
                </p>
=======
                    ? "This AI chatbot enhances customer engagement by capturing leads and setting appointments via Calendly, automatically saving the data to a CSV file."
                    : index === 1
                    ? "This chatbot streamlines your appointment scheduling by handling client bookings, sending reminders, and reducing no-shows, all while offering 24/7 support."
                    : index === 2
                    ? " This AI-powered chatbot creates personalized meal plans based on your dietary preferences and goals, helping you eat healthier and save time."
                    : index === 3
                    ? "This AI Persona chatbot, inspired by Ali Abdaal, delivers expert advice on productivity and financial freedom, offering actionable insights to help you optimize your time and achieve your financial goals, it reflects the extensive knowledge required to train the bot."
                    : index === 4
                    ? "Our Gym Support Bot provides comprehensive information about gym memberships, class schedules, location details, and more. Get instant answers to your fitness queries and stay updated on gym timings and services, this bot offers complete gym-related assistance."
                    : "This AI-powered chatbot is designed specifically for dental practices, enhancing patient engagement by capturing highly qualified leads and saving them directly to a database, it’s a powerful solution for optimizing patient appointment scheduling and lead management."}
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
>>>>>>> e5aae03849a00b674f6a50f7934cfb8779e49a5c
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