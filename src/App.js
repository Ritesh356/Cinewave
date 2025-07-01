import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/home";
import { Signin } from "./pages/signin";
import './App.css';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signin" element={<Signin/>}/>
   </Routes>
   
   </BrowserRouter>
   </>
  )
}

export default App;
