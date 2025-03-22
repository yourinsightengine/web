import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import PartnersPage from "./pages/PartnersPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import JoinUsPage from "./pages/JoinUsPage.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-primary">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/join" element={<JoinUsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
