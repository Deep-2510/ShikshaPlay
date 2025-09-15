import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import MessageDisplay from './MessageDisplay';
import { useSelector } from "react-redux";
import Lobby from "./components/Lobby";
import Game from "./components/Game";

const LOTTIE_ANIMATION_SRC = "https://lottie.host/8155042d-d7d2-495b-882b-93c3cb7a24c0/Z98gLbwJAu.lottie";

// Placeholder Dashboard Components
const StudentDashboard = ({ user }) => (
    <div className="dashboard-content">
        <h2>Welcome, Student {user.username}!</h2>
        <p>This is your student dashboard. Access your courses and assignments.</p>
    </div>
);

const TeacherDashboard = ({ user }) => (
    <div className="dashboard-content">
        <h2>Welcome, Teacher {user.username}!</h2>
        <p>This is your teacher dashboard. Manage your classes and students.</p>
    </div>
);

function App() {
    const [isLoginView, setIsLoginView] = useState(true);
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState('info');
    const [user, setUser] = useState(null); // State to hold logged-in user data


    //NumberNinjs 
    const status = useSelector((state) => state.game.status);
    // --- NEW: Check localStorage on initial load ---
    useEffect(() => {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // If user data exists, parse and set it
        }

        const checkInitialUsers = async () => {
            try {
                const response = await fetch('/api/check-users');
                const data = await response.json();
                if (!data.usersExist && !storedUser) { // Only prompt register if no users exist AND no user logged in via localStorage
                    setIsLoginView(false);
                    displayMessage('Welcome to Interstellar Quest! Please register your first account.', 'success');
                } else if (!storedUser) { // If users exist but no one is logged in, show login
                    setIsLoginView(true);
                }
                // If storedUser exists, we default to showing the dashboard via the 'if (user)' check below
            } catch (error) {
                console.error('Failed to check user existence:', error);
                displayMessage('Failed to connect to the server. Please check your network or try again later.', 'error');
                // Fallback: If backend check fails, and no stored user, default to login view
                if (!storedUser) setIsLoginView(true);
            }
        };
        // Only run checkInitialUsers if no user is already loaded from localStorage
        if (!storedUser) {
            checkInitialUsers();
        }
    }, []); // Run only once on component mount

    const displayMessage = (msg, type) => {
        setMessage(msg);
        setMessageType(type);
        setTimeout(() => {
            setMessage(null);
        }, 5000);
    };

    const handleLogin = async (credentials) => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });

            const data = await response.json();
            if (response.ok) {
                displayMessage(data.message, 'success');
                setUser(data.user); // Store user data including role
                localStorage.setItem('currentUser', JSON.stringify(data.user)); // --- NEW: Save to localStorage ---
            } else {
                displayMessage(data.message || 'Login failed', 'error');
            }
        } catch (error) {
            console.error('Error during login:', error);
            displayMessage('Network error. Please try again.', 'error');
        }
    };

    const handleRegister = async (userData) => {
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });

            const data = await response.json();
            if (response.ok) {
                displayMessage(data.message + ' You can now log in.', 'success');
                setTimeout(() => setIsLoginView(true), 2000);
            } else {
                displayMessage(data.message || 'Registration failed', 'error');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            displayMessage('Network error. Please try again.', 'error');
        }
    };

    const handleLogout = () => {
        setUser(null); // Clear user data from state
        localStorage.removeItem('currentUser'); // --- NEW: Remove from localStorage ---
        setIsLoginView(true); // Go back to login view
        displayMessage('You have been logged out.', 'info');
    };

    // Conditional rendering: If user is logged in, show dashboard
    if (user) {
        return (
            <div className="split-screen-container">
                <div className="animation-panel">
                    <DotLottieReact
                        src={LOTTIE_ANIMATION_SRC}
                        loop
                        autoplay
                        className="full-animation"
                    />
                </div>
                <div className="form-panel dashboard-panel">
                    <div className="dashboard-wrapper">
                        {message && <MessageDisplay message={message} type={messageType} />}
                        {user.role === 'student' ? (
                            <StudentDashboard user={user} />
                        ) : (
                            <TeacherDashboard user={user} />
                        )}
                        <div className="dashboard-footer">
                            <button onClick={handleLogout} className="primary-button logout-button">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Default rendering: Show login/signup forms
    return (
        <div className="split-screen-container">
            <div className="animation-panel">
                <DotLottieReact
                    src={LOTTIE_ANIMATION_SRC}
                    loop
                    autoplay
                    className="full-animation"
                />
            </div>

         status === "playing" ? <Game /> : <Lobby />;
            <div className="form-panel">
                <div className="login-signup-card">
                    <div className="card-header">
                        <h2>{isLoginView ? 'Welcome Traveler!' : 'Join the Expedition!'}</h2>
                    </div>

                    <MessageDisplay message={message} type={messageType} />

                    {isLoginView ? (
                        <LoginForm
                            onLogin={handleLogin}
                            onSwitchToRegister={() => setIsLoginView(false)}
                        />
                    ) : (
                        <RegisterForm
                            onRegister={handleRegister}
                            onSwitchToLogin={() => setIsLoginView(true)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;