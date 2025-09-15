import { Header } from "./components/header";
import { Dashboard } from "./components/dashboard";
import { BottomNav } from "./components/bottom-nav";
import "./styles/globals.css";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex flex-col">
      <Header />
      <Dashboard />
      <BottomNav />
    </div>
  );
}