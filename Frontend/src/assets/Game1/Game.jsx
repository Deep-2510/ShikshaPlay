// src/components/Game.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import socket from '../socket';

export default function Game() {
  const { gameId, userId } = useParams();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [turn, setTurn] = useState('');
  const [playerInfo, setPlayerInfo] = useState({});

  useEffect(() => {
    socket.on('gameStateUpdate', data => {
      setQuestion(data.currentQuestion);
      setTurn(data.turn);
      setPlayerInfo(data.playerInfo);
    });

    socket.on('error', err => alert(err.message));
  }, []);

  const submitAnswer = () => {
    socket.emit('submitAnswer', { gameId, userId, answer });
    setAnswer('');
  };

  return (
    <div>
      <h2>Question: {question}</h2>
      <input value={answer} onChange={e => setAnswer(e.target.value)} placeholder="Your answer" />
      <button onClick={submitAnswer}>Submit</button>
      <p>{turn === userId ? 'Your turn!' : 'Waiting for opponent...'}</p>
      <div>
        {Object.entries(playerInfo).map(([id, info]) => (
          <p key={id}>{id}: {info.score} pts (Streak: {info.streak})</p>
        ))}
      </div>
    </div>
  );
}
