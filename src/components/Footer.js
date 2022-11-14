import fbPng from '../img/fb.png';
import instaPng from '../img/instagram.png';
import twitterPng from '../img/twitter-white.png';

const Footer = () => {
  return (
    <div className="footer">
        <div className="wrapper">
            
            <div className="logo">
                <h1>Rabin</h1>
                <small>Frontend Developer</small>
            </div>

            <div className="footer-links">
                <div className='page-links'>
                    <a href="#services">Services</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact Me</a>
                </div>
                <div className="social-links">
                    <a href="">
                        <img src={fbPng} alt="" />
                    </a>
                    <a href="">
                        <img src={instaPng} alt="" />
                    </a>
                    <a href="">
                        <img src={twitterPng} alt="" />
                    </a>
                </div>
            </div>

        </div>
        <div className="copyright">
            &copy; Rabin. All rights reserved
        </div>
    </div>
  )
}

export default Footer