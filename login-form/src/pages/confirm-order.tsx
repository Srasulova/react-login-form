import { useState } from "react";

type ConfirmOrderProps = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  //   name: string;
};

export default function ConfirmOrder({
  showModal,
  setShowModal,
}: ConfirmOrderProps) {
  return (
    <div
      className={`modal fade ${showModal ? "show" : ""}`}
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{ display: showModal ? "block" : "none" }}
      onClick={() => setShowModal(false)}
    >
      <div className="modal-dialog modal-dialog-centered text-success">
        <div className="modal-content">
          <div className="modal-header d-flex">
            <h5
              className="modal-title fs-5 text-center fw-bold text-success col-11"
              id="exampleModalLabel"
            >
              Order details
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setShowModal(false)}
            ></button>
          </div>
          <div className="modal-body">...</div>
          <div className="modal-footer">
            {/* <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => setShowModal(false)}
            >
              Close
            </button> */}
            <button type="button" className="btn btn-success mx-auto">
              Confirm your order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
