import HeroHome from "@/components/home-components/HeroHome";
import MeetingTypeList from "@/components/home-components/MeetingTypeList";
import React, { useEffect, useState } from "react";

export default function Home() {
  
  return (
    <section className="flex flex-col gap-5">
      <HeroHome/>
      <MeetingTypeList/>
    </section>
  );
}
