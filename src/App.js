import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Benefits from './components/Benefits';
import FAQS from './components/FAQS';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      
      <main>
      <Benefits />
      <FAQS />
      </main>
      
      <Footer />
    </div>

    
  );
}

export default App;
