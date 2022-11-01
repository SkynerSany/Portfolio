import './portfolio.scss';
import { projects } from './progect/projects.data';
import uniqid from 'uniqid';
import Project from './progect/project';
import { useRef, useState } from 'react';

export default function Portfolio() {
  const viewport = useRef() as React.MutableRefObject<HTMLDivElement>;
  const sliderBox = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [curentProject, setCurentProject] = useState(0);

  const setDisabledBtn = (time: number) => {
    sliderBox.current.querySelectorAll('button').forEach(item => {
      item.disabled = true;

      setTimeout(() => {
        item.disabled = false;
      }, time);
    });
  }

  const scrollRight = (): void => {
    const itemWidth: number = parseFloat(getComputedStyle(viewport.current).width);

    if (Math.floor((curentProject + 1) * itemWidth) >= Math.floor(viewport.current.scrollWidth) - 1) {
      viewport.current.scrollTo(0, 0)
      setCurentProject(0);
      setDisabledBtn(700);
      return;
    }

    setDisabledBtn(500);
    setCurentProject(prev => prev + 1);
    viewport.current.scrollBy(itemWidth, 0);
  }

  const scrollLeft = (): void => {
    const itemWidth: number = parseFloat(getComputedStyle(viewport.current).width);
    
    if (curentProject === 0) {
      viewport.current.scrollTo(viewport.current.scrollWidth, 0);
      setCurentProject(projects.length - 1);
      setDisabledBtn(700);
      return;
    }

    setDisabledBtn(500);
    setCurentProject(prev => prev - 1);
    viewport.current.scrollBy(-itemWidth, 0);
  }

  return (
    <article id='portfolio'>
      <section className="container">
        <h2 className="portfolio__title">Portfolio</h2>
        <div ref={ sliderBox } className="portfolio__sliderBox">
          <button onClick={ scrollLeft } className="portfolio__btn portfolio__btnLeft">🡠</button>
          <button onClick={ scrollLeft } className="portfolio__btnMobile portfolio__btnMobileLeft">❮</button>
          <div className="slider">
            <div ref={ viewport } className="slider__viewport">
              {
                projects.map(project => <Project projectId={ project.id } key={ uniqid() } />)
              } 
            </div>
          </div>
          <button onClick={ scrollRight } className="portfolio__btn portfolio__btnRight" data-text='🡢'>🡢</button>
          <button onClick={ scrollRight } className="portfolio__btnMobile portfolio__btnMobileRight">❯</button>
        </div>
      </section>
    </article>
  )
}
