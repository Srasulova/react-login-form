import React, { useState } from "react";
import Image from "next/image";
import galleryPictures from "./gallery pictures";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";

interface GalleryCollapsedProps {
  handleMoreClick: () => void;
}

const GalleryCollapsed: React.FC<GalleryCollapsedProps> = ({
  handleMoreClick,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const mainImage = galleryPictures[currentImageIndex];
  const gridImages = galleryPictures.slice(0, 9);

  const showPreviousImage = () => {
    const previousIndex =
      currentImageIndex === 0 ? gridImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(previousIndex);
  };

  const showNextImage = () => {
    const nextIndex =
      currentImageIndex === gridImages.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(nextIndex);
  };

  return (
    <div className="gallery-collapsed">
      <div className="gallery-collapsed-title" id="gallery-title">
        <h2 className="gallery-title text-center fs-1 fw-bolder my-5 text-success">
          Gallery
        </h2>
      </div>
      <div className="container-fluid container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              className="img-fluid rounded"
            />
            <div className="arrow-icon left-icon" onClick={showPreviousImage}>
              <BiCaretLeft />
            </div>
            <div className="arrow-icon right-icon" onClick={showNextImage}>
              <BiCaretRight />
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="row g-1">
              {gridImages.map((image, index) => (
                <div
                  className="col-4 d-flex align-items-center justify-content-center"
                  key={image.id}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="img-fluid rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-md-1 d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-outline-success btn-more btn-sm mt-3 fw-medium"
              onClick={handleMoreClick}
            >
              More -&gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCollapsed;
