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
    poster: './portfolio/build/images/movies-collection.png',
    link: './portfolio/build/projects/movies-collection/build/index.html',
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
    poster: './portfolio/build/images/gem-puzzle.png',
    link: './portfolio/build/projects/gem-puzzle/index.html',
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
    poster: './portfolio/build/images/todo-list.png',
    link: './portfolio/build/projects/todo-list/index.html',
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
    poster: './portfolio/build/images/online-zoo.png',
    link: './portfolio/build/projects/online-zoo/pages/main/index.html',
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
    poster: './portfolio/build/images/weather.png',
    link: './portfolio/build/projects/weather/index.html',
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
    poster: './portfolio/build/images/momentum.png',
    link: './portfolio/build/projects/momentum/index.html',
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
    poster: './portfolio/build/images/repair.png',
    link: './portfolio/build/projects/repair-design/index.html',
    technology: [
      'sass'
    ],
    adaptive: true,
    pageCount: 'Single page',
  },
  {
    id: 7,
    name: 'Shelter',
    poster: './portfolio/build/images/shelter.png',
    link: './portfolio/build/projects/shelter/pages/main/main.html',
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
    poster: './portfolio/build/images/interno.png',
    link: './portfolio/build/projects/interno/index.html',
    technology: [
      'css'
    ],
    adaptive: true,
    pageCount: 'Single page',
  },
];