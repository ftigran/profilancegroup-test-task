import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Header } from './components/Header';
import { Home } from './pages/home';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  // const [login, useLogin]

  return (
    <Router
    // basename={'https://ftigran.github.io/profilancegroup-test-task/'}
    >
    <div className='app'>
      
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<div>news</div>} />
      </Routes>
    </div>
      </Router>
  );
}

export default App;
