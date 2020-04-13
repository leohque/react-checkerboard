import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/navbar.component.jsx';
import Checkerboard from './components/checkboard.component.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route path ="/" exact component={ Checkerboard } />
      </div>
    </Router>
  );
}

export default App;
