// interstellar-frontend/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Ensure BrowserRouter is imported
import App from './App.jsx';
import './index.css';
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* App must be wrapped in BrowserRouter */}
      <App />
    </BrowserRouter>
    <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
);