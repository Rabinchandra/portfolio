import './css/style.css';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import { useState } from 'react';
import "animate.css/animate.min.css";
import AboutMe from './components/AboutMe';

function App() {
  const [isBlack, setIsBlack] = useState(true);
  
  const switchColor = () => {
    setIsBlack(!isBlack);
  }

  return (
    <div className={"App " + (isBlack?'text-white':'')}>
      <Navbar />
      <Showcase />
      <AboutMe />
    </div>
  );
}

export default App;
