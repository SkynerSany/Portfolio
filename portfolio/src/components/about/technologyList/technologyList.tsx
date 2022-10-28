import React from 'react'
import './technologyList.scss';

interface technologyProps {
  name: string,
}

function Technology({ name }: technologyProps) {
  return (
    <div className="about__technology">
      <div className="about__technologyImg" style = {{backgroundImage: `url(./icons/technology/${name}.svg)`}}></div>
      <p className="about__technologyTitle">{name}</p>
    </div>
  )
}

export default function TechnologyList() {
  const TECHNOLOGY_NAMES: string[] = ['typescript', 'react', 'redux', 'javascript', 'sass', 'webpack', 'git'];

  return (
    <section className="about__technologyContainer">
      <div className="about__technologyList">
        {
          TECHNOLOGY_NAMES.map(item => <Technology name={ item } key={item} />)
        }
      </div>
    </section>
  )
}
