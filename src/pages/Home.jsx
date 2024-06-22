import React from 'react'
import "../App.css";

const Home = () => {
  return (
    <section id="hero" className="hero-section" role="main">
      <div className="container">
        <h1 className="headline">Welcome to Tech Startup</h1>
        <p className="subheadline">Innovative solutions for modern problems</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  )
}

export default Home