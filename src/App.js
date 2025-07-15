import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { Signin } from "./pages/Signin.jsx"; 
import './App.css';

import Moviedetails from "./pages/Moviedetails.jsx";
import Seating from "./pages/Seating.jsx";

import Cinemas from "./pages/Booking.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />

        <Route path="/moviedetails" element={<Moviedetails />} />
        <Route path="/Booking" element={<Cinemas />} />
        <Route path="/Seating" element={<Seating />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
