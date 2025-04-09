import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your registration logic here
        alert('Registration logic goes here.');
    };

    return (
        <div className="register-page">
            <header>
                <h1>Register</h1>
                <nav>
                    <Link to="/login">Login</Link>
                    <Link to="/">Home</Link>
                </nav>
            </header>
            <main>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

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

                    <button type="submit">Register</button>
                </form>
            </main>
            <footer>
                <p>&copy; 2023 Multi-Restaurant App. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default RegisterPage;
