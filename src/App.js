import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import projectsData from './projects.json';
import HomePage from './pages/Home';

const ReactJSXPage = lazy(() => import('./pages/ReactJSXPage'));
const ComponentsPage = lazy(() => import('./pages/ComponentsPage'));
const ComponentsJSXPage = lazy(() => import('./pages/ComponentsJSXPage'));
const CssInJsPage = lazy(() => import('./pages/CssInJsPage'))
const StylingPage = lazy(() => import('./pages/StylingPage'))
const ClassComponentsEventsPage = lazy(() => import('./pages/ClassComponentsEventsPage'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {projectsData.map((project) => {
            const ProjectComponent = {
              ReactJSXPage,
              ComponentsPage,
              ComponentsJSXPage,
              CssInJsPage,
              StylingPage,
              ClassComponentsEventsPage
            }[project.element];

            return (
              <Route
                key={project.url}
                path={project.url}
                element={<ProjectComponent />}
              />
            );
          })}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
