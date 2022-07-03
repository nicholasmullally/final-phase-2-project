
import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home"
import Wharf from "./pages/Wharf";
import GoldenGatePark from './pages/Park';
import Financial from "./pages/Financial";
import Alcatraz from "./pages/Alcatraz";
import NotFound from "./pages/NotFound";
import Liker from './components/Liker';
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/wharf' element={<Wharf />} />
          <Route path='/ggpark' element={<GoldenGatePark />} />
          <Route path='/shopping' element={<Financial />} />
          <Route path='/alcatraz' element={<Alcatraz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    <Liker />
    </div>
  );
}

export default App;
