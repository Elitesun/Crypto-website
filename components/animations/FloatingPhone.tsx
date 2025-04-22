"use client";
import { motion } from "framer-motion";
import { BatteryCharging, Wifi } from "lucide-react";

export function DemoFloatingPhone() {
  return (
    <section className="grid place-content-center mt-2">
      <FloatingPhone />
    </section>
  );
}

const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-[#CCFF00]"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-[#CCFF00] border-l-[#E5FF66] border-t-[#E5FF66] bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900" />
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <Wifi className="text-[#CCFF00] size-4" />
        <BatteryCharging className="text-[#CCFF00] size-4" />
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-[#111111]">
      {/* Crypto logo */}
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-[#CCFF00]"
      >
        <path d="M25 2L45 35H5L25 2Z" />
        <circle cx="25" cy="25" r="10" />
      </svg>

      <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] border-[#CCFF00] bg-[#CCFF00] py-2 text-sm font-bold text-black backdrop-blur hover:bg-[#111111] hover:text-[#CCFF00] transition-all duration-300">
        Start Trading
      </button>

      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-[#CCFF00] opacity-20 blur-xl" />
    </div>
  );
};