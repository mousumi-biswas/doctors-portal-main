import React from "react";
import BannerImg from "../../images/banner-img.png";
import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="banner-section">
      <div className="container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col-md-4">
            <h3>
              Your New Smile <br /> Starts Here
            </h3>

            <Link className="btn btn-primary" to="/appointment">
              Get appointment
            </Link>
          </div>
          <div className="col-md-6 offset-2">
            <img className="img-fluid" src={BannerImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
