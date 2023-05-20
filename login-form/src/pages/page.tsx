import { useState } from "react";
import NavBar from "./navbar";
import Hero from "./heroArea";
import HowItWorks from "./howItWorks";
import WhatWeMake from "./what-we-make";
import Gallery from "./gallery";

export default function Page() {
  return (
    <>
      <NavBar />
      <Hero />
      <WhatWeMake />
      <HowItWorks />
      <Gallery />
    </>
  );
}

// add gallery carusel
// add footer
