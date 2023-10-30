
import './App.css';
import Homepage from './component/Homepage';
import Aboutpage from './component/Aboutpage';
import {Routes, Route} from 'react-router-dom';
import NavBar from './component/NavBar';
import Video from './component/Video';
import Btn from './component/Btn.js';

function App() {
  return (
    <div>
      <NavBar />
      <Video />
      <Btn />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </div>
  );
}

export default App;
