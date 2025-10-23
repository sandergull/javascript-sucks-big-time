import { Routes, Route } from 'react-router-dom';
import './styles/layout.css';

const MODE = 'solution' as 'solution' | 'task';

import SolutionAccordionPage from './solution/pages/AccordionPage';
import SolutionTabsPage from './solution/pages/TabsPage';
import SolutionModalPage from './solution/pages/ModalPage';
import SolutionCarouselPage from './solution/pages/CarouselPage';
import SolutionRangePage from './solution/pages/RangePage';

import TaskAccordionPage from './task/pages/AccordionPage';
import TaskTabsPage from './task/pages/TabsPage';
import TaskModalPage from './task/pages/ModalPage';
import TaskCarouselPage from './task/pages/CarouselPage';
import TaskRangePage from './task/pages/RangePage';

import TasksPage from './task/pages/TasksPage';

import * as SolutionNavLinks from './solution/components/nav-links';
import * as TaskNavLinks from './task/components/nav-links';

const NavLinks = MODE === 'task' ? TaskNavLinks : SolutionNavLinks;

const Header = () => (
  <header className="site-header">
    <h1 className="logo">HTML & CSS Components</h1>
    <p className="mode-indicator" aria-live="polite" data-mode={MODE}>
      Mode: <strong>{MODE}</strong>
    </p>
    <nav aria-label="Primary" className="primary-nav">
      <ul>
        <NavLinks.AccordionLink />
        <NavLinks.TabsLink />
        <NavLinks.ModalLink />
        <NavLinks.CarouselLink />
        <NavLinks.RangeLink />
        <NavLinks.TasksLink />
      </ul>
    </nav>
  </header>
);

const Home = () => (
  <main className="home">
    <h2>Welcome</h2>
    <p>
      This project showcases components typically implemented with JavaScript, but here they are
      built using only HTML and CSS techniques. Navigate through the examples to explore approaches
      using semantic markup and modern CSS selectors/pseudo-classes.
    </p>
  </main>
);

export default function App() {
  return (
    <div className="app" data-view-mode={MODE}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {MODE === 'solution' ? (
          // Solution mode - show solution pages
          <>
            <Route path="/accordion" element={<SolutionAccordionPage />} />
            <Route path="/tabs" element={<SolutionTabsPage />} />
            <Route path="/modal" element={<SolutionModalPage />} />
            <Route path="/carousel" element={<SolutionCarouselPage />} />
            <Route path="/range" element={<SolutionRangePage />} />
          </>
        ) : (
          // Task mode - show task pages only
          <>
            <Route path="/accordion" element={<TaskAccordionPage />} />
            <Route path="/tabs" element={<TaskTabsPage />} />
            <Route path="/modal" element={<TaskModalPage />} />
            <Route path="/carousel" element={<TaskCarouselPage />} />
            <Route path="/range" element={<TaskRangePage />} />
          </>
        )}
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
    </div>
  );
}
