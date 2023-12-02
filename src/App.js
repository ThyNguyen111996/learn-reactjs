// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import TodoFeature from './features/Todo';
import { Link, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import AlbumFeature from './features/Album';

function App() {
  return (
    <div className="App">
      Homepage
      <p><Link to={'/todos'}>Todo</Link></p>
      <p><Link to={'/albums'}>Album</Link></p>
      <p><NavLink to={'/todos'} className={nav => (nav.isActive ? 'menu-item active' : 'menu-item')}>Todo</NavLink></p>
      <p><NavLink to={'/albums'} className={nav => (nav.isActive ? 'menu-item active' : 'menu-item')}>Album</NavLink></p>
      <Routes>
        <Route path="/" Component={TodoFeature} />
        <Route path="/todos" Component={TodoFeature} />
        <Route path="/albums" Component={AlbumFeature} />
        <Route path="/home" element={<Navigate to="/" replace />} exact />
      </Routes>
    </div>
  );
}

export default App;
