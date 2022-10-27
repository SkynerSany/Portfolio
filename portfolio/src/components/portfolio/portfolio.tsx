import { useAppDispatch} from '../../hooks/reduxHooks';
import { setNextProject, setPrevProject } from '../../redux/actions';
import './portfolio.scss';
import Project from './progect/Project';

export default function Portfolio() {
  const dispatch = useAppDispatch();

  const setNext = () => {
    dispatch(setNextProject());
  }

  const setPrev = () => {
    dispatch(setPrevProject());
  }

  return (
    <section id='portfolio'>
      <div className="container">
        <h2 className="portfolio__title">Portfolio</h2>
        <div className="portfolio__sliderBox">
          <button onClick={() => setPrev()} className="portfolio__btn portfolio__btnLeft">🡠</button>
          <button onClick={() => setPrev()} className="portfolio__btnMobile portfolio__btnMobileLeft">❮</button>
          <div className="portfolio__slider">
            <Project />
          </div>
          <button onClick={() => setNext()} className="portfolio__btn portfolio__btnRight" data-text='🡢'>🡢</button>
          <button onClick={() => setNext()} className="portfolio__btnMobile portfolio__btnMobileRight">❯</button>
        </div>
      </div>
    </section>
  )
}
