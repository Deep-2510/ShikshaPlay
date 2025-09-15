// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { submitAnswer, tick } from "../features/gameSlice";
// import { Flame, TimerReset, Trophy } from "lucide-react";

// export default function Game() {
//   const { question, score, streak, timeLeft, status } = useSelector((state) => state.game);
//   const [input, setInput] = useState("");
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (status === "playing") {
//       const timer = setInterval(() => dispatch(tick()), 1000);
//       return () => clearInterval(timer);
//     }
//   }, [dispatch, status]);

//   const handleSubmit = () => {
//     dispatch(submitAnswer(input));
//     setInput("");
//   };

//   return (
//     <main className="relative min-h-screen bg-gradient-to-br from-blue-950 to-blue-800 flex items-center justify-center overflow-hidden">
//       {/* Floating Numbers Background */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {[...Array(40)].map((_, i) => (
//           <span
//             key={i}
//             className="absolute text-white text-opacity-10 text-7xl animate-[float_12s_linear_infinite]"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               transform: `rotate(${Math.random() * 360}deg)`,
//               animationDelay: `${i * 0.3}s`,
//             }}
//           >
//             {Math.floor(Math.random() * 99)}
//           </span>
//         ))}
//       </div>

//       {/* Game Container */}
//       <div className="relative z-10 w-full max-w-4xl bg-white/90 backdrop-blur-md text-blue-900 rounded-3xl shadow-2xl p-10 md:p-14">
//         <header className="text-center mb-8">
//           <h1 className="text-4xl font-extrabold text-blue-800 tracking-wide">Number Ninja ⚔️</h1>
//           <p className="text-sm text-gray-600 mt-2">Master the numbers. Defeat with precision.</p>
//         </header>

//         <section className="text-center">
//           <h2 className="text-xl font-semibold mb-2">🧠 Your Challenge:</h2>
//           <p className="text-4xl font-bold mb-6">{question}</p>
//           <input
//             type="number"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Enter your answer"
//             className="w-full p-4 border border-blue-300 rounded-xl text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             onClick={handleSubmit}
//             className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md"
//           >
//             Submit Answer
//           </button>
//         </section>

//         <footer className="mt-10 grid grid-cols-3 gap-6 text-center text-sm">
//           <div className="flex flex-col items-center">
//             <TimerReset className="w-6 h-6 text-blue-500 mb-1" />
//             <span className="text-gray-500">Time Left</span>
//             <span className="text-xl font-bold">{timeLeft}s</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <Flame className="w-6 h-6 text-orange-500 mb-1" />
//             <span className="text-gray-500">Streak</span>
//             <span className="text-xl font-bold">{streak}</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <Trophy className="w-6 h-6 text-yellow-500 mb-1" />
//             <span className="text-gray-500">Score</span>
//             <span className="text-xl font-bold">{score}</span>
//           </div>
//         </footer>
//       </div>
//     </main>
//   );
// }

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { submitAnswer, tick } from "../features/gameSlice";
import { Flame, TimerReset, Trophy, Zap, Shield, Sword } from "lucide-react";

export default function Game() {
  const { question, score, streak, timeLeft, status } = useSelector((state) => state.game);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "playing") {
      const timer = setInterval(() => dispatch(tick()), 1000);
      return () => clearInterval(timer);
    }
  }, [dispatch, status]);

  const handleSubmit = () => {
    dispatch(submitAnswer(input));
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <main className="game-arena">
      {/* Animated Background Elements */}
      <div className="floating-numbers">
        {[...Array(50)].map((_, i) => {
          const mathSymbols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '×', '÷', '=', '%', '√', '^', '∞', 'π'];
          const symbol = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
          return (
            <span
              key={i}
              className="number-particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                fontSize: `${Math.random() * 2 + 1}rem`,
                animationDuration: `${Math.random() * 5 + 10}s`,
              }}
            >
              {symbol}
            </span>
          );
        })}
      </div>

      {/* Lightning Effects */}
      <div className="lightning-effects">
        <div className="lightning lightning-1"></div>
        <div className="lightning lightning-2"></div>
        <div className="lightning lightning-3"></div>
      </div>

      {/* Main Battle Interface */}
      <div className="battle-container">
        {/* Header with Ninja Theme */}
        <header className="ninja-header">
          <div className="ninja-title">
            <Sword className="ninja-icon" />
            <h1 className="game-title">Number Ninja</h1>
            <Shield className="ninja-icon" />
          </div>
          <p className="ninja-subtitle">⚔️ Master the Art of Mathematical Combat ⚔️</p>
          <div className="power-indicator">
            <Zap className="power-icon" />
            <span>Battle Mode Active</span>
            <Zap className="power-icon" />
          </div>
        </header>

        {/* Battle Stats Bar */}
        <div className="battle-stats">
          <div className="stat-card timer-card">
            <TimerReset className="stat-icon" />
            <div className="stat-content">
              <span className="stat-label">Time Left</span>
              <span className={`stat-value ${timeLeft <= 10 ? 'critical-time' : ''}`}>
                {timeLeft}s
              </span>
            </div>
            <div className={`timer-bar ${timeLeft <= 10 ? 'critical' : ''}`}>
              <div 
                className="timer-fill" 
                style={{ width: `${(timeLeft / 30) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="stat-card streak-card">
            <Flame className="stat-icon flame-icon" />
            <div className="stat-content">
              <span className="stat-label">Streak</span>
              <span className={`stat-value ${streak >= 5 ? 'hot-streak' : ''}`}>
                {streak}
              </span>
            </div>
            {streak >= 3 && (
              <div className="streak-effect">
                <span className="streak-particle">🔥</span>
                <span className="streak-particle">⚡</span>
                <span className="streak-particle">💥</span>
              </div>
            )}
          </div>

          <div className="stat-card score-card">
            <Trophy className="stat-icon trophy-icon" />
            <div className="stat-content">
              <span className="stat-label">Score</span>
              <span className="stat-value">{score}</span>
            </div>
            <div className="score-gems">
              {score >= 100 && <span className="gem">💎</span>}
              {score >= 500 && <span className="gem">🏆</span>}
              {score >= 1000 && <span className="gem">👑</span>}
            </div>
          </div>
        </div>

        {/* Challenge Section */}
        <section className="challenge-arena">
          <div className="challenge-header">
            <h2 className="challenge-title">🎯 Battle Challenge</h2>
            <div className="difficulty-indicator">
              <span className="difficulty-stars">
                {"⭐".repeat(Math.min(Math.floor(score / 200) + 1, 5))}
              </span>
            </div>
          </div>
          
          <div className="equation-display">
            <div className="equation-bg">
              <span className="equation-text">{question}</span>
            </div>
            <div className="equation-glow"></div>
          </div>

          <div className="answer-section">
            <input
              type="number"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your answer..."
              className="ninja-input"
              autoFocus
            />
            <button
              onClick={handleSubmit}
              className="battle-button"
              disabled={!input.trim()}
            >
              <span className="button-text">⚔️ ATTACK!</span>
              <div className="button-glow"></div>
            </button>
          </div>

          {/* Power-up Indicators */}
          <div className="powerup-indicators">
            {streak >= 3 && (
              <div className="powerup active">
                <Flame className="powerup-icon" />
                <span>Fire Boost!</span>
              </div>
            )}
            {streak >= 5 && (
              <div className="powerup active">
                <Zap className="powerup-icon" />
                <span>Lightning Strike!</span>
              </div>
            )}
            {timeLeft <= 10 && (
              <div className="powerup critical">
                <TimerReset className="powerup-icon" />
                <span>Last Stand!</span>
              </div>
            )}
          </div>
        </section>

        {/* Battle Effects */}
        <div className="battle-effects">
          <div className="spark spark-1"></div>
          <div className="spark spark-2"></div>
          <div className="spark spark-3"></div>
          <div className="spark spark-4"></div>
        </div>
      </div>
    </main>
  );
}