import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { Signin } from "./pages/Signin.jsx"; 
import './App.css';
import Cinemas from "./pages/Booking.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/Booking" element={<Cinemas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
