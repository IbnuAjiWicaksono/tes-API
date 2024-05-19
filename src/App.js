import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from '../src/component/HomePage';
import Cardnegara from '../src/component/Cardnegara';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Cardnegara" element={<Cardnegara/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
