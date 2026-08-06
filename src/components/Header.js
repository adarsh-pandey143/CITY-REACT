import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
// import { useTheme } from "../context/ThemeContext";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaChevronDown
} from "react-icons/fa";

import "./Header.css";
 import logo from "../assets/images/logo2-removebg-preview.png";

const Header = () => {

  // const { isDarkMode, toggleTheme } = useTheme();

  const [mobileMenu, setMobileMenu] = useState(false);

  const [serviceMenu, setServiceMenu] = useState(false);

  const [sticky, setSticky] = useState(false);

  const menuRef = useRef(null);

  const dropdownRef = useRef(null);

  const toggleMenu = () => {

    setMobileMenu(!mobileMenu);

  };

  const toggleServices = () => {

    setServiceMenu(!serviceMenu);

  };

  useEffect(() => {

    const handleScroll = () => {

      setSticky(window.scrollY > 60);

    };

    window.addEventListener("scroll", handleScroll);

    return () => {

      window.removeEventListener("scroll", handleScroll);

    };

  }, []);

  useEffect(() => {

    const closeMenus = (e) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {

        setServiceMenu(false);

      }

      if (
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {

        setMobileMenu(false);

      }

    };

    document.addEventListener("mousedown", closeMenus);

    return () => {

      document.removeEventListener("mousedown", closeMenus);

    };

  }, []);

  useEffect(() => {

    document.body.style.overflow = mobileMenu ? "hidden" : "";

    return () => {

      document.body.style.overflow = "";

    };

  }, [mobileMenu]);

  return (

    <>

      <div
        className={`mobile-overlay ${mobileMenu ? "active" : ""}`}
        onClick={() => setMobileMenu(false)}
      />

      <header className="header">

          {/* ================= TOP BAR ================= */}

        <div className="header-top">

          <div className="container">

            <div className="header-top-content">

              <div className="header-contact">

                <a href="tel:+917042699313">

                  <FaPhoneAlt />

                  <span>+91 70426 99313</span>

                </a>

                <a href="mailto:info@worldwidecouriercargo.com">

                  <FaEnvelope />

                  <span>info@worldwidecouriercargo.com</span>

                </a>

              </div>

              <div className="header-right-top">
    <span>🧾 GSTIN : 06DYLPP8013E1ZC</span>
</div>

            </div>

          </div>

        </div>

        {/* ================= NAVBAR ================= */}

        <nav className={`navbar ${sticky ? "sticky" : ""}`}>

          <div className="container">

            <div className="navbar-content">

              {/* Logo */}

              <Link to="/" className="logo">

                <img
                  src={logo}
                  alt="WWW Logo"
                  className="logo-image"
                />

              </Link>

                            {/* ================= Navigation ================= */}

              <ul
                ref={menuRef}
                className={`nav-menu ${mobileMenu ? "active" : ""}`}
              >

                <li>
                  <NavLink to="/" onClick={() => setMobileMenu(false)}>
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/about-us" onClick={() => setMobileMenu(false)}>
                    About Us
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/networks" onClick={() => setMobileMenu(false)}>
                    Networks
                  </NavLink>
                </li>

                <li className="dropdown" ref={dropdownRef}>

                  <button
                    className="dropdown-toggle"
                    onClick={toggleServices}
                  >
                    Services

                    <FaChevronDown
                      className={serviceMenu ? "rotate" : ""}
                    />
                  </button>

                  <ul
                    className={`dropdown-menu ${
                      serviceMenu ? "active" : ""
                    }`}
                  >

                    <li>
                      <NavLink
                        to="/services/roadways"
                        onClick={() => {
                          setMobileMenu(false);
                          setServiceMenu(false);
                        }}
                      >
                        Road Transport
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/services/express"
                        onClick={() => {
                          setMobileMenu(false);
                          setServiceMenu(false);
                        }}
                      >
                        Express Delivery
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/services/airfreight"
                        onClick={() => {
                          setMobileMenu(false);
                          setServiceMenu(false);
                        }}
                      >
                        Air Freight
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/services/warehouse"
                        onClick={() => {
                          setMobileMenu(false);
                          setServiceMenu(false);
                        }}
                      >
                        Warehousing
                      </NavLink>
                    </li>

                  </ul>

                </li>

                <li>
                  <NavLink
                    to="/tracking"
                    onClick={() => setMobileMenu(false)}
                  >
                    Tracking
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/careers"
                    onClick={() => setMobileMenu(false)}
                  >
                    Careers
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact-us"
                    onClick={() => setMobileMenu(false)}
                  >
                    Contact
                  </NavLink>
                </li>

              </ul>

                            {/* ================= Right Side ================= */}

              <div className="navbar-right">

                {/* Theme Toggle */}

                {/* <button
                  className="theme-toggle"
                  onClick={toggleTheme}
                  aria-label="Toggle Theme"
                >
                  {isDarkMode ? <FaSun /> : <FaMoon />}
                </button> */}

                {/* Get Quote Button */}

                <Link
                  to="/NotFound"
                  className="quote-btn"
                  onClick={() => setMobileMenu(false)}
                >
                  Get Quote
                </Link>

                {/* Mobile Menu Button */}

                <button
                  className="mobile-menu-toggle"
                  onClick={toggleMenu}
                  aria-label="Toggle Menu"
                >
                  {mobileMenu ? <FaTimes /> : <FaBars />}
                </button>

              </div>

            </div>

          </div>

        </nav>

      </header>

    </>

  );

};

export default Header;