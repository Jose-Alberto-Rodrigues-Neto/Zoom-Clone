"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState(new Date())

  const meetingTime = "13:30"
  const meetingDate = "Friday, May 31, 2024"

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId)
  }, []);

  const currentDate = (new Intl.DateTimeFormat("en-us", {dateStyle: "full"})).format(time)
  const currentTime = time.toLocaleTimeString("pt-br", {hour: '2-digit', minute: '2-digit'})
  
  return (
  <section>

    <main className="relative">
    <h1 className="absolute top-4 left-5 glassmorphism px-2 py-1 rounded text-center text-sm md:text-lg text-white font-sans">
        Upcoming Meeting at: {meetingTime} ({meetingDate})
      </h1>
      <h1 className="absolute flex flex-col lg:flex-row lg:items-baseline bottom-6 left-10 text-3xl sm:text-5xl lg:text-6xl text-white font-sans font-bold gap-2 lg:gap-4 ">
        {currentTime}
        <div className="text-base sm:text-lg md:text-2xl lg:text-4xl font-medium text-slate-300 lg:text-white">
          {currentDate}
        </div>
      </h1>
      <Image 
      src="/images/hero-background.png"
      width={2803}
      height={2225}
      alt="Hero Image"
      className="h-72 w-full rounded-2xl object-cover static cursor-pointer"
      />

    </main>

  </section>
  );
}
