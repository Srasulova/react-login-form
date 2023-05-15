import Image from "next/image";
import { useState } from "react";
import CakeIcon from "../assets/cake.png";
import CakePictureIcon from "../assets/cake-picture-icon.png";
import Customer from "../assets/customer.png";
import delivery from "../assets/delivery-service.png";
import order from "../assets/order.png";
import piping from "../assets/piping.png";

export default function HowItWorks() {
  return (
    <>
      <div className="how-it-works mx-auto d-flex flex-column">
        <h2 className="how-it-works-header text-center fs-1 fw-bolder my-5 text-success">
          How it works
        </h2>
        <div className="icons container row mx-auto gap-5 text-center">
          <div className="row mx-auto icons-row">
            <div className="pick-flavor col-4">
              <figure className="figure">
                <Image
                  src={CakeIcon}
                  className="figure-img img-fluid rounded"
                  alt="cake icon"
                  width="200"
                  height="200"
                />
                <figcaption className="figure-caption">
                  Pick a cake flavor
                </figcaption>
              </figure>
            </div>

            <div className="pick-flavor col-4">
              <figure className="figure">
                <Image
                  src={piping}
                  className="figure-img img-fluid rounded"
                  alt="piping icon"
                  width="240"
                  height="240"
                />
                <figcaption className="figure-caption">
                  Pick a filling flavor
                </figcaption>
              </figure>
            </div>

            <div className="pick-flavor px-5 col-4">
              <figure className="figure">
                <Image
                  src={CakePictureIcon}
                  className="figure-img img-fluid rounded"
                  alt="cake picture icon"
                  width="200"
                  height="200"
                />
                <figcaption className="figure-caption">
                  Upload the design picture
                </figcaption>
              </figure>
            </div>

            <div className="pick-flavor col-4">
              <figure className="figure">
                <Image
                  src={order}
                  className="figure-img img-fluid rounded"
                  alt="order icon"
                  width="200"
                  height="200"
                />
                <figcaption className="figure-caption">
                  Place your order
                </figcaption>
              </figure>
            </div>

            <div className="pick-flavor px-5 col-4">
              <figure className="figure">
                <Image
                  src={delivery}
                  className="figure-img img-fluid rounded"
                  alt="cake icon"
                  width="200"
                  height="200"
                />
                <figcaption className="figure-caption">
                  Receive the cake
                </figcaption>
              </figure>
            </div>

            <div className="pick-flavor px-5 col-4">
              <figure className="figure">
                <Image
                  src={Customer}
                  className="figure-img img-fluid rounded"
                  alt="happy customer icon"
                  width="200"
                  height="200"
                />
                <figcaption className="figure-caption">
                  Everyone is happy!
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// add animation to icons
// change the font of figcapture
// add order button
