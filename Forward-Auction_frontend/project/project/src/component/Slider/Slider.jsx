import React, { PureComponent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";

const banners = [banner1, banner2, banner3];

export class Slider extends PureComponent {
  state = {
    currentSlide: 0,
  };

  nextSlide = () => {
    this.setState((prevState) => ({
      currentSlide: (prevState.currentSlide + 1) % banners.length,
    }));
  };

  prevSlide = () => {
    this.setState((prevState) => ({
      currentSlide:
        (prevState.currentSlide - 1 + banners.length) % banners.length,
    }));
  };

  render() {
    const { currentSlide } = this.state;

    return (
      
        <div>
          {/* Banner Carousel */}
          <div className="relative w-full overflow-hidden shadow-md rounded-lg">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {banners.map((banner, index) => (
                <img
                  key={index}
                  src={banner}
                  className="w-full object-cover h-40 flex-shrink-0"
                  alt={`Banner ${index + 1}`}
                />
              ))}
            </div>

            {/* Carousel controls */}
            <button
              onClick={this.prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-80 p-2 rounded-full shadow"
            >
              <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
            <button
              onClick={this.nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-80 p-2 rounded-full shadow"
            >
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>
          </div>
       </div>
     
    );
  }
}

export default Slider;
