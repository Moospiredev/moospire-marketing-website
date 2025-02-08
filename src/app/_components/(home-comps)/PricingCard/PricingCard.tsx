import React from "react";
import "./PricingCard.scss";

const PricingCard = ({
  title,
  price,
  duration,
  offers,
}: {
  title: string;
  price: string;
  duration: string;
  offers: string[];
}) => {
  return (
    <div className="pricing-card">
      <div className="meta-text">{title}</div>

      <div className="title-top-row">
        <div className="title-text">{price}</div>
        <div className="sub-text">{duration}</div>
      </div>

      <div className="price-offer-list">
        {offers.map((offer, index) => (
          <div className="offer-item" key={index}>
            <div className="bullet-point"></div>
            <div className="offer-item-text">{offer}</div>
          </div>
        ))}
      </div>

      {/* ACTION BTN */}
      <button className="btn btn-md btn-secondary action-btn">
        Get started
      </button>
    </div>
  );
};

export default PricingCard;
