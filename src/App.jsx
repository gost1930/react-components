import React from 'react';
import { Route , BrowserRouter as Router , Routes } from 'react-router-dom';
import {Home , Modal , SlideBar } from './pages';


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/slide" element={<SlideBar />} />
      </Routes>
    </Router>
    </>
  );
}
export default App;