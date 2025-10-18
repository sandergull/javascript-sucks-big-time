import { Routes, Route } from 'react-router-dom';
import './styles/layout.css';

// --- Environment / Mode Handling ------------------------------------------
// Augment global typing for the Vite env variable.
declare global {
  interface ImportMetaEnv {
    readonly VITE_VIEW_MODE?: 'solution' | 'task';
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

// Normalize mode: only 'task' explicitly selects task view, everything else falls back to solution.
const MODE: 'solution' | 'task' = import.meta.env.VITE_VIEW_MODE === 'task' ? 'task' : 'solution';

// Helper to pick implementation set based on MODE. We keep static imports so tree-shaking works and
// avoid dynamic import complexity for pages (they're small). Conditional selection happens at render time.
import SolutionAccordionPage from './solution/pages/AccordionPage';
import SolutionTabsPage from './solution/pages/TabsPage';
import SolutionModalPage from './solution/pages/ModalPage';
import SolutionCarouselPage from './solution/pages/CarouselPage';
import SolutionTooltipPage from './solution/pages/TooltipPage';

import TaskAccordionPage from './task/pages/AccordionPage';
import TaskTabsPage from './task/pages/TabsPage';
import TaskModalPage from './task/pages/ModalPage';
import TaskCarouselPage from './task/pages/CarouselPage';
import TaskTooltipPage from './task/pages/TooltipPage';

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
        <NavLinks.TooltipLink />
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
        <Route
          path="/accordion"
          element={MODE === 'task' ? <TaskAccordionPage /> : <SolutionAccordionPage />}
        />
        <Route path="/tabs" element={MODE === 'task' ? <TaskTabsPage /> : <SolutionTabsPage />} />
        <Route
          path="/modal"
          element={MODE === 'task' ? <TaskModalPage /> : <SolutionModalPage />}
        />
        <Route
          path="/carousel"
          element={MODE === 'task' ? <TaskCarouselPage /> : <SolutionCarouselPage />}
        />
        <Route
          path="/tooltip"
          element={MODE === 'task' ? <TaskTooltipPage /> : <SolutionTooltipPage />}
        />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
    </div>
  );
}
