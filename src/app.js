import React from 'react';
import './styles/app.css';

import Header from './components/header/header';
import CentralPart from './components/centralPart/centralPart';
import Footer from './components/footer/footer';

function App(props) {
  return (
    <div className="app">
        <Header />
        <CentralPart />
        <Footer />
    </div>
  );
}

export default App;
