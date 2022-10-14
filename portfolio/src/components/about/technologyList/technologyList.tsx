import React from 'react'
import './technologyList.scss';

function Technology() {
  return (
    <div className="about__technology">
      <div className="about__technologyImg" />
      <p className="about__technologyTitle">FrontEnd</p>
    </div>
  )
}

export default function TechnologyList() {
  return (
    <div className="about__technologyList">
      <Technology />
      <Technology />
      <Technology />
      <Technology />
      <Technology />
      <Technology />
      <Technology />
    </div>
  )
}
