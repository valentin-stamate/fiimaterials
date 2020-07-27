import React from 'react';
import './App.css';
import TopBar from "./Components/TopBar/TopBar";
import Intro from "./Components/Intro/Intro";
import ShortDetails from "./Components/ShortDetails/ShortDetails";
import Materials from "./Components/Materials/Materials";
import UsefulLinks from "./Components/UsefulLinks/UsefulLinks";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Intro />
      <ShortDetails/>
      <Materials />
      <UsefulLinks />

      <hr/>
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
