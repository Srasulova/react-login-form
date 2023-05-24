// import React from "react";
// import Image from "next/image";
// import galleryPictures from "./gallery pictures";

// interface GalleryExpandedProps {
//   onLessClick: () => void;
// }

// const GalleryExpanded: React.FC<GalleryExpandedProps> = ({ onLessClick }) => {
//   return (
//     <div className="gallery">
//       <div className="gallery-title" id="gallery-title">
//         <h2 className="gallery-title text-center fs-1 fw-bolder mt-5 mb-2 text-success">
//           Gallery
//         </h2>
//       </div>
//       <div className="gallery-container container">
//         <div className="gallery-content">
//           <button
//             type="button"
//             className="btn btn-outline-success btn-less btn-sm mt-3 fw-medium mb-2"
//             onClick={onLessClick}
//           >
//             Less {"<-"}
//           </button>

//           {/* Create rows */}
//           {Array.from({ length: 8 }).map((_, rowIndex) => (
//             <div className="row g-2" key={rowIndex}>
//               {/* Create images per row */}
//               {galleryPictures
//                 .slice(rowIndex * 5, (rowIndex + 1) * 5)
//                 .map((item) => (
//                   <div className="col" key={item.id}>
//                     <figure className="figure">
//                       <div className="image-wrapper">
//                         <Image
//                           src={item.src}
//                           className="figure-img img-fluid rounded gallery-img"
//                           alt={item.alt}
//                         />
//                       </div>
//                       <figcaption className="figure-caption text-center text-success fw-medium">
//                         {item.name}
//                       </figcaption>
//                     </figure>
//                   </div>
//                 ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GalleryExpanded;

// import React, { useState } from "react";
// import Image from "next/image";
// import galleryPictures from "./gallery pictures";

// interface GalleryExpandedProps {
//   onLessClick: () => void;
// }

// const GalleryExpanded: React.FC<GalleryExpandedProps> = ({ onLessClick }) => {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   const openModal = (imageSrc: string) => {
//     setSelectedImage(imageSrc);
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div className="gallery">
//       <div className="gallery-title" id="gallery-title">
//         <h2 className="gallery-title text-center fs-1 fw-bolder mt-5 mb-2 text-success">
//           Gallery
//         </h2>
//       </div>
//       <div className="gallery-container container">
//         <div className="gallery-content">
//           <button
//             type="button"
//             className="btn btn-outline-success btn-less btn-sm mt-3 fw-medium mb-2"
//             onClick={onLessClick}
//           >
//             Less {"<-"}
//           </button>

//           {/* Create rows */}
//           {Array.from({ length: 8 }).map((_, rowIndex) => (
//             <div className="row g-2" key={rowIndex}>
//               {/* Create images per row */}
//               {galleryPictures
//                 .slice(rowIndex * 5, (rowIndex + 1) * 5)
//                 .map((item) => (
//                   <div className="col" key={item.id}>
//                     <figure
//                       className="figure"
//                       onClick={() => openModal(item.src.src)}
//                     >
//                       <div className="image-wrapper">
//                         <Image
//                           src={item.src}
//                           className="figure-img img-fluid rounded gallery-img"
//                           alt={item.alt}
//                         />
//                       </div>
//                       <figcaption className="figure-caption text-center text-success fw-medium">
//                         {item.name}
//                       </figcaption>
//                     </figure>
//                   </div>
//                 ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {selectedImage && (
//         <div className="modal" onClick={closeModal}>
//           <div className="modal-content">
//             <button type="button" className="close-button" onClick={closeModal}>
//               X
//             </button>
//             <div className="modal-image-container">
//               <div className="modal-image-wrapper">
//                 <Image
//                   src={selectedImage}
//                   className="modal-image"
//                   alt="Enlarged Image"
//                   width={600} // Set a default width for the modal image
//                   height={600} // Set a default height for the modal image
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GalleryExpanded;

import React, { useState } from "react";
import Image from "next/image";
import galleryPictures from "./gallery pictures";

interface GalleryExpandedProps {
  onLessClick: () => void;
}

const GalleryExpanded: React.FC<GalleryExpandedProps> = ({ onLessClick }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      <div className="gallery-title" id="gallery-title">
        <h2 className="gallery-title text-center fs-1 fw-bolder mt-5 mb-2 text-success">
          Gallery
        </h2>
      </div>
      <div className="gallery-container container">
        <div className="gallery-content">
          <button
            type="button"
            className="btn btn-outline-success btn-less btn-sm mt-3 fw-medium mb-2"
            onClick={onLessClick}
          >
            Less {"<-"}
          </button>

          {/* Create rows */}
          {Array.from({ length: 8 }).map((_, rowIndex) => (
            <div className="row g-2" key={rowIndex}>
              {/* Create images per row */}
              {galleryPictures
                .slice(rowIndex * 5, (rowIndex + 1) * 5)
                .map((item) => (
                  <div className="col" key={item.id}>
                    <figure className="figure">
                      <div className="image-wrapper">
                        <Image
                          src={item.src}
                          className="figure-img img-fluid rounded gallery-img"
                          alt={item.alt}
                          onClick={() => openModal(item.src.src)}
                        />
                      </div>
                      <figcaption className="figure-caption text-center text-success fw-medium">
                        {item.name}
                      </figcaption>
                    </figure>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <div className="modal-image-container">
              <div className="modal-image-wrapper">
                <Image
                  src={selectedImage}
                  className="modal-image"
                  alt="Enlarged Image"
                  width={600}
                  height={600}
                />
                <button
                  className="close-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeModal();
                  }}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryExpanded;
