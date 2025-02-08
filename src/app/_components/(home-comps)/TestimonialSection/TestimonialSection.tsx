import React from "react";
import { TestimonialCard } from "@/app/_components";
import { satisfy } from "@/app/_utils";
import "./TestimonialSection.scss";

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <div className="app-container testimonial-container">
        {/* TOP AREA */}
        <div className="title-row">
          <div className="title-text">
            Hear what people{" "}
            <span className={`text-orange-500 ${satisfy.className}`}>say</span>{" "}
            about us
          </div>
          <div className="description-text">
            Streamline Your Start-up Deal Flow by effortlessly find start-ups
            aligning with your criteria and connect with other investors to
            unlock exciting opportunities.
          </div>
        </div>

        {/* BODY AREA */}
        <div className="body-area">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
