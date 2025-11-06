import React from "react";
import "../BodyCard/marquee.css";

const BodyCard = () => {
  return (
    <div className="bodycard-container">
      <div className="bodycard-inner">
        <div className="relative w-full h-5 overflow-hidden">
          <div className="absolute whitespace-nowrap marquee">
            <span className="mx-4 inline-block">
              📰 Latest News: Big updates coming soon! 🎉 Join our newsletter!
              🚀 Explore new features today!
            </span>
            <span className="mx-4 inline-block">
              📰 Latest News: Big updates coming soon! 🎉 Join our newsletter!
              🚀 Explore new features today!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyCard;
