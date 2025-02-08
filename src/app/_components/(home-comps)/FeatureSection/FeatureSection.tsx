import React from "react";
import "./FeatureSection.scss";

const FeatureSection = () => {
  return (
    <div className="feature-section" id="features">
      <div className="app-container feature-container">
        {/* TOP AREA */}
        <div className="title-row">
          <div className="title-text">How does it work</div>
          <div className="description-text">
            Streamline Your Start-up Deal Flow by effortlessly find start-ups
            aligning with your criteria and connect with other investors to
            unlock exciting opportunities.
          </div>
        </div>

        {/* BODY AREA */}
        <div className="body-area">
          <div className="feature-item">
            <div className="feature-icon">
              <div className="icon icon-signpost"></div>
            </div>

            <div className="feature-title">Moodboard Inspiration</div>
            <div className="feature-description">
              Lorem ipsum dolor sit amet consectetur. Dictumst dignissim commodo
              nunc eu diam donec. Sed bibendum tortor mattis nunc auctor. Quis
              lacus sagittis nulla nullam imperdiet. A duis quis nulla viverra
              turpis in iaculis.
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <div className="icon icon-signpost"></div>
            </div>

            <div className="feature-title">Moodboard Inspiration</div>
            <div className="feature-description">
              Lorem ipsum dolor sit amet consectetur. Dictumst dignissim commodo
              nunc eu diam donec. Sed bibendum tortor mattis nunc auctor. Quis
              lacus sagittis nulla nullam imperdiet. A duis quis nulla viverra
              turpis in iaculis.
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <div className="icon icon-signpost"></div>
            </div>

            <div className="feature-title">Moodboard Inspiration</div>
            <div className="feature-description">
              Lorem ipsum dolor sit amet consectetur. Dictumst dignissim commodo
              nunc eu diam donec. Sed bibendum tortor mattis nunc auctor. Quis
              lacus sagittis nulla nullam imperdiet. A duis quis nulla viverra
              turpis in iaculis.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
