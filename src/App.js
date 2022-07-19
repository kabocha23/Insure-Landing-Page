import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleIsNav = () => {
      setIsNavExpanded(!isNavExpanded)
      document.body.classList.toggle('fixed-pos');
  }


  return (
    <div className="App">
      <Navbar 
        toggleIsNav={toggleIsNav}
        isNavExpanded={isNavExpanded}
      />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
