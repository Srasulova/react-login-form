import { useState } from "react";
import Image from "next/image";
import Cake from "../cake picture.jpg";

export default function Hero() {
  return (
    <>
      <div className="hero-parent">
        <div className="hero-area">
          <div className="hero-area-picture">
            <Image src={Cake} alt="cake picture" className="cake-picture" />
          </div>
        </div>
      </div>
    </>
  );
}
