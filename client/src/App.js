import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OddJobs from "./pages/Oddjobs";
import Businesses from "./pages/Businesses";
import Items from "./pages/Items";
import MyJobs from "./pages/MyJobs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oddjobs" element={<OddJobs />} />
        <Route path="/businesses" element={<Businesses />} />
        <Route path="/items" element={<Items />} />
        <Route path="/myjobs" element={<MyJobs />} />
      </Routes>
    </Router>
  );
}

export default App;
