import "./App.css";
import Navbar1 from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./components/Slider";
import Bookticket from "./components/Bookticket";
import Movies from "./components/Movies";
import SignUp from "./components/signup";

import Navigation from "./components/Navigation";

import React from 'react';
import {  Routes, Route } from "react-router-dom";
function App() {
  return (
      <Routes>
        <Route  path="/" element={<><Navbar1 /><Navigation/><Slider /><Movies />  </>}/>
        <Route  path="/movies" element= {<Movies />} />
        <Route path="/bookingthor" element= {<Bookticket name="thor"/>} />
        <Route path="/bookingavengers" element= {<Bookticket name="avengers" />} />
        <Route path="/signup" element= {<SignUp />} />
      </Routes>
  );
}

export default App;