import React from 'react';
import './greeting.scss';
import uniqid from 'uniqid';

function Technology({name, i}: {name: string; i: number}) {
  return (
    <div className={`greeting__smallCircle greeting__smallCircle${i + 1}`} key={i}>
      <div style={{backgroundImage: `url(./icons/technology/${ name }.svg)`}}></div>
    </div>
  );
}

export default function Greeting() {
  const TECHNOLOGY_NAMES: string[] = ['webpack', 'sass', 'react', 'redux'];

  return (
    <article id="greeting">
      <div className="container">
        <section className="greeting__aboutMe">
          <p className="greeting__greeting">Hello</p>
          <p className="greeting__name">I'm Alexandr rylkov</p>
          <p className="greeting__aboutDesc">I've been doing front-end development. 
              Do you need a site layout, or maybe a fix a bugs in script? Then contact me
          </p>
          <div className="greeting__btnsContainer">
            <a href="#contact" className="greeting__btnContact">Contact me</a>
            <a href="./documents/cv.pdf" className="greeting__btnCv" download="CV Rylkov.pdf">CV</a>
          </div>
        </section>
        <section className="greeting__photo">
          <div className="greeting__photoCircle"></div>
          {
            TECHNOLOGY_NAMES.map((item, i) => <Technology name={ item } i={ i } key={ uniqid() }/>)  
          }
          <div className="greeting__photo-container"></div>
        </section>
      </div>
    </article>
  )
}
