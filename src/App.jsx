import React from 'react';
import { Route , BrowserRouter as Router , Routes } from 'react-router-dom';
import {Home , CustomDropDown } from './pages';


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drop-down" element={<CustomDropDown />} />
      </Routes>
    </Router>
    </>
  );
}
export default App;