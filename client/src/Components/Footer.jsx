import React from "react";
import { Link } from "react-router-dom";
import instaLogo from "../assets/instaLogo.png"
import FaceBookLogo from "../assets/facebook.png"
import LinkedinLogo from "../assets/linkedin.png"

const Footer = () => {
  return (
    <footer className="bg-emerald-700 text-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold mb-2"> 🎓 CampusCalendar</h2>
          <p className="text-sm text-emerald-100">
            Your one-stop hub for discovering college events, joining clubs, and staying involved on campus.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/events" className="hover:underline">Events</Link></li>
            <li><Link to="/clubs" className="hover:underline">Clubs</Link></li>
          </ul>
        </div>

        {/* Social Media (optional) */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect with us</h3>
          <div className="flex gap-4 text-xl">
            <Link to={"/"} className="w-8" ><img src={instaLogo} alt="instagram-Logo" /></Link>
            <Link to={"/"} className="w-8" ><img src={FaceBookLogo} alt="facebook-Logo" /></Link>
            <Link to={"/"} className="w-8" ><img src={LinkedinLogo} alt="linkedin-Logo" /></Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-emerald-600 mt-8 pt-4 text-center text-sm text-emerald-100">
        &copy; {new Date().getFullYear()} CampusCalendar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
