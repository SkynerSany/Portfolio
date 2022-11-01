interface projectsType {
  id: number,
  name: string,
  poster: string,
  link: string,
  github: string,
  technology: string[],
  adaptive: boolean,
  pageCount: string,
  pages?: string[],
}

export const projects: projectsType[] = [
  {
    id: 0,
    name: 'Movies collection',
    poster: './images/movies-collection.png',
    link: './projects/movies-collection/build/index.html',
    github: 'https://github.com/SkynerSany/MoviesCollection/tree/MoviesCollection',
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
    poster: './images/gem-puzzle.png',
    link: './projects/gem-puzzle/index.html',
    github: 'https://github.com/SkynerSany/gem-puzzle/tree/gem-puzzle',
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
    poster: './images/todo-list.png',
    link: './projects/todo-list/index.html',
    github: 'https://github.com/SkynerSany/Portfolio/tree/Portfolio/projects/To-do%20list',
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
    poster: './images/online-zoo.png',
    link: './projects/online-zoo/pages/main/index.html',
    github: 'https://github.com/SkynerSany/Online-zoo/tree/online-zoo',
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
    poster: './images/weather.png',
    link: './projects/weather/index.html',
    github: 'https://github.com/SkynerSany/weather/tree/weather',
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
    poster: './images/momentum.png',
    link: './projects/momentum/index.html',
    github: 'https://github.com/SkynerSany/Portfolio/tree/Portfolio/projects/momentum',
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
    poster: './images/repair.png',
    link: './projects/repair-design/index.html',
    github: 'https://github.com/SkynerSany/Portfolio/tree/Portfolio/projects/repair-design-project',
    technology: [
      'sass'
    ],
    adaptive: true,
    pageCount: 'Single page',
  },
  {
    id: 7,
    name: 'Shelter',
    poster: './images/shelter.png',
    link: './projects/shelter/pages/main/main.html',
    github: 'https://github.com/SkynerSany/Portfolio/tree/Portfolio/projects/shelter',
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
    poster: './images/interno.png',
    link: './projects/interno/index.html',
    github: 'https://github.com/SkynerSany/Portfolio/tree/Portfolio/projects/Interno',
    technology: [
      'css'
    ],
    adaptive: true,
    pageCount: 'Single page',
  },
];