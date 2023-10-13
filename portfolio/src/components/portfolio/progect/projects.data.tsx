interface projectsType {
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
    name: 'Movies collection',
    poster: './images/movies-collection.avif',
    link: './projects/movies-collection/build/index.html',
    github: 'https://github.com/SkynerSany/MoviesCollection/tree/MoviesCollection',
    technology: [
      'React',
      'SASS'
    ],
    adaptive: true,
    pageCount: 'Single page',
  },
  {
    name: 'Online Store',
    poster: './images/online-store.avif',
    link: 'https://splendid-figolla-f64fe0.netlify.app/#catalog',
    github: 'https://github.com/SkynerSany/Online-Store',
    technology: [
      'TypeScript',
      'SASS',
    ],
    adaptive: true,
    pageCount: '2',
    pages: [
      'Catalog',
      'Cart',
    ],
  },
  {
    name: 'GraphiQL',
    poster: './images/graphiql.avif',
    link: 'https://keen-otter-803392.netlify.app/',
    github: 'https://github.com/SkynerSany/graphiql-app',
    technology: [
      'React',
      'TypeScript',
      'Redux ToolKit',
      'Firebase',
      'SASS'
    ],
    adaptive: true,
    pageCount: '2',
    pages: [
      'Main',
      'Editor',
    ],
  },
  {
    name: 'SongBird',
    poster: './images/songbird.avif',
    link: './projects/songbird/index.html',
    github: 'https://github.com/SkynerSany/songbird/tree/songbird',
    technology: [
      'JavaScript',
      'SASS'
    ],
    adaptive: true,
    pageCount: 'Single page',
  },
  {
    name: 'Gem puzzle',
    poster: './images/gem-puzzle.avif',
    link: './projects/gem-puzzle/index.html',
    github: 'https://github.com/SkynerSany/gem-puzzle/tree/gem-puzzle',
    technology: [
      'JavaScript',
      'SASS'
    ],
    adaptive: true,
    pageCount: 'Single page',
  },
  {
    name: 'To Do List',
    poster: './images/todo-list.avif',
    link: './projects/todo-list/index.html',
    github: 'https://github.com/SkynerSany/Portfolio/tree/Portfolio/projects/To-do%20list',
    technology: [
      'JavaScript',
      'SASS'
    ],
    adaptive: true,
    pageCount: 'Single page',
  },
  {
    name: 'Online zoo',
    poster: './images/online-zoo.avif',
    link: './projects/online-zoo/pages/main/index.html',
    github: 'https://github.com/SkynerSany/Online-zoo/tree/online-zoo',
    technology: [
      'JavaScript',
      'SASS'
    ],
    adaptive: true,
    pageCount: '2',
    pages: [
      'About',
      'Donate',
    ],
  },
  {
    name: 'Weather',
    poster: './images/weather.avif',
    link: './projects/weather/index.html',
    github: 'https://github.com/SkynerSany/weather/tree/weather',
    technology: [
      'JavaScript',
      'SASS'
    ],
    adaptive: true,
    pageCount: 'Single page',
  },
  {
    name: 'Momentum',
    poster: './images/momentum.avif',
    link: './projects/momentum/index.html',
    github: 'https://github.com/SkynerSany/Portfolio/tree/Portfolio/projects/momentum',
    technology: [
      'JavaScript',
      'SASS'
    ],
    adaptive: true,
    pageCount: 'Single page',
  },
  {
    name: 'Repair design',
    poster: './images/repair.avif',
    link: './projects/repair-design/index.html',
    github: 'https://github.com/SkynerSany/Portfolio/tree/Portfolio/projects/repair-design-project',
    technology: [
      'SASS'
    ],
    adaptive: true,
    pageCount: 'Single page',
  },
  {
    name: 'Shelter',
    poster: './images/shelter.avif',
    link: './projects/shelter/pages/main/main.html',
    github: 'https://github.com/SkynerSany/Portfolio/tree/Portfolio/projects/shelter',
    technology: [
      'SASS'
    ],
    adaptive: true,
    pageCount: '2',
    pages: [
      'About the shelter',
      'Our pets',
    ],
  },
  {
    name: 'Interno',
    poster: './images/interno.avif',
    link: './projects/interno/index.html',
    github: 'https://github.com/SkynerSany/Portfolio/tree/Portfolio/projects/Interno',
    technology: [
      'CSS'
    ],
    adaptive: true,
    pageCount: 'Single page',
  },
];