import React from "react";
import iPhoneScreen from "../assets/iPhone_02.png";
import { MdKeyboardVoice } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TbVacuumCleaner, TbAirConditioningDisabled } from "react-icons/tb";
import { BiCopy } from "react-icons/bi";

const Features = () => {
  return (
    <section className="flex flex-col py-20 mt-32" id="features">
      <h2 className="text-black text-5xl font-semibold text-center mb-10">
        Awensome App Features
      </h2>
      <div className="container mx-auto grid grid-cols-3 md:grid-cols-3">
        <div className="flex flex-col justify-center gap-10">
          <article className="flex items-start justify-start gap-2">
            <div className="flex">
              <MdKeyboardVoice className="text-4xl" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Voice Assistant</h2>
              <p className="text-lg">
                Voice assistant responds to your verbal commnads to activate
                various smart applications throught your home.
              </p>
            </div>
          </article>
          <article className="flex items-start justify-start gap-2">
            <div className="flex">
              <IoNotifications className="text-3xl" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Notification</h2>
              <p className="text-lg">
                Notifications allow your smart home to communicate with users
                about important device-relates events or changes. You can
                implement notifications to alert users to timely device events.
              </p>
            </div>
          </article>
          <article className="flex items-start justify-start gap-2">
            <div className="flex">
              <BiCopy className="text-4xl" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Scenes</h2>
              <p className="text-lg">
                A scene is a saved state of one or more entitites tat can be
                instigated with a single service call.
              </p>
            </div>
          </article>
        </div>
        <div className="flex items-center justify-center h-full">
          <img src={iPhoneScreen} alt="iPhone14 Screen Mockup" />
        </div>
        <div className="flex flex-col justify-center gap-10">
          <article className="flex items-start justify-start gap-2">
            <div className="flex">
              <IoMdAddCircleOutline className="text-4xl" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Add devices</h2>
              <p className="text-lg">
                All the devices that you can control through the app can be
                added in various ways.
              </p>
            </div>
          </article>
          <article className="flex items-start justify-start gap-2">
            <div className="flex">
              <TbAirConditioningDisabled className="text-3xl" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Conditioner</h2>
              <p className="text-lg">
                Set de light and humidity yourself or set up the devices
                automatically.
              </p>
            </div>
          </article>
          <article className="flex items-start justify-start gap-2">
            <div className="flex">
              <TbVacuumCleaner className="text-4xl" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Robot cleaner</h2>
              <p className="text-lg">
                If you haven't planned and you want to turn on the vacuum
                cleaner not accordign to schedule then it is enough to choose a
                room and start the robot.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Features;
