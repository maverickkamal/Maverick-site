import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import BackgroundGrid from './components/BackgroundGrid';
function App() {
  return (
    <div className="App container app-layout">
      <BackgroundGrid />
      <aside className="sidebar">
        <Header />
      </aside>
      <main className="main-content">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
