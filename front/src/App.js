import './assets/styles/App.css';
import React, {useState} from "react";
import Header from "./components/Header/Header";
import Router from "./components/Router/Router";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <div className="App">
      <Router/>
      <Routes>
        <Route path="signup" element={<Registration/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
