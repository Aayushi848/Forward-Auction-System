import React from "react";
import "../BodyCard/marquee.css";

const ResponsiveLayout = () => {
  return (
    <div className="container mx-auto overflow-hidden mt-2 rounded-lg">
      <div className="w-full bg-white shadow p-4 overflow-hidden">
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

export default ResponsiveLayout;
