import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './styles/variables.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/animations.css'
import './styles/components.css'
import './styles/hero.css'
import './styles/about.css'
import './styles/projects.css'
import './styles/articles.css'
import './styles/que.css'
import './styles/notfound.css'

import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
