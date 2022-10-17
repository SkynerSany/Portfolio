import React from 'react'
import { technologyProps} from './interfaces';
import './technologyList.scss';

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
    <div className="about__technologyContainer">
      <div className="about__technologyList">
        {
          TECHNOLOGY_NAMES.map(item => <Technology name={ item } key={item} />)
        }
      </div>
    </div>
  )
}
