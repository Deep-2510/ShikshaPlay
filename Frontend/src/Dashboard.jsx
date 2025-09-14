// Frontend/src/Dashboard.jsx
import React from 'react';

function Dashboard({ user, onLogout }) {
    if (!user) {
        // Should not happen if routed correctly, but good for safety
        return <div>Loading user data...</div>;
    }

    return (
        <div className="dashboard-container">
            <h2>Welcome to your Dashboard, {user.username}!</h2>
            <p>Your role: {user.role}</p>
            {/* You can add more dashboard content here based on user.role or other data */}
            <button onClick={onLogout} className="logout-button">
                Logout
            </button>
        </div>
    );
}

export default Dashboard;