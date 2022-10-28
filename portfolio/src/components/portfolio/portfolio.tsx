import { projects } from './progect/projects.data';
import uniqid from 'uniqid';
import './portfolio.scss';
import Project from './progect/Project';
import { useEffect, useRef, useState } from 'react';

export default function Portfolio() {
  const viewport = useRef() as React.MutableRefObject<HTMLInputElement>;
  const sliderBox = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [curentProject, setCurentProject] = useState(1);

  const scrollRight = (): void => {
    const itemWidth: number = parseFloat(getComputedStyle(viewport.current).width);

    setDisabledBtn();

    if (curentProject * itemWidth === viewport.current.scrollWidth) {
      viewport.current.scrollTo(0, 0)
      setCurentProject(1);
      return;
    }

    setCurentProject(prev => prev + 1);
    viewport.current.scrollBy(itemWidth, 0);
  }

  const setDisabledBtn = () => {
    sliderBox.current.querySelectorAll('button').forEach(item => {
      item.disabled = true;

      setTimeout(() => {
        item.disabled = false;
      }, 500);
    });
  }

  const scrollLeft = (): void => {
    const itemWidth: number = parseFloat(getComputedStyle(viewport.current).width)

    setDisabledBtn();

    if (curentProject === 0) {
      viewport.current.scrollTo(viewport.current.scrollWidth, 0);
      setCurentProject(projects.length - 1);
      return;
    }

    setCurentProject(prev => prev - 1);
    viewport.current.scrollBy(-itemWidth, 0)
  }

  const clickNext = () => {
    scrollRight();
    
  }

  const clickPrev = () => {
    scrollLeft();
  }

  return (
    <article id='portfolio'>
      <section className="container">
        <h2 className="portfolio__title">Portfolio</h2>
        <div ref={ sliderBox } className="portfolio__sliderBox">
          <button onClick={() => clickPrev()} className="portfolio__btn portfolio__btnLeft">🡠</button>
          <button onClick={() => clickPrev()} className="portfolio__btnMobile portfolio__btnMobileLeft">❮</button>
          <div className="slider">
            <div ref={ viewport } className="slider__viewport">
              {
                projects.map(project => <Project projectId={ project.id } key={ uniqid() } />)
              } 
            </div>
          </div>
          <button onClick={() => clickNext()} className="portfolio__btn portfolio__btnRight" data-text='🡢'>🡢</button>
          <button onClick={() => clickNext()} className="portfolio__btnMobile portfolio__btnMobileRight">❯</button>
        </div>
      </section>
    </article>
  )
}
