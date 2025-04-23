import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/event1.png";
import image2 from "../assets/event2.png";
import image3 from "../assets/event3.png";
import image4 from "../assets/event4.png";

const images = [image1, image2, image3, image4];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null); 

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startSlider();
    return () => stopSlider(); 
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="bg-white text-slate-800 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-emerald-700">
            Discover. Attend. Volunteer.
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            Welcome to <strong>CampusCalendar</strong> — your one-stop hub for all
            college events. Stay updated, connect with clubs, and get involved!
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              to="/events"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              View Events
            </Link>
            <Link
              to="/clubs"
              className="border border-emerald-600 text-emerald-700 hover:bg-emerald-100 font-semibold px-6 py-3 rounded-lg transition"
            >
              Join a Club
            </Link>
          </div>
        </div>

        <div
          className="md:w-1/2 w-full h-64 sm:h-80 cursor-pointer rounded-xl overflow-hidden shadow-md relative group"
          onMouseEnter={stopSlider}
          onMouseLeave={startSlider}
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform scale-105 group-hover:scale-100"
          />

          <button
            onClick={goToPrevious}
            className="absolute cursor-pointer left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow text-xl opacity-0 group-hover:opacity-100 transition-opacity"
          >
            &#60;
          </button>
          <button
            onClick={goToNext}
            className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow text-xl opacity-0 group-hover:opacity-100 transition-opacity"
          >
            &#62;
          </button>

          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  idx === currentIndex ? "bg-emerald-600 scale-125" : "bg-emerald-300"
                } transition-transform`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
