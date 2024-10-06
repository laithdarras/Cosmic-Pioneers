import React from "react";
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
            <p align="center">Engaging Microgravity Fitness Game</p>
            <p align="center">Track Your Progress</p>
            <p align="center">Build Team Rapport</p>
            <p align="center">Multiple Earth and Space Based Themes</p>
            <p align="center">Test your might against other Space Stations</p>
            <p align="center">Journal your progress</p>
        </section>
       
        <section className="call-to-action">
          <br></br>
          <h2 align="center">Join Us!</h2>
          <p align="center">Ready to launch into fun and fitness?</p>
          <div className="text-center">
            <a type="button" class="btn btn-primary btn-lg" href="/begin"><i class="bi bi-rocket"></i>&nbsp;Start Your Journey!</a> 
          </div>
          
        </section>
      </main>
      <footer>
        <p>© 2024 Cosmic Pioneers. All rights reserved.</p>
      </footer>
    </div>
  );
}
