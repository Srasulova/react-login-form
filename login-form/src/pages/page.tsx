import { useState } from "react";
import NavBar from "./navbar";
import Hero from "./heroArea";
import HowItWorks from "./howItWorks";

export default function Page() {
  return (
    <>
      <NavBar />
      <Hero />
      <HowItWorks />
    </>
  );
}

// add gallery carusel
// add footer
