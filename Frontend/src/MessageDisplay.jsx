import React from 'react';

function MessageDisplay({ message, type }) {
    if (!message) return null;

    const messageClass = `message-display ${type}`; // 'success' or 'error'

    return (
        <div className={messageClass}>
            {message}
        </div>
    );
}

export default MessageDisplay;