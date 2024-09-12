import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import HomePage from './pages/Home';
import ReactJSXPage from './pages/ReactJSXPage';
/* import ComponentsPage from './pages/ComponentsPage';
 *//* import ComponentsJSXPage from './pages/ComponentsJSXPage';
import CssModulesPage from './pages/CssModulesPage';
import CssInJsPage from './pages/CssInJsPage';
import StylingPage from './pages/StylingPage';
import ClassComponentsEventsPage from './pages/ClassComponentsEventsPage';
import ComponentStatePage from './pages/ComponentStatePage';
import ClassComponentsEvents2Page from './pages/ClassComponentsEvents2Page';
import FormsPage from './pages/FormsPage';
import Forms2Page from './pages/Forms2Page';
import LifecyclePage from './pages/LifecyclePage';
import Lifecycle2Page from './pages/Lifecycle2Page';
import HttpRequestsPage from './pages/HttpRequestsPage';
import HttpRequests2Page from './pages/HttpRequests2Page';
import ReactHooksPage from './pages/ReactHooksPage';
import HooksUsagePage from './pages/HooksUsagePage';
import HooksContextPage from './pages/HooksContextPage';
import HooksMemoCallbackPage from './pages/HooksMemoCallbackPage';
import HooksUseReducerPage from './pages/HooksUseReducerPage';
import TeamProjectPage from './pages/TeamProjectPage'; */

import projectsData from './projects.json';

const components = {
  ReactJSXPage,
/*   ComponentsPage,
 */ /*  ComponentsJSXPage,
  CssModulesPage,
  CssInJsPage,
  StylingPage,
  ClassComponentsEventsPage,
  ComponentStatePage,
  ClassComponentsEvents2Page,
  FormsPage,
  Forms2Page,
  LifecyclePage,
  Lifecycle2Page,
  HttpRequestsPage,
  HttpRequests2Page,
  ReactHooksPage,
  HooksUsagePage,
  HooksContextPage,
  HooksMemoCallbackPage,
  HooksUseReducerPage,
  TeamProjectPage */
};

function App() {
  return (
    <Router>
      <Routes>
        {projectsData.map((project) => (
          <Route
            key={project.url}
            path={project.url}
            element={React.createElement(components[project.element])}
          />
        ))}
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
