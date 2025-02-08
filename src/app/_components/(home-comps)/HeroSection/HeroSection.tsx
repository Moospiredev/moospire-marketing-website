import React from "react";
import Image from "next/image";
import { HeroImg } from "@/app/_assets";
import { satisfy } from "@/app/_utils";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero-section" id="home">
      <div className="app-container hero-container">
        {/* PRIMARY TEXT */}
        <div className="primary-text">
          <span className="main-text">The Spark you need to </span>
          <span className={`highlight-text ${satisfy.className}`}>Create</span>
        </div>

        {/* SECONDARY TEXT */}
        <div className="secondary-text">
          Lorem ipsum dolor sit amet consectetur. Nisi in lacus diam ipsum duis
          tincidunt facilisi adipiscing. Volutpat aliquam diam ac eget enim
          pellentesque. Adipiscing diam cras magna fe
        </div>

        {/* ACTION ROW */}
        <div className="btn-action-row">
          <button className="btn btn-md btn-primary">Get started</button>
          <button className="btn btn-md btn-secondary">Learn more</button>
        </div>

        {/* HERO BANNER IMAGE */}
        <div className="banner-image">
          <Image src={HeroImg} alt="hero-banner" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
