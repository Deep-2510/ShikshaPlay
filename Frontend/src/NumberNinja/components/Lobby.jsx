import React from "react";
import { useDispatch } from "react-redux";
import { startGame } from "../features/gameSlice";

export default function Lobby() {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-ninja">
      <h1 className="text-4xl font-bold text-glow mb-6">Number Ninja ⚔️</h1>
      <p className="mb-4 text-lg text-gray-300">Sharpen your mind. Defeat with math.</p>
      <button
        onClick={() => dispatch(startGame())}
        className="bg-glow text-ninja px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all shadow-lg"
      >
        Start Battle
      </button>
    </div>
  );
}
