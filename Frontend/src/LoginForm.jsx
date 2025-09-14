import React, { useState } from 'react';

function LoginForm({ onLogin, onSwitchToRegister }) {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({ usernameOrEmail, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="login-email"> Email</label>
                <input
                    type="text"
                    id="login-email"
                    name="Email"
                    placeholder="Enter your      email"
                    value={usernameOrEmail}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="input-group">
                <label htmlFor="login-password">Password</label>
                <input
                    type="password"
                    id="login-password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <button type="submit" className="primary-button">Login</button>

            {/* Social Login section has been removed */}

            <div className="footer-links">
                <a href="#" onClick={onSwitchToRegister} className="switch-mode">New user? Register Here!</a>
            </div>
        </form>
    );
}

export default LoginForm;