import './assets/styles/App.css';
import React, {useState} from "react";
import Header from "./components/Header/Header";
import Router from "./components/Router/Router";

function App() {
  const [loading] = useState(false);
  // if (loading) {
    // return <Loader/>
  // }
  return (
    <div className="App">
      <Router/>
      {/*<Header/>*/}
    </div>
  );
}

export default App;
