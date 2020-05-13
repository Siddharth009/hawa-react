import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Navbar = (props) => {
  const [isTop, setIsTop] = useState(true);
  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     const istop = window.scrollY < 200;
  //     if (istop !== isTop)
  //     {
  //       setIsTop(istop);
  //     }
  //   });
  // }, [isTop]);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-light ${
        isTop ? "bg-transparent" : "bg-gradient"
        } `}
    >

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

          <li className="nav-item">
            <a
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#projects"}
            >

            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              <b>Read Blog</b>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
