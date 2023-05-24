import React, { useState } from "react";
import NavBar from "./navbar";
import Hero from "./heroArea";
import HowItWorks from "./howItWorks";
import WhatWeMake from "./what-we-make";
import GalleryExpanded from "./gallery-expanded";
import GalleryCollapsed from "./gallery-collapsed";
import Footer from "./footer";

export default function Page() {
  const [isGalleryExpanded, setIsGalleryExpanded] = useState(false);

  const handleMoreClick = () => {
    setIsGalleryExpanded(true);
  };

  const handleLessClick = () => {
    setIsGalleryExpanded(false);
  };

  return (
    <>
      <NavBar />
      <Hero />
      <WhatWeMake />
      <HowItWorks />
      {isGalleryExpanded ? (
        <GalleryExpanded onLessClick={handleLessClick} />
      ) : (
        <GalleryCollapsed handleMoreClick={handleMoreClick} />
      )}
      <Footer />
    </>
  );
}
