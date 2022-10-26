import React, { useState } from 'react';
import './portfolio.scss';
import Project from './progect/Project';

export default function Portfolio() {
  const [project, setProject] = useState(0);

  const setNextProject = () => {
    
  }

  const setPrevProject = () => {

  }

  return (
    <section id='portfolio'>
      <div className="container">
        <h2 className="portfolio__title">Portfolio</h2>
        <div className="portfolio__sliderBox">
          <button onClick={() => setPrevProject()} className="portfolio__btn portfolio__btnLeft">🡠</button>
          <button onClick={() => setPrevProject()} className="portfolio__btnMobile portfolio__btnMobileLeft">❮</button>
          <div className="portfolio__slider">
            <Project />
          </div>
          <button onClick={() => setNextProject()} className="portfolio__btn portfolio__btnRight" data-text='🡢'>🡢</button>
          <button onClick={() => setNextProject()} className="portfolio__btnMobile portfolio__btnMobileRight">❯</button>
        </div>
      </div>
    </section>
  )
}
