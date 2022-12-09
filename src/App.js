import React from 'react';
import CreatePage from './Pages/CreatePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CreatePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
