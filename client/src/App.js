
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import AddUser from './Pages/AddUser';
import UserListing from './Pages/UserListing';
import './App.css';


function App() {
  return (
    <React.Fragment>
      
      <Router>
        <Routes>
          <Route path="/" element={<AddUser></AddUser>}></Route>
          <Route path="/list" element={<UserListing></UserListing>}></Route>
        </Routes>
      </Router>
      
    </React.Fragment>
  );
}

export default App;
