import React from 'react';
import './portfolio.scss';

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <div className="container">
        <h2 className="portfolio__title">Portfolio</h2>
        <div className="portfolio__sliderBox">
          <button className="portfolio__btn portfolio__btnLeft">🡠</button>
          <button className="portfolio__btnMobile portfolio__btnMobileLeft">❮</button>
          <div className="portfolio__slider">
            <div className="portfolio__sliderItem">
              <div className="portfolio__projectImage"></div>
              <div className="portfolio__projectInfo">
                <h3 className="portfolio__projectName">Repair design</h3>
                <p className="portfolio__projectDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.</p>
                <button className="portfolio__btnMore">More 🡢</button>
              </div>
            </div>
          </div>
          <button className="portfolio__btn portfolio__btnRight" data-text='🡢'>🡢</button>
          <button className="portfolio__btnMobile portfolio__btnMobileRight">❯</button>
        </div>
      </div>
    </section>
  )
}
