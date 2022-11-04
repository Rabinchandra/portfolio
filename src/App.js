import './css/style.css';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import { useEffect, useState } from 'react';
import "animate.css/animate.min.css";

function App() {
  const [isBlack, setIsBlack] = useState(true);
  
  const switchColor = () => {
    setIsBlack(!isBlack);
  }

  return (
    <div className={"App " + (isBlack?'text-white':'')}>
      <Navbar />
      <Showcase />
    </div>
  );
}

export default App;
