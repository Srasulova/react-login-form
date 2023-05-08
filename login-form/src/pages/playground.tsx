import Image from "next/image";
import { useEffect, useState } from "react";
import picture from "../picture.jpg";

<div className="">
  <div className="card mb-3" style={{ maxWidth: "960px" }}>
    <div className="row g-0">
      <div className="col-md-5">
        <Image
          src={picture}
          alt="picture"
          className="img-fluid rounded-start"
        />
      </div>
      <div className="col-md-7 mt-5">
        <div className="card-body">
          <h5 className="card-title text-center my-5 fs-1 fw-bold text-secondary">
            Log in to continue
          </h5>
          <div className="mb-3 col-md-8 mx-auto">
            <label className="form-label mb-2">Email address</label>
            <input
              type="email"
              className="form-control mb-3"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>

          <div className="mb-3 col-md-8 mx-auto">
            <label className="form-label mb-2">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="password"
            />
          </div>
          <p className="card-text text-center">
            <small className="text-body-secondary ">
              <a href="#">Reset password?</a>
            </small>
          </p>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-secondary my-3 mx-auto text-center"
              style={{ width: "250px" }}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;
