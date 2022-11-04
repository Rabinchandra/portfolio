import './css/style.css';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import { useState } from 'react';

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
