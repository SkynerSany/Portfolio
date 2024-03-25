import React from 'react';
import { createRoot } from 'react-dom/client';
import { IPages } from './interfaces';
import JobSearchTable from './pages/job-search-table/job-search-table';
import PortfolioPage from './pages/portfolio/portfolioPage';

const PAGES: IPages = {
  'portfolio': <PortfolioPage />,
  'job-search-table': <JobSearchTable />
}

const container = document.querySelector('.root')!;
const root = createRoot(container);

const { pathname } = window.location;
const currentLocation = pathname.slice(1);
console.log(currentLocation)
root.render(
  <React.StrictMode>
      {
        PAGES[currentLocation] || PAGES.portfolio
      }
  </React.StrictMode>
);
