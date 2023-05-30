import { useState } from "react";
import OpenOrderModal from "./order-form";
import { useEffect } from "react";

declare global {
  interface Window {
    bootstrap: any; // Add this line to declare the bootstrap property
  }
}

export default function Hero() {
  const handleOrderNowClick = () => {
    const modal = new window.bootstrap.Modal(
      document.getElementById("orderModal")
    );
    modal.show();
  };

  return (
    <>
      <div className="hero-parent" id="hero-parent-id">
        <div className="hero-area">
          <div className="hero-components">
            <div className="hero-text">
              <h1 className="hero-message-text text-center">
                <span className="color-change">Dominican</span>
                <span className="color-change"> cake</span>
                <span className="color-change"> that</span>
                <span className="color-change"> melts</span>
                <span className="color-change"> in</span>
                <span className="color-change"> your</span>
                <span className="color-change"> mouth</span>
              </h1>
            </div>
            <div className="order-btn">
              <button
                type="button"
                className="btn btn-outline-success btn-lg"
                // data-bs-toggle="modal"
                // data-bs-target="#orderModal"
                onClick={handleOrderNowClick}
              >
                Order now
              </button>
            </div>
          </div>
        </div>
      </div>

      <OpenOrderModal />
    </>
  );
}
