import { useState } from "react";
import Image from "next/image";
import Logo from "../new logo.png";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="#">
            <Image src={Logo} alt="Logo" width="50" height="50" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <a
                  className="nav-link active text-success fw-bolder hover-change-color"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link text-success fw-bolder hover-change-color"
                  href="#"
                >
                  Flavors
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link text-success fw-bolder hover-change-color"
                  href="#"
                >
                  Cakes Gallery
                </a>
              </li>
            </ul>
            <form className="d-flex mx-5" role="search">
              <input
                className="form-control form-control-sm me-2 search-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-warning btn-sm" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
