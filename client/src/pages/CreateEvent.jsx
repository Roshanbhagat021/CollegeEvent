import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Contexts/AuthContext';
const VITE_API_BASEURL = import.meta.env.VITE_API_BASEURL;

const CreateEvent = () => {
  const { token } = useContext(AuthContext);
  const [event, setEvent] = useState({
    name: '',
    club: '',
    description: '',
    date: '',
    venue: '',
    time: '',
    guests: '',
    image: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
        alert("You must be logged in to create a petition.");
        navigate("/signin");
        return;
      }
  

    if (!event.name || !event.club || !event.description || !event.date || !event.venue || !event.time) {
      setError('All fields are required!');
      return;
    }

    setError('');
    

    try {
      const response = await axios.post(`${VITE_API_BASEURL}/event/create`, event, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      console.log('Event Created:', response.data);
      navigate('/events'); 
    } catch (error) {
      console.error('Error creating event:', error);
      setError('Failed to create event. Please try again!');
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create New Event</h1>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-300 rounded-xl p-6 shadow-lg">
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Event Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={event.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter event name"
            />
          </div>

          <div>
            <label htmlFor="club" className="block text-gray-700 font-semibold mb-2">Club</label>
            <input
              type="text"
              id="club"
              name="club"
              value={event.club}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter the club name"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            value={event.description}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Event description"
            rows="4"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={event.date}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label htmlFor="venue" className="block text-gray-700 font-semibold mb-2">Venue</label>
            <input
              type="text"
              id="venue"
              name="venue"
              value={event.venue}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter event venue"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={event.time}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label htmlFor="guests" className="block text-gray-700 font-semibold mb-2">Guest(s)</label>
            <input
              type="text"
              id="guests"
              name="guests"
              value={event.guests}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter guest(s) name(s)"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">Event Image URL</label>
          <input
            type="url"
            id="image"
            name="image"
            value={event.image}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Enter event image URL"
          />
        </div>

        <button
          type="submit"
          className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition duration-300"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
