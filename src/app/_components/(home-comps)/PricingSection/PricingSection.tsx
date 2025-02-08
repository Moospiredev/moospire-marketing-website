import React from "react";
import { PricingCard } from "@/app/_components";
import { satisfy } from "@/app/_utils";
import "./PricingSection.scss";

const PricingSection = () => {
  return (
    <div className="pricing-section" id="plan">
      <div className="app-container pricing-container">
        {/* TITLE ROW */}
        <div className="title-row">
          <div className="title-text">
            Choose the{" "}
            <span className={`text-orange-500 ${satisfy.className}`}>plan</span>{" "}
            that’s right for you
          </div>
          <div className="description-text">
            Streamline Your Start-up Deal Flow by effortlessly find start-ups
            aligning with your criteria and connect with other investors to
            unlock exciting opportunities.
          </div>
        </div>

        {/* BODY ROW */}
        <div className="body-row">
          <PricingCard
            title="Flex Plan"
            price="Free"
            duration="for 1 month"
            offers={[
              "15-20 moodboard inspiration",
              "3 AI Request",
              "Personalized recommendations",
              "Personalized recommendations",
              "Personalized recommendations",
            ]}
          />

          <PricingCard
            title="Basic Spire Plan"
            price="$4.99"
            duration="/ month"
            offers={[
              "Unlimited moodboard",
              "Unlimited",
              "Personalized recommendations",
              "Personalized recommendations",
              "Video call",
            ]}
          />

          <PricingCard
            title="Premium Spire Plan"
            price="$9.99"
            duration="/ month"
            offers={[
              "Unlimited moodboard",
              "Unlimited",
              "Personalized recommendations",
              "Personalized recommendations",
              "Video call",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
