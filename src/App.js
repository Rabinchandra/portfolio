import './css/style.css';
import { useState } from 'react';
import "animate.css/animate.min.css";
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import MobileNavbar from './components/MobileNavbar';


function App() {
  const [isBlack, setIsBlack] = useState(false);
  
  const switchColor = () => {
    setIsBlack(!isBlack);
  }

  return (
    <div className={isBlack?"App text-white":"App"}>
      <Navbar switchColor={switchColor} isBlack={isBlack} />
      <MobileNavbar isBlack={isBlack} switchColor={switchColor}/>
      <Showcase isBlack={isBlack}/>
      <AboutMe />
      <Skills isBlack={isBlack}/>
    </div>
  );
}

export default App;
