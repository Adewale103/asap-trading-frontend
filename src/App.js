import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/aboutUs/About";
import Currencies from "./components/currencies/Currencies";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="bg-image">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/currencies" element={<Currencies />} />
      </Routes>
      <Footer />
      <Dashboard />
    </div>
  );
}

export default App;
