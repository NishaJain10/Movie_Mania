import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import tvShowsLottie from "../home.json";

const Home = () => {
  const { user } = useAuth();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: tvShowsLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const scrollableContainerStyle = {
    display: 'flex',
    overflowX: 'auto',
    gap: '1rem',
    padding: '1rem 0',
    whiteSpace: 'nowrap', // Ensures items are on a single line
  };

  const scrollableItemStyle = {
    minWidth: '250px',
    flex: '0 0 auto', // Prevent shrinking
  };
  

  return (
    <main>
      {/* Hero Section */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <h1>Discover Your Next Binge, {user ? user.username : "Entertainment Lover"}!</h1>
            <p>Dive into the World of Movies & TV Shows with MovieMania</p>
            <div className="btn-group">
              <Link to="/about">
                <button className="btn">Learn More About Us</button>
              </Link>
              <Link to="/service">
                <button className="btn secondary-btn">Explore Our Collection</button>
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </div>
      </section>

      {/* Featured Shows Section */}
      <section className="featured-shows">

        <h2>Top Picks for You</h2>
        <div className="container" style={scrollableContainerStyle}>
          <div className="show-card" style={scrollableItemStyle}>
            <img src="/images/show1.jpg" alt="The Amazing Show" />
            <div className="show-details">
              <h3>The Amazing Show</h3>
              <p>Season 1</p>
              <Link to="/show-details">View Details</Link>
            </div>
          </div>
          <div className="show-card" style={scrollableItemStyle}>
            <img src="/images/show2.jpg" alt="Thriller Nights" />
            <div className="show-details">
              <h3>Thriller Nights</h3>
              <p>Season 3</p>
              <Link to="/show-details">View Details</Link>
            </div>
          </div>
          <div className="show-card" style={scrollableItemStyle}>
            <img src="/images/show3.jpg" alt="Action Packed" />
            <div className="show-details">
              <h3>Action Packed</h3>
              <p>Season 2</p>
              <Link to="/show-details">View Details</Link>
            </div>
          </div>
          <div className="show-card" style={scrollableItemStyle}>
            <img src="/images/show4.jpg" alt="Family Drama" />
            <div className="show-details">
              <h3>Family Drama</h3>
              <p>Season 1</p>
              <Link to="/show-details">View Details</Link>
            </div>
          </div>
          <div className="show-card" style={scrollableItemStyle}>
            <img src="/images/show7.jpg" alt="Family Drama" />
            <div className="show-details">
              <h3>Thriller</h3>
              <p>Season 1</p>
              <Link to="/show-details">View Details</Link>
            </div>
          </div>
          <div className="show-card" style={scrollableItemStyle}>
            <img src="/images/show6.jpg" alt="Family Drama" />
            <div className="show-details">
              <h3>Comedy</h3>
              <p>Season 1</p>
              <Link to="/show-details">View Details</Link>
            </div>
          </div>
          <div className="show-card" style={scrollableItemStyle}>
            <img src="/images/show5.jpg" alt="Family Drama" />
            <div className="show-details">
              <h3>Love Story</h3>
              <p>Season 1</p>
              <Link to="/show-details">View Details</Link>
            </div>
          </div>
        </div>
      </section>

      {/* User Reviews Section */}
      <section className="user-reviews">
        <h2>Viewers Feedback</h2>
        <div className="container" style={scrollableContainerStyle}>
          <div className="review" style={scrollableItemStyle}>
            <p>"MovieMania has the best collection of shows! Always find something great to watch."</p>
            <p className="review-author">- Sarah K.</p>
          </div>
          <div className="review" style={scrollableItemStyle}>
            <p>"The streaming quality is excellent and the variety is amazing. Highly recommend!"</p>
            <p className="review-author">- Mark T.</p>
          </div>
          <div className="review" style={scrollableItemStyle}>
            <p>"I love the user-friendly interface. It makes it so easy to find my favorite shows."</p>
            <p className="review-author">- Emily R.</p>
          </div>
          <div className="review" style={scrollableItemStyle}>
            <p>"The recommendations are spot on. I always find something new and exciting to watch."</p>
            <p className="review-author">- Alex M.</p>
          </div>
          <div className="review" style={scrollableItemStyle}>
            <p>"Great customer service! They quickly resolved my issue and were very helpful."</p>
            <p className="review-author">- John D.</p>
          </div>
          <div className="review" style={scrollableItemStyle}>
            <p>"MovieMania's streaming speed is fantastic. No buffering issues at all!"</p>
            <p className="review-author">- Lisa H.</p>
          </div>
          <div className="review" style={scrollableItemStyle}>
            <p>"The selection of movies and TV shows is unparalleled. There's something for everyone."</p>
            <p className="review-author">- Tom W.</p>
          </div>
          <div className="review" style={scrollableItemStyle}>
            <p>"I appreciate the parental controls. I can let my kids watch safely."</p>
            <p className="review-author">- Karen P.</p>
          </div>
        </div>
      </section>
    </main>

  );
};

export default Home;
