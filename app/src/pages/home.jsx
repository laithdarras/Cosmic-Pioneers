import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
// import './home.css';
import { useState, useEffect } from "react";

export default function Home() {
  
  return (
    <div className="home">
      <header>
        <h1 align="center">Welcome to Zero-G Knockout!</h1>
      </header>
      <main>
        <section className="features">
          <br></br>
          <h2 align="center">Features</h2>
            <div class="text-box col-auto" align = "center">Engaging Microgravity Fitness Game</div>
            <br></br>
            <div class="text-box" align = "center">Track Your Progress</div>
            <br></br>
            <div class="text-box" align = "center">Build Team Rapport</div>
            <br></br>
            <div class="text-box" align = "center">Multiple Earth and Space Based Themes</div>
            <br></br>
            <div class="text-box" align = "center">Test your might against other Space Stations</div>
            <br></br>
            <div class="text-box" align = "center">Journal your progress</div>
        </section>
       
        <section className="call-to-action">
        <div class="icon"></div>
          <br></br>
          <h2 align="center">Join Us!</h2>
          <p align="center">Ready to launch into fun and fitness?</p>
          <Link to="/begin">
          <div className="text-center">
            <button type="button" class="btn btn-primary btn-lg">Start Your Journey</button> 
          </div>
          </Link>
          <div class="iconss"></div>
        
          
        </section>
      </main>
      <footer>
      <div class="bottomleft">2024 Cosmic Pioneers. All rights reserved.</div>
      </footer>
    </div>
  );
}
