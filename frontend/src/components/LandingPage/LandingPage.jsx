import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header>
                <h1>Welcome to Our Multi-Restaurant App</h1>
                <nav>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </nav>
            </header>
            <main>
                <section className="hero">
                    <h2>Discover Delicious Food from Your Favorite Restaurants</h2>
                    <p>Order online and enjoy the best meals delivered to your door.</p>
                    <Link to="/register" className="cta-button">Get Started</Link>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Multi-Restaurant App. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
