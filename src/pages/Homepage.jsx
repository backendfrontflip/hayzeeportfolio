import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaGreaterThan,
} from 'react-icons/fa';

const Homepage = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-12">
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white shadow-xl rounded-3xl p-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/p-4.jpg"
            alt="Abdulazeez"
            className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-green-500"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-extrabold mb-4">
            Hello, I'm <span className="text-green-600">Abdulazeez</span>
          </h1>
          <p className="text-gray-700 text-lg font-medium mb-6">
            I'm a <span className="font-semibold">Data Analyst</span>, Executive Assistant,
            and <span className="font-semibold">Social Media Manager</span>. I blend data with strategy
            to empower business growth and visibility.
          </p>

          <div className="flex justify-center md:justify-start gap-6 text-2xl text-green-600">
            <a href="https://www.facebook.com/share/16reD8iRSX/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          </div>
        </div>
      </section>

     
     
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">My CVs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Link to="/project-1">
            <img
            src="/assets/p-1.jpg"
            alt="Project 1"
            className="w-full h-64 object-cover rounded-xl shadow hover:scale-105 transition-transform duration-300"
            />
            </Link>

            <Link to="/project-2">
            <img
            src="/assets/p-2.jpg"
            alt="Project 2"
            className="w-full h-64 object-cover rounded-xl shadow hover:scale-105 transition-transform duration-300"
            />
            </Link>
            
            <Link to="/project-3">
            <img
            src="/assets/p-3.jpg"
            alt="Project 3"
            className="w-full h-64 object-cover rounded-xl shadow hover:scale-105 transition-transform duration-300"
            />
            </Link>
        </div>
        </section>     
    </main>
  );
};

export default Homepage;
