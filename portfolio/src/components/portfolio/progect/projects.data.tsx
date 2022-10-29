interface projectsType {
  id: number,
  name: string,
  poster: string,
  link: string,
  technology: string[],
  adaptive: boolean,
  pageCount: string,
  pages?: string[],
}

export const projects: projectsType[] = [
  {
    id: 0,
    name: 'Movies collection',
    poster: '../../images/movies-collection.png',
    link: '../../projects/movies-collection/build/index.html',
    technology: [
      'react',
      'sass'
    ],
    adaptive: true,
    pageCount: 'Single page',
  },
  {
    id: 1,
    name: 'Gem puzzle',
    poster: '../../images/gem-puzzle.png',
    link: '../../projects/gem-puzzle/index.html',
    technology: [
      'javascript',
      'sass'
    ],
    adaptive: true,
    pageCount: 'Single page',
  },
  {
    id: 2,
    name: 'To Do List',
    poster: '../../images/todo-list.png',
    link: '../../projects/todo-list/index.html',
    technology: [
      'javascript',
      'sass'
    ],
    adaptive: true,
    pageCount: 'Single page',
  },
  {
    id: 3,
    name: 'Online zoo',
    poster: '../../images/online-zoo.png',
    link: '../../projects/online-zoo/pages/main/index.html',
    technology: [
      'javascript',
      'sass'
    ],
    adaptive: true,
    pageCount: '2',
    pages: [
      'About',
      'Donate',
    ],
  },
  {
    id: 4,
    name: 'Weather',
    poster: '../../images/weather.png',
    link: '../../projects/weather/index.html',
    technology: [
      'javascript',
      'sass'
    ],
    adaptive: true,
    pageCount: 'Single page',
  },
  {
    id: 5,
    name: 'Momentum',
    poster: '../../images/momentum.png',
    link: '../../projects/momentum/index.html',
    technology: [
      'javascript',
      'sass'
    ],
    adaptive: true,
    pageCount: 'Single page',
  },
  {
    id: 6,
    name: 'Repair design',
    poster: '../../images/repair.png',
    link: '../../projects/repair-design/index.html',
    technology: [
      'sass'
    ],
    adaptive: true,
    pageCount: 'Single page',
  },
  {
    id: 7,
    name: 'Shelter',
    poster: '../../images/shelter.png',
    link: '../../projects/shelter/pages/main/main.html',
    technology: [
      'sass'
    ],
    adaptive: true,
    pageCount: '2',
    pages: [
      'About the shelter',
      'Our pets',
    ],
  },
  {
    id: 8,
    name: 'Interno',
    poster: '../../images/interno.png',
    link: '../../projects/interno/index.html',
    technology: [
      'css'
    ],
    adaptive: true,
    pageCount: 'Single page',
  },
];