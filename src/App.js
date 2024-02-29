import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Work from "./pages/Work.js";
import Contacts from "./pages/Contacts.js";
import { useTheme } from './ThemeProvider';






function App() {

  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Appliquer la classe de thème au body
    document.body.className = theme;
  }, [theme]); // Réappliquer lorsque le thème change

  return (

    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Work' element={<Work />} />
        <Route path='/Contacts' element={<Contacts />} />
      </Routes>
    </div>

  );
}

export default App;
