import { projects } from './projects.data';
import './project.scss';

export default function Project({ projectId }: {projectId: number}) {
  const project = projects[projectId];

  return (
    <div className={`slider__item`}>
      <div className="slider__project-image"></div>
      <div className="slider__project-info">
        <h3 className="slider__project-name">{ project.name }</h3>
        <div className="slider__project-desc"></div>
        <a href={ project.link } className="slider__btn-open">Open project 🡢</a>
      </div>
    </div>
  )
}
