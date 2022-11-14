import './css/style.css';
import { useState } from 'react';
import "animate.css/animate.min.css";
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import MobileNavbar from './components/MobileNavbar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import "https://kit.fontawesome.com/c12e219398.js";
import Footer from './components/Footer';


function App() {
  const [isBlack, setIsBlack] = useState(false);
  
  const switchColor = () => {
    setIsBlack(!isBlack);
  }

  return (
    <>    
      <div className={isBlack?"App text-white":"App"}>
        <Navbar switchColor={switchColor} isBlack={isBlack} />
        <MobileNavbar isBlack={isBlack} switchColor={switchColor}/>
        <Showcase isBlack={isBlack}/>
        <AboutMe />
        <Skills isBlack={isBlack}/>
        <Services isBlack={isBlack}/>
        <Portfolio isBlack={isBlack}/>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
