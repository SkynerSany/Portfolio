import { projects } from './projects.data';
import './project.scss';
import uniqid from 'uniqid';
import { useRef } from 'react';

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
        technologies.map((technology, id) => (
          <span className='slider__technology' key={ uniqid() }>
            {
              technologies.length - 1 === id ? technology : `${technology},`
            }
          </span>
        ))
      }
    </div>
  );
}

export default function Project({ projectId }: {projectId: number}) {
  const projectInfo = useRef() as React.MutableRefObject<HTMLDivElement>;
  const project = projects[projectId];

  const clickPoster = () => {
    if (document.documentElement.clientWidth > 1100) return;
    
    projectInfo.current.style.display = 'flex';

    projectInfo.current.addEventListener('click', () => {
      projectInfo.current.style.display = 'none';
    })
  }

  return (
    <div className="slider__item">
      <div onClick={ clickPoster }
          className="slider__project-image"
          style={{backgroundImage: `url(${project.poster})`}}
      ></div>
      <div ref={ projectInfo } className="slider__project-info">
        <h3 className="slider__project-name">{ project.name }</h3>
        <div className="slider__project-desc">
          <TechnologyList technologies={ project.technology } />
          <ul className="slider__pages">
            <li className="slider__page-count">Page count: &nbsp;{ project.pageCount }</li>
            {
              project.pages && <PagesList pages={ project.pages } />
            }
          </ul>
          <a href={ project.github } className="slider__github-link" target='_blank' rel="noreferrer">Link on GitHub</a>
          {
            project.adaptive && <p className="slider__adaptive">Adaptive</p>
          }
        </div>
        <a href={ project.link } className="slider__btn-open" target='_blank' rel="noreferrer">Open project 🡢</a>
      </div>
    </div>
  )
}
