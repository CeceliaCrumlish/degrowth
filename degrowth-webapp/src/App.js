import './App.css';
import React from 'react';
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import About from './About';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/degrowth"> {/* Set the basename here */}
        <div className="App">
          <div>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route exact path="/" element={<Home />} /> {/* Updated to use element prop */}
            <Route path="/about" element={<About />} /> {/* Updated to use element prop */}
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
