import { createSlice } from "@reduxjs/toolkit";

const generateProblem = (difficulty) => {
  const num1 = Math.floor(Math.random() * 10 + difficulty * 2);
  const num2 = Math.floor(Math.random() * 10 + difficulty * 2);
  const ops = ["+", "-", "*"];
  const op = ops[Math.floor(Math.random() * ops.length)];
  const question = `${num1} ${op} ${num2}`;
  const answer = eval(question);
  return { question, answer };
};

const initialState = {
  score: 0,
  streak: 0,
  difficulty: 1,
  question: "",
  answer: null,
  timeLeft: 15,
  status: "idle",
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame(state) {
      const { question, answer } = generateProblem(state.difficulty);
      state.question = question;
      state.answer = answer;
      state.timeLeft = 15;
      state.status = "playing";
    },
    submitAnswer(state, action) {
      const isCorrect = parseInt(action.payload) === state.answer;
      if (isCorrect) {
        state.streak += 1;
        state.score += 10 + state.streak * 2;
        state.difficulty = Math.min(state.difficulty + 1, 10);
      } else {
        state.streak = 0;
      }
      const { question, answer } = generateProblem(state.difficulty);
      state.question = question;
      state.answer = answer;
      state.timeLeft = 15;
    },
    tick(state) {
      state.timeLeft -= 1;
      if (state.timeLeft <= 0) {
        state.streak = 0;
        const { question, answer } = generateProblem(state.difficulty);
        state.question = question;
        state.answer = answer;
        state.timeLeft = 15;
      }
    },
  },
});

export const { startGame, submitAnswer, tick } = gameSlice.actions;
export default gameSlice.reducer;
