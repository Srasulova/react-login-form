import Image from "next/image";
import { useState } from "react";
import CakeIcon from "../assets/cake.png";
import CakePictureIcon from "../assets/cake-picture-icon.png";
import Customer from "../assets/customer.png";
import delivery from "../assets/delivery-service.png";
import order from "../assets/order.png";
import piping from "../assets/piping.png";
// import { OrderButton } from "./heroArea";

export default function HowItWorks() {
  return (
    <>
      <div
        className="how-it-works mx-auto d-flex flex-column"
        id="how-it-works-id"
      >
        <h2 className="how-it-works-title text-center fs-1 fw-bolder my-5 text-success">
          Build your custom cake
        </h2>
        <div className="icons container row mx-auto gap-5 text-center counter">
          <div className="row mx-auto icons-row">
            <div className="pick-flavor-cake col-4">
              <figure className="figure">
                <div className="counter-wrapper">
                  <Image
                    src={CakeIcon}
                    className="figure-img img-fluid rounded"
                    alt="cake icon"
                    width="180"
                    height="180"
                  />
                </div>

                <figcaption className="figure-caption text-success">
                  Pick a cake flavor
                </figcaption>
              </figure>
            </div>

            <div className="pick-flavor-filling col-4">
              <figure className="figure">
                <div className="counter-wrapper">
                  <Image
                    src={piping}
                    className="figure-img img-fluid rounded"
                    alt="piping icon"
                    width="210"
                    height="210"
                  />
                </div>

                <figcaption className="figure-caption text-success">
                  Pick a filling flavor
                </figcaption>
              </figure>
            </div>

            <div className="upload-picture px-5 col-4">
              <figure className="figure">
                <div className="counter-wrapper">
                  <Image
                    src={CakePictureIcon}
                    className="figure-img img-fluid rounded"
                    alt="cake picture icon"
                    width="180"
                    height="180"
                  />
                </div>

                <figcaption className="figure-caption text-success">
                  Upload the design picture
                </figcaption>
              </figure>
            </div>

            <div className="place-order col-4">
              <figure className="figure">
                <div className="counter-wrapper">
                  <Image
                    src={order}
                    className="figure-img img-fluid rounded"
                    alt="order icon"
                    width="180"
                    height="180"
                  />
                </div>

                <figcaption className="figure-caption text-success">
                  Place your order
                </figcaption>
              </figure>
            </div>

            <div className="receive-cake px-5 col-4">
              <figure className="figure">
                <div className="counter-wrapper">
                  <Image
                    src={delivery}
                    className="figure-img img-fluid rounded"
                    alt="cake icon"
                    width="180"
                    height="180"
                  />
                </div>

                <figcaption className="figure-caption text-success">
                  Receive the cake
                </figcaption>
              </figure>
            </div>

            <div className="customer px-5 col-4">
              <figure className="figure">
                <div className="counter-wrapper">
                  <Image
                    src={Customer}
                    className="figure-img img-fluid rounded"
                    alt="happy customer icon"
                    width="180"
                    height="180"
                  />
                </div>

                <figcaption className="figure-caption text-success">
                  Everyone is happy!
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="order-btn">
            <button type="button" className="btn btn-success btn-lg">
              Order now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// add animation to icons - done
// change the font of figcapture - done
// add order button - done
