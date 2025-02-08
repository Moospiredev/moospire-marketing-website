import React from "react";
import Image from "next/image";
import { satisfy } from "@/app/_utils";
import { SampleImg } from "@/app/_assets";
import "./ProcessSection.scss";

const ProcessSection = () => {
  return (
    <div className="process-section" id="how-it-works">
      <div className="app-container process-container">
        <div className="process-wrapper">
          {/* PROCESS TITLE TOP */}
          <div className="process-title-top">
            <div className="title-text">
              How it{" "}
              <span className={`text-orange-500 ${satisfy.className}`}>
                works
              </span>
            </div>
            <div className="description-text">
              Lorem ipsum dolor sit amet consectetur. Dictumst dignissim commodo
              nunc eu diam donec. Sed bibendum tortor mattis nunc auctor. Quis
              lacus sagittis nulla nullam imperdiet.{" "}
            </div>
          </div>

          {/* PROCESS BODY */}
          <div className="process-body">
            <div className="process-item">
              <div className="item-icon">
                <div className="icon icon-signpost"></div>
              </div>

              <div>
                <div className="item-title-text">Moodboard Inspiration</div>
                <div className="item-description-text">
                  Lorem ipsum dolor sit amet consectetur. Dictumst dignissim
                  commodo nunc eu diam donec. Sed bibendu
                </div>
              </div>
            </div>

            <div className="process-item">
              <div className="item-icon">
                <div className="icon icon-signpost"></div>
              </div>

              <div>
                <div className="item-title-text">Moodboard Inspiration</div>
                <div className="item-description-text">
                  Lorem ipsum dolor sit amet consectetur. Dictumst dignissim
                  commodo nunc eu diam donec. Sed bibendu
                </div>
              </div>
            </div>

            <div className="process-item">
              <div className="item-icon">
                <div className="icon icon-signpost"></div>
              </div>

              <div>
                <div className="item-title-text">Moodboard Inspiration</div>
                <div className="item-description-text">
                  Lorem ipsum dolor sit amet consectetur. Dictumst dignissim
                  commodo nunc eu diam donec. Sed bibendu
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION IMAGE */}
        <Image src={SampleImg} alt="sample-img" className="section-img" />
      </div>
    </div>
  );
};

export default ProcessSection;
