import React from "react";
import image1 from "../assets/event1.png";
import image2 from "../assets/event3.png";
import image3 from "../assets/event4.png";

const recentEvents = [
  {
    id: 1,
    title: "Tech Symposium 2025",
    date: "April 18, 2025",
    description: "A gathering of tech enthusiasts to showcase and discuss innovations.",
    image: image1,
  },
  {
    id: 2,
    title: "Cultural Fest",
    date: "April 10, 2025",
    description: "Experience diverse cultural performances and art from around the globe.",
    image: image2,
  },
  {
    id: 3,
    title: "Startup Pitch Day",
    date: "March 28, 2025",
    description: "Watch student entrepreneurs pitch their ideas to industry leaders.",
    image: image3,
  },
];

const RecentEvents = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Recent Events</h2>
        <p className="text-slate-600 mb-10">
          Catch up with the latest happenings around your campus.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {recentEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-slate-500 mb-3">{event.date}</p>
                <p className="text-slate-600 text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;
