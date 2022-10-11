import React from "react";
import About from "./about/about";
import './app.scss';
import Header from './header/header';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
      </main>
    </>
  )
}

export default App;
