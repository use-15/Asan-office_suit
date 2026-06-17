import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Launcher from "./apps/launcher/Launcher";
import WordApp from "./apps/word/WordApp";
import SheetsApp from "./apps/sheets/SheetsApp";
import SlidesApp from "./apps/slides/SlidesApp";
import PDFApp from "./apps/pdf/PDFApp";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Launcher />} />
        <Route path="/word" element={<WordApp />} />
        <Route path="/sheets" element={<SheetsApp />} />
        <Route path="/slides" element={<SlidesApp />} />
        <Route path="/pdf" element={<PDFApp />} />
      </Routes>
    </Router>
  );
}

export default App;
