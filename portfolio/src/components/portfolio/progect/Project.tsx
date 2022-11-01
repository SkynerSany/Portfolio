import { projects } from './projects.data';
import './project.scss';
import uniqid from 'uniqid';

function PagesList({ pages }: { pages: string[]} ) {
  return (
    <ul className="slider__project-pages">
      {
        pages.map(page => <li className='slider__project-page' key={ uniqid() }>{ page }</li>)
      }
    </ul>
  )
}

function TechnologyList({ technologies }: { technologies: string[] }) {
  return (
    <div className="slider__technology-list">
      <p className="slider__title">Technologies: </p>
      {
        technologies.map(technology => (
          <img className='slider__technology'
              src={`../../icons/technology/${ technology }.svg`}
              alt={ technology }
              key={ uniqid() }
          />
        ))
      }
    </div>
  );
}

export default function Project({ projectId }: {projectId: number}) {
  const project = projects[projectId];

  return (
    <div className={`slider__item`}>
      <div className="slider__project-image" style={{backgroundImage: `url(${project.poster})`}}></div>
      <div className="slider__project-info">
        <h3 className="slider__project-name">{ project.name }</h3>
        <div className="slider__project-desc">
          <TechnologyList technologies={ project.technology } />
          <ul className="slider__pages">
            <li className="slider__page-count">Page count: &nbsp;{ project.pageCount }</li>
            {
              project.pages && <PagesList pages={ project.pages } />
            }
          </ul>
          {
            project.adaptive && <p className="slider__adaptive">Adaptive</p>
          }
        </div>
        <a href={ project.link } className="slider__btn-open" target='_blank' rel="noreferrer">Open project 🡢</a>
      </div>
    </div>
  )
}
