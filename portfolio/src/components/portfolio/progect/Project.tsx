import React from 'react';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { projects } from './projects.data';
import './project.scss';

export default function Project() {
  const projectId = useAppSelector(state => {
    const { portfolioReducer } = state;
    return portfolioReducer.projectId;
  })

  const project = projects[projectId];

  return (
    <div className="portfolio__sliderItem">
      <div className="portfolio__projectImage"></div>
      <div className="portfolio__projectInfo">
        <h3 className="portfolio__projectName">{ project.name }</h3>
        <p className="portfolio__projectDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.</p>
        <a href={ project.link } className="portfolio__btnMore">Open project 🡢</a>
      </div>
    </div>
  )
}
