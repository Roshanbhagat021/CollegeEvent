import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import image1 from "../assets/event1.png";
import { AuthContext } from '../Contexts/AuthContext';
const VITE_API_BASEURL = import.meta.env.VITE_API_BASEURL;

const Events = () => {
  const [eventsData, setEventsData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClub, setSelectedClub] = useState('All');
  const [error, setError] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const { token } = useContext(AuthContext);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await axios.get( `${VITE_API_BASEURL}/event`);
        setEventsData(response.data.events);
        if (response.data.events.length > 0) {
          setSelectedEvent(response.data.events[0]);
        }
      } catch (err) {
        setError('Failed to load events. Please try again later.');
      }
    };

    fetchEventsData();
  }, []);

  const uniqueClubs = ['All', ...new Set(eventsData.map(event => event.club))];

  const filteredEvents = eventsData.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClub = selectedClub === 'All' || event.club === selectedClub;
    return matchesSearch && matchesClub;
  });

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleRegisterParticipant = async () => {
    if (!token) {
      setRegistrationError('You must be logged in to register.');
      return;
    }
    try {
      const response = await axios.post(
        `${VITE_API_BASEURL}/event/increment-participant/${selectedEvent._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          }
        }
      );
      if (response.data.msg=="Participant count incremented!") {
        setSelectedEvent(prevEvent => ({
          ...prevEvent,
          participantsCount: prevEvent.participantsCount + 1
        }));
        setRegistrationError(''); 
      }
    } catch (err) {
      setRegistrationError('Failed to register as participant. Please try again later.');
    }
  };

  const handleRegisterVolunteer = async () => {
    if (!token) {
      setRegistrationError('You must be logged in to register.');
      return;
    }
    try {
      const response = await axios.post(
        `${VITE_API_BASEURL}/event/increment-volunteer/${selectedEvent._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          }
        }
      );
      if (response.data.msg=="Volunteer count incremented!") {
        setSelectedEvent(prevEvent => ({
          ...prevEvent,
          volunteersCount: prevEvent.volunteersCount + 1
        }));
        setRegistrationError(''); 
      }
    } catch (err) {
      setRegistrationError('Failed to register as participant. Please try again later.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Events</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search events..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          value={selectedClub}
          onChange={(e) => setSelectedClub(e.target.value)}
        >
          {uniqueClubs.map((club, index) => (
            <option key={index} value={club}>{club}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 bg-white border border-gray-300 rounded-xl overflow-y-auto max-h-[100vh] p-4">
          {filteredEvents.length === 0 ? (
            <p className="text-gray-500">No events found.</p>
          ) : (
            filteredEvents.map(event => (
              <div
                key={event._id}
                onClick={() => handleSelectEvent(event)}
                className={`cursor-pointer p-4 mb-4 rounded-lg transition duration-300 ${selectedEvent?._id === event._id ? "bg-emerald-100 border border-emerald-400" : "hover:bg-gray-200 bg-gray-100"}`}
              >
                <h2 className="text-lg font-semibold text-gray-800">{event.name}</h2>
                <p className="text-sm text-gray-500">{formatDate(event.date)}</p>
                <p className="text-sm text-emerald-600">{event.club}</p>
              </div>
            ))
          )}
        </div>

        <div className="md:w-2/3 bg-white border border-gray-300 rounded-xl p-6 shadow-lg">
          {selectedEvent ? (
            <>
              <img
                src={image1}
                alt={selectedEvent.name}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-3xl font-bold text-emerald-700 mb-2">{selectedEvent.name}</h2>
              <p className="text-gray-500 mb-2">{selectedEvent.club} • {formatDate(selectedEvent.date)}</p>
              <p className="text-gray-700 mb-4">{selectedEvent.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-800">Venue:</h4>
                  <p className="text-gray-600">{selectedEvent.venue}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Timing:</h4>
                  <p className="text-gray-600">{selectedEvent.time}</p>
                </div>
                <div className="sm:col-span-2">
                  <h4 className="font-semibold text-gray-800">Guest(s):</h4>
                  <p className="text-gray-600">{selectedEvent.guests}</p>
                </div>
              </div>

              <div className="flex gap-6 mb-6">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">Participants:</h4>
                  <p className="text-gray-600">{selectedEvent.participantsCount || 0}</p>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">Volunteers:</h4>
                  <p className="text-gray-600">{selectedEvent.volunteersCount || 0}</p>
                </div>
              </div>

              {registrationError && <p className="text-red-500 mb-4">{registrationError}</p>}

              <div className="flex gap-4">
                <button
                  className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition duration-300"
                  onClick={handleRegisterParticipant}
                >
                  Register as Participant
                </button>
                <button className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition duration-300"
                onClick={handleRegisterVolunteer}>
                  Register as Volunteer
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-500">Select an event to view details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
