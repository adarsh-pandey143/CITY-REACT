import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

import truckImage from "../assets/images/ground.jpg"; // apni image use kar lena

const NotFound = () => {

    return (

        <div className="notfound-page">

            <div className="container">

                <div className="notfound-grid">

                    {/* LEFT */}

                    <div className="notfound-content">

                        <span className="error-tag">
                            ERROR 404
                        </span>

                        <h1>
                            Oops!
                            <br />
                            Page Not Found
                        </h1>

                        <p>
                            The page you are looking for may have been moved,
                            deleted or is temporarily unavailable.
                            Please return to the homepage or explore our logistics
                            services.
                        </p>

                        <div className="notfound-buttons">

                            <Link
                                to="/"
                                className="btn-primary"
                            >
                                Back To Home
                            </Link>

                            <Link
                                to="/contact-us"
                                className="btn-outline-dark"
                            >
                                Contact Us
                            </Link>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="notfound-image">

                        <img
                            src={truckImage}
                            alt="404"
                        />

                        <div className="error-number">
                            404
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default NotFound;
