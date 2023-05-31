import Image from "next/image";
import { useState } from "react";

export default function OpenOrderModal() {
  return (
    <div
      className="modal fade"
      tabIndex={-1}
      id="orderModal"
      role="dialog"
      aria-labelledby="orderModalLabel"
    >
      <div
        className="modal-dialog modal-dialog-centered text-success "
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header d-flex">
            <h5
              className="modal-title text-center fw-bold text-success col-11"
              id="orderModalLabel"
            >
              Order your cake
            </h5>
            <button
              type="button"
              className="btn-close col-1"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Name</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="inputName"
                  required
                />
              </div>
              <div className="col-md-6 date">
                <label htmlFor="date-input" className="form-label date-label">
                  Required date
                </label>
                <input
                  className="form-control form-control-sm"
                  type="date"
                  id="date-input"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="inputEmail4"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label ">Number</label>
                <div className="input-group input-group-sm ">
                  <div className="input-group-text ">+1</div>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="inlineFormInputGroupUsername"
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Choose the cake flavor</label>
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  required
                >
                  <option selected value="0" className="text-warning">
                    Dominican cake
                  </option>
                  <option value="1">Vanilla sponge cake</option>
                  <option value="2">Chocolate cake</option>
                  <option value="3">Red Velvet</option>
                  <option value="4">
                    Other (please specify in the comments)
                  </option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Choose the filling flavor</label>
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  required
                >
                  <option selected value="0">
                    Dulce de leche
                  </option>
                  <option value="1">Vanilla</option>
                  <option value="2">Pineapple</option>
                  <option value="3">Guava</option>
                  <option value="3">Strawberry</option>
                  <option value="3">Chocolate</option>
                </select>
              </div>

              <div className="col-12">
                <div className="mb-3">
                  <label className="form-label">
                    Upload the desired cake image
                  </label>
                  <input
                    className="form-control form-control-sm"
                    type="file"
                    id="formFile"
                  />
                </div>

                <div className="delivery-checkbox d-flex justify-content-center mt-4">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input mx-2"
                      name="delivery-pickup"
                      type="radio"
                      value="option1"
                      required
                    />
                    <label className="form-check-label">Delivery</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input mx-2"
                      name="delivery-pickup"
                      type="radio"
                      value="option2"
                      required
                    />
                    <label className="form-check-label">Pick up</label>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="inputCity"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">State</label>
                <select id="inputState" className="form-select form-select-sm">
                  <option selected value="city1">
                    Connecticut
                  </option>
                  <option value="city2">New York</option>
                </select>
              </div>
              <div className="col-md-2">
                <label className="form-label">Zip</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="inputZip"
                />
              </div>
              <div className="col-12">
                <div className="mb-3">
                  <label className="form-label">Add your comments</label>
                  <textarea
                    className="form-control form-control-sm"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                {/* <p className="payment-info text-center fw-bolder text-danger">
                  Payment will be accepted via cash or money transfer
                </p> */}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-success">
              Add to the cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
