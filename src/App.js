
import './App.css';
import Homepage from './component/Homepage';
import Aboutpage from './component/Aboutpage';
import {Routes, Route} from 'react-router-dom';
import NavBar from './component/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </div>
  );
}

export default App;
