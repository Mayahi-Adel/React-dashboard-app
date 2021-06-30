import React from 'react';
import NavBar from './components/NavBar';
import Footer from './pages/partials/Footer';
import './assets/App.scss';

import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
