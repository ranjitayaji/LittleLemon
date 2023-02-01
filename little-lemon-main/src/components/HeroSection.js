import React from 'react';
import "../components/styles/HeroSection.css";
import { NavLink } from 'react-router-dom';



const HeroSection = () => {
  return (
    <div className="hero-section-background">
        <div className="hero-section-container">
            <div className="section-left">
                <h1>Little Lemon</h1>
                <h3>India</h3>
                <h2>Eat Right Food</h2>
                <p>Eat Healty, It Is Good For Your Health.</p>
                <NavLink to="/reservations"><button className="btn">Book a Table</button></NavLink>
            </div>
            
        </div>
    </div>
  )
}

export default HeroSection
