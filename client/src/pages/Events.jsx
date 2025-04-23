import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from "../assets/event1.png"

const eventsData = [
    {
      id: 1,
      name: 'Hackathon 2025',
      club: 'Coding Club',
      description: '12-hour coding marathon with exciting prizes.',
      date: '2025-05-01',
      image: 'https://via.placeholder.com/300x150?text=Hackathon',
    },
    {
      id: 2,
      name: 'Dance Night',
      club: 'Cultural Club',
      description: 'Show off your moves under the spotlight.',
      date: '2025-05-05',
      image: 'https://via.placeholder.com/300x150?text=Dance+Night',
    },
    {
      id: 3,
      name: 'Photography Workshop',
      club: 'Photography Club',
      description: 'Learn the art of storytelling through lenses.',
      date: '2025-05-10',
      image: 'https://via.placeholder.com/300x150?text=Photography',
    },
    {
      id: 4,
      name: 'AI & ML Talk',
      club: 'Coding Club',
      description: 'Deep dive into Artificial Intelligence and Machine Learning.',
      date: '2025-05-12',
      image: 'https://via.placeholder.com/300x150?text=AI+ML+Talk',
    },
    {
      id: 5,
      name: 'Drama Play: Hamlet',
      club: 'Dramatics Club',
      description: 'A modern take on the classic Shakespearean tragedy.',
      date: '2025-05-15',
      image: 'https://via.placeholder.com/300x150?text=Hamlet',
    },
    {
      id: 6,
      name: 'Robotics Expo',
      club: 'Robotics Club',
      description: 'Showcasing student-built bots and automation projects.',
      date: '2025-05-17',
      image: 'https://via.placeholder.com/300x150?text=Robotics+Expo',
    },
    {
      id: 7,
      name: 'Open Mic Night',
      club: 'Literary Club',
      description: 'Poetry, storytelling, and music by students.',
      date: '2025-05-18',
      image: 'https://via.placeholder.com/300x150?text=Open+Mic+Night',
    },
    {
      id: 8,
      name: 'Business Pitch Fest',
      club: 'Entrepreneurship Club',
      description: 'Pitch your startup idea and win funding.',
      date: '2025-05-20',
      image: 'https://via.placeholder.com/300x150?text=Pitch+Fest',
    },
    {
      id: 9,
      name: 'Fitness Challenge',
      club: 'Sports Club',
      description: 'Push your limits in strength and endurance games.',
      date: '2025-05-22',
      image: 'https://via.placeholder.com/300x150?text=Fitness+Challenge',
    },
    {
      id: 10,
      name: 'Movie Screening',
      club: 'Film Club',
      description: 'Special screening of a student-made short film.',
      date: '2025-05-24',
      image: 'https://via.placeholder.com/300x150?text=Movie+Screening',
    },
    {
      id: 11,
      name: 'Art Exhibition',
      club: 'Art Club',
      description: 'Display of paintings and sculptures by campus artists.',
      date: '2025-05-26',
      image: 'https://via.placeholder.com/300x150?text=Art+Exhibition',
    },
    {
      id: 12,
      name: 'Tech Quiz Bowl',
      club: 'Coding Club',
      description: 'Battle of tech brains in a fun quiz format.',
      date: '2025-05-28',
      image: 'https://via.placeholder.com/300x150?text=Tech+Quiz',
    },
    
  ];
  
const Events = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedClub, setSelectedClub] = useState('All');
  
    const uniqueClubs = ['All', ...new Set(eventsData.map(event => event.club))];
  
    const filteredEvents = eventsData.filter(event => {
      const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesClub = selectedClub === 'All' || event.club === selectedClub;
      return matchesSearch && matchesClub;
    });
  
    return (
      <div className="p-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Events</h1>
  
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <input
            type="text"
            placeholder="Search events..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
  
          <select
            className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedClub}
            onChange={(e) => setSelectedClub(e.target.value)}
          >
            {uniqueClubs.map((club, index) => (
              <option key={index} value={club}>{club}</option>
            ))}
          </select>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredEvents.map(event => (
            <div key={event.id} className="border border-gray-300 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <img src={image1} alt={event.name} className="w-full h-40 object-cover rounded-t-xl" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{event.name}</h2>
                <p className="text-sm text-gray-500 mb-2">{event.club} • {event.date}</p>
                <p className="text-gray-700 text-sm mb-4">{event.description}</p>
                <Link
                  to={`/event-details/${event.id}`} 
                  className="block px-4 py-2  text-emerald-600 text-center rounded-lg"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
  
        {/* No Results */}
        {filteredEvents.length === 0 && (
          <p className="text-center mt-10 text-gray-500">No events found.</p>
        )}
      </div>
    );
  };

export default Events;
