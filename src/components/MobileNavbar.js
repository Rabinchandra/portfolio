import blackMoonIcon from '../img/black_half_moon_icon.png';
import chevronUp from '../img/chevron-up.png';
import chevronUpWhite from '../img/chevron-up-white.png';
import homePng from '../img/home.png';
import aboutPng from '../img/about.png';
import skillsPng from '../img/skills.png';
import servicesPng from '../img/services.png';
import portfolioPng from '../img/portfolio.png';
import contactPng from '../img/contact.png';
import chevronDownPng from '../img/chevron-down.png';
import { useState } from 'react';

const MobileNavbar = ({isBlack, switchColor}) => {
    const [isHide, setIsHide] = useState(true);

    return (
        <>
            <div className={isBlack? "mobilenavbar text-white": "mobilenavbar"} >
                <div className='name'>Rabin</div>
                <div>
                    <img src={blackMoonIcon} alt="" onClick={switchColor}/>
                    <img src={isBlack? chevronUpWhite:chevronUp} alt="" onClick={() => setIsHide(false)}/>
                </div>
            </div>
            <div className={isHide?"mobilenavbar-links hide":"mobilenavbar-links"}>
                <div className="wrapper">
                    <a href="#showcase">
                        <img src={homePng} alt="" onClick={() => setIsHide(true)}/>
                    </a>
                    <a href="#about-me">
                        <img src={aboutPng} alt="" onClick={() => setIsHide(true)}/>
                    </a>
                    <a href="#skills">
                        <img src={skillsPng} alt="" onClick={() => setIsHide(true)}/>
                    </a>
                    <a href="#services">
                        <img src={servicesPng} alt="" onClick={() => setIsHide(true)}/>
                    </a>
                    <a href="#portfolio">
                        <img src={portfolioPng} alt="" onClick={() => setIsHide(true)}/>
                    </a>
                    <a href="#contact">
                        <img src={contactPng} alt="" onClick={() => setIsHide(true)}/>
                    </a>
                </div>
                <div className="close">
                    <img src={chevronDownPng} alt="" onClick={() => setIsHide(true)}/>
                </div>
            </div>
        </>
    )
}

export default MobileNavbar;