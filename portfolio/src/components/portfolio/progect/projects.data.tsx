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
    poster: './images/movies-collection.avif',
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
    name: 'SongBird',
    poster: './images/songbird.avif',
    link: './projects/songbird/index.html',
    github: 'https://github.com/SkynerSany/songbird/tree/songbird',
    technology: [
      'javascript',
      'sass'
    ],
    adaptive: true,
    pageCount: 'Single page',
  },
  {
    id: 2,
    name: 'Gem puzzle',
    poster: './images/gem-puzzle.avif',
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
    id: 3,
    name: 'To Do List',
    poster: './images/todo-list.avif',
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
    id: 4,
    name: 'Online zoo',
    poster: './images/online-zoo.avif',
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
    id: 5,
    name: 'Weather',
    poster: './images/weather.avif',
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
    id: 6,
    name: 'Momentum',
    poster: './images/momentum.avif',
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
    id: 7,
    name: 'Repair design',
    poster: './images/repair.avif',
    link: './projects/repair-design/index.html',
    github: 'https://github.com/SkynerSany/Portfolio/tree/Portfolio/projects/repair-design-project',
    technology: [
      'sass'
    ],
    adaptive: true,
    pageCount: 'Single page',
  },
  {
    id: 8,
    name: 'Shelter',
    poster: './images/shelter.avif',
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
    id: 9,
    name: 'Interno',
    poster: './images/interno.avif',
    link: './projects/interno/index.html',
    github: 'https://github.com/SkynerSany/Portfolio/tree/Portfolio/projects/Interno',
    technology: [
      'css'
    ],
    adaptive: true,
    pageCount: 'Single page',
  },
];