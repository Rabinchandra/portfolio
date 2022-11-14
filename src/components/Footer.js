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
                    <a href="https://m.facebook.com/100007235292916" target="blank">
                        <img src={fbPng} alt="" />
                    </a>
                    <a href="https://www.instagram.com/rabinyen/" target="_blank">
                        <img src={instaPng} alt="" />
                    </a>
                    <a href="https://twitter.com/RabintechT" target="_blank">
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