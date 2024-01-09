import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/aboutus" element={<h1>About Us</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
