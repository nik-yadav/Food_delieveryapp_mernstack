import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between px-5 align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          ></Link>
          <span class="text-muted">GoFood© @{date.getFullYear()} Company, Inc</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <a class="text-muted" href="#">
              <Facebook />
            </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#">
              <Instagram />
            </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#">
              <Twitter />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
