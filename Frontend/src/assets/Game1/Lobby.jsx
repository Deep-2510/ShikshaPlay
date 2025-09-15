// src/components/Lobby.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import socket from '../socket';

export default function Lobby() {
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const createGame = () => {
    socket.emit('createGame', { userId });
    socket.on('gameCreated', ({ gameId }) => {
      navigate(`/game/${gameId}/${userId}`);
    });
  };

  const joinGame = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/games/find');
      const data = await res.json();
      socket.emit('joinGame', { gameId: data.gameId, userId });
      navigate(`/game/${data.gameId}/${userId}`);
    } catch {
      alert('No games available to join.');
    }
  };

  return (
    <div>
      <h1>Number Ninja</h1>
      <input value={userId} onChange={e => setUserId(e.target.value)} placeholder="Enter your User ID" />
      <button onClick={createGame}>Create Game</button>
      <button onClick={joinGame}>Join Game</button>
    </div>
  );
}
