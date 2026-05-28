import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Launcher from "./apps/launcher/Launcher";
import WordApp from "./apps/word/WordApp";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Launcher />} />
        <Route path="/word" element={<WordApp />} />
        <Route path="/sheets" element={<div className="h-screen flex items-center justify-center font-bold text-2xl">Asan Sheets (Coming Soon)</div>} />
        <Route path="/slides" element={<div className="h-screen flex items-center justify-center font-bold text-2xl">Asan Slides (Coming Soon)</div>} />
        <Route path="/pdf" element={<div className="h-screen flex items-center justify-center font-bold text-2xl">Asan PDF (Coming Soon)</div>} />
      </Routes>
    </Router>
  );
}

export default App;
