import React from 'react'
import './about.scss';
import TechnologyList from './technologyList/technologyList';

export default function About() {
  return (
    <section id='about'>
      <div className="container">
        <TechnologyList />
      </div>
    </section>
  )
}
