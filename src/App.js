import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Property from './components/Property';

function App() {

  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/get_hotels" element={<Home></Home>} />
          <Route path="/property/:id" element={<Property></Property>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
