import React from "react";
import About from "./about/about";
import './app.scss';
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Greeting from "./greeting/Greeting";
import Header from './header/Header';
import Portfolio from "./portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />
      <main>
        <Greeting />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App;
