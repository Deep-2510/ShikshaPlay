import React, { useState } from 'react';

function RegisterForm({ onRegister, onSwitchToLogin }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('student'); // Default role to 'student'

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        onRegister({ username, email, password, role });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="signup-username">Username</label>
                <input
                    type="text"
                    id="signup-username"
                    name="username"
                    placeholder="Choose a unique username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    minLength="3"
                />
            </div>
            <div className="input-group">
                <label htmlFor="signup-email">Email</label>
                <input
                    type="email"
                    id="signup-email"
                    name="email"
                    placeholder="Your space-mail address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="input-group">
                <label htmlFor="signup-password">Password</label>
                <input
                    type="password"
                    id="signup-password"
                    name="password"
                    placeholder="Create a strong password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength="6"
                />
            </div>
            <div className="input-group">
                <label htmlFor="signup-confirm-password">Confirm Password</label>
                <input
                    type="password"
                    id="signup-confirm-password"
                    name="confirmPassword"
                    placeholder="Repeat your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>

            <div className="input-group">
                <label htmlFor="role-select">I am a:</label>
                <select
                    id="role-select"
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                </select>
            </div>

            <button type="submit" className="primary-button">Register Account</button>

            <div className="footer-links">
                <a href="#" onClick={onSwitchToLogin} className="switch-mode">Already have an account? Log In!</a>
            </div>
        </form>
    );
}

export default RegisterForm;