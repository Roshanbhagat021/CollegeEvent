import React from "react";
import avatar1 from "../assets/avatar1.png"; 
import avatar2 from "../assets/avatar3.png";
import avatar3 from "../assets/avatar2.png";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "President, Coding Club",
    message:
      "CampusCalendar made it super easy to promote our hackathon. We had record participation and smooth coordination!",
    avatar: avatar1,
  },
  {
    name: "Simran Kaur",
    role: "Cultural Secretary",
    message:
      "From dance battles to drama nights, every event got the spotlight it deserved. Totally love the platform!",
    avatar: avatar2,
  },
  {
    name: "Rahul Deshmukh",
    role: "Second Year, CSE",
    message:
      "Before CampusCalendar, I used to miss half the fun stuff. Now I'm in the loop, and even volunteered for two events!",
    avatar: avatar3,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white text-slate-800 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-700 mb-12">
          What Students Say
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-emerald-50 rounded-xl p-6 shadow hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-emerald-800">{t.name}</h4>
                  <p className="text-sm text-emerald-600">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-700 italic">“{t.message}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
