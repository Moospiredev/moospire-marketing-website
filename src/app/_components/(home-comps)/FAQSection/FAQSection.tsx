import React from "react";
import { satisfy } from "@/app/_utils";
import { FAQCard } from "@/app/_components";
import "./FAQSection.scss";

const FAQSection = () => {
  return (
    <div className="faq-section" id="faq">
      <div className="app-container faq-container">
        {/* TOP AREA */}
        <div className="title-row">
          <div className="title-text">
            Frequently Asked{" "}
            <span className={`text-orange-500 ${satisfy.className}`}>
              Questions
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
          <FAQCard title="What kind of advice can I get from Moospire?" />
          <FAQCard title="How do I sign up for Moospire?" />
          <FAQCard title="Can I choose which feature I can easily navigate with on figma?" />
          <FAQCard title="How much does Moospire cost?" />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
