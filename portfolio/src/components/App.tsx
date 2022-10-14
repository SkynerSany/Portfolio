import React from "react";
import About from "./about/about";
import './app.scss';
import Contact from "./contact/contact";
import Footer from "./footer/footer";
import Header from './header/header';
import Portfolio from "./portfolio/portfolio";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App;
