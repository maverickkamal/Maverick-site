import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import HomeLayout from './components/layout/HomeLayout';
import PageLayout from './components/layout/PageLayout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Articles from './pages/Articles';
import Que from './pages/Que';

function App() {
  return (
    <>
      <Routes>
      <Route
        path="/"
        element={
          <HomeLayout>
            <Home />
          </HomeLayout>
        }
      />
      <Route
        path="/about"
        element={
          <PageLayout>
            <About />
          </PageLayout>
        }
      />
      <Route
        path="/projects"
        element={
          <PageLayout>
            <Projects />
          </PageLayout>
        }
      />
      <Route
        path="/articles"
        element={
          <PageLayout>
            <Articles />
          </PageLayout>
        }
      />
      <Route
        path="/que"
        element={
          <PageLayout>
            <Que />
          </PageLayout>
        }
      />
    </Routes>
    <Analytics />
    </>
  );
}

export default App;
