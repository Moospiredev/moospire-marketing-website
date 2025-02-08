import React from "react";
import "./TestimonialCard.scss";
import Image from "next/image";

const TestimonialCard = () => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-text">
        {`AskaDoctor's telemedicine service exceeded my expectations. The doctor
        provided invaluable advice, listened attentively, and gave a
        personalized plan. I feel empowered and in control of my health.`}
      </div>

      <div className="testimonial-author-block">
        <div className="author-img">
          <Image
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="img"
            width={38}
            height={38}
          />
        </div>

        <div className="author-name">Will Zack</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
