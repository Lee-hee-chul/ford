
import './App.css';
import Homepage from './component/Homepage';
import Aboutpage from './component/Aboutpage';
import {Routes, Route} from 'react-router-dom';
import NavBar from './component/NavBar';
import Video from './component/Video';

function App() {
  return (
    <div>
      <NavBar />
      <Video />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </div>
  );
}

export default App;
