// src/components/LoginSlider.jsx
import React, { PureComponent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

const loginBanners = [banner1, banner2, banner3];

export class LoginSlider extends PureComponent {
  state = {
    currentSlide: 0,
  };

  nextSlide = () => {
    this.setState((prevState) => ({
      currentSlide: (prevState.currentSlide + 1) % loginBanners.length,
    }));
  };

  prevSlide = () => {
    this.setState((prevState) => ({
      currentSlide:
        (prevState.currentSlide - 1 + loginBanners.length) % loginBanners.length,
    }));
  };

  render() {
    const { currentSlide } = this.state;
    const { onLoginClick } = this.props;

    return (
      <div className="w-full h-full max-w-[1000px]  mx-auto mt-4 relative">
        <div className="overflow-hidden rounded-xl shadow-lg h-84">
          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {loginBanners.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Login Banner ${idx + 1}`}
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </div>
           <button
            onClick={onLoginClick}
            className="centered-login-button"
          >
            Login
          </button>
        </div>

        {/* Controls */}
        <button
          onClick={this.prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 p-2 rounded-full shadow"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" />
        </button>
        <button
          onClick={this.nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 p-2 rounded-full shadow"
        >
          <ChevronRight className="w-5 h-5 text-gray-800" />
        </button>
      </div>
    );
  }
}

export default LoginSlider;
