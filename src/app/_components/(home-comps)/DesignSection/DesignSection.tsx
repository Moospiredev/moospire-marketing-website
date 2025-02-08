import React from "react";
import { satisfy } from "@/app/_utils";
import Image from "next/image";
import { DisplayBoard } from "@/app/_assets";
import "./DesignSection.scss";

const DesignSection = () => {
  return (
    <div className="design-section">
      <div className="app-container design-container">
        {/* TOP AREA */}
        <div className="title-row">
          <div className="title-text">
            Explore Design{" "}
            <span className={`text-orange-500 ${satisfy.className}`}>
              Inspiration
            </span>{" "}
          </div>
          <div className="description-text">
            Streamline Your Start-up Deal Flow by effortlessly find start-ups
            aligning with your criteria and connect with other investors to
            unlock exciting opportunities.
          </div>
        </div>

        {/* BODY AREA */}
        <div className="body-area">
          <div className="search-row">
            <div className="search-input">
              <div className="icon icon-search-normal"></div>

              <input
                type="text"
                placeholder="Search for inspiration"
                className="form-control"
              />
            </div>

            <div className="search-action">
              <button className="btn btn-md btn-primary">
                Submit UI Design
              </button>
            </div>
          </div>

          <div className="tag-row">
            <div className="tag-item">Fintech</div>
            <div className="tag-item">Ecommerce</div>
            <div className="tag-item">About us</div>
            <div className="tag-item">Social app</div>
            <div className="tag-item">Sign up</div>
            <div className="tag-item">Login</div>
            <div className="tag-item">Dashboard</div>
            <div className="tag-item">Payment Method</div>
            <div className="tag-item">Setting</div>
          </div>

          {/* INSPIRATION DISPLAY BOARD */}
          <div className="inspiration-board">
            <Image
              src={DisplayBoard}
              alt="inspiration-board"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSection;
