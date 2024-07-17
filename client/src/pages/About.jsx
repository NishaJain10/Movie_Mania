import React from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import aboutLottie from "../about.json";
import Lottie from "react-lottie";

const About = () => {
  const { user } = useAuth();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: aboutLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <h1>About MovieMania</h1>
            <p>Your Ultimate Destination for Movies & TV Shows</p>
            <p>Our mission is to create a vibrant and inclusive entertainment community where viewers can connect, explore, and enjoy their favorite movies and TV shows together.</p>
            <p>Join us today and embark on an exciting entertainment journey!</p>
            {user ? (
              <p>Welcome, {user.username}!</p>
            ) : (
              <p>Sign up or log in to unlock exclusive features and rewards!</p>
            )}
            <div className="btn-group">
              <Link to="/register">
                <button className="btn">Sign Up</button>
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <Lottie options={defaultOptions} height={550} width={550} />
          </div>
        </div>
      </section>

     {/* History Section */}
      <section className="section-mission">
      <h2>Our History</h2>
        <div className="container">
          <p>
            MovieMania was founded in [Year] by a team of passionate entertainment enthusiasts who wanted to create a dedicated platform for movie and TV show lovers around the world. Since then, we have grown into one of the leading entertainment communities, serving millions of viewers worldwide. Over the years, we have expanded our collection to include thousands of movies and TV shows across various genres, ensuring that there is something for every type of viewer. We are committed to staying at the forefront of the entertainment industry, constantly updating our platform with the latest releases and innovations. Our journey has been marked by milestones and achievements, but our core values remain unchanged - to provide viewers with a safe, inclusive, and enjoyable entertainment experience.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-mission">
      <h2>Our Mission</h2>
        <div className="container">
          <p>
            At MovieMania, our mission is simple - to be the ultimate destination for movie and TV show lovers worldwide. We are dedicated to providing a diverse and inclusive entertainment community where viewers of all backgrounds can come together to connect, explore, and enjoy their favorite movies and TV shows together. Whether you're a casual viewer or a die-hard fan, MovieMania is here to support your entertainment journey every step of the way.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-mission">
      <h2>Meet the Team</h2>
        <div className="container">
          <div className="team-grid">
            <div className="team-member">
              <img src="/images/team5.png" alt="John Doe" />
              <h3>Tim Sen</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="/images/team4.png" alt="Jane Smith" />
              <h3>Arjuna Herls</h3>
              <p>Head of Operations</p>
            </div>
            <div className="team-member">
              <img src="/images/team5.png" alt="Mike Johnson" />
              <h3>Mike Johnson</h3>
              <p>Lead Developer</p>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
