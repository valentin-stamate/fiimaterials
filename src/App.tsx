import React from 'react';
import './App.css';
import TopBar from "./Components/TopBar/TopBar";
import Intro from "./Components/Intro/Intro";
import ShortDetails from "./Components/ShortDetails/ShortDetails";
import Materials from "./Components/Materials/Materials";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Intro />
      <ShortDetails/>
      <Materials />
    </div>
  );
}

export default App;
