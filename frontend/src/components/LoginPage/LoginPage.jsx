import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your login logic here
        alert('Login logic goes here.');
    };

    return (
        <div className="login-page">
            <header>
                <h1>Login</h1>
                <nav>
                    <Link to="/register">Register</Link>
                    <Link to="/">Home</Link>
                </nav>
            </header>
            <main>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Login</button>
                </form>
            </main>
            <footer>
                <p>&copy; 2023 Multi-Restaurant App. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LoginPage;
