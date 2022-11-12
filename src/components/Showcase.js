import githubBlackLogo from '../img/github-black.png';
import linkedinBlackLogo from '../img/linkedin-black.png';
import twitterBlackLogo from '../img/twitter-black.png';
import mailPic from '../img/mail.png';
import mainPhoto from '../img/main-photo-black-white.png';
import downArrowIcon from '../img/down-arrow-black.png';
import mouseIcon from '../img/mouse-black.png'
import Typewriter from 'typewriter-effect';
import githubWhiteLogo from '../img/github-white.png';
import linkedinWhiteLogo from '../img/linkedin-white.png';
import twitterWhiteLogo from '../img/twitter-white.png';
import whiteMouseIcon from '../img/mouse-white.png';
import downArrowWhiteIcon from '../img/down-arrow-white.png';


const Showcase = ({isBlack}) => {
    return (
        <div className="showcase" id="showcase">
            <div className="wrapper">
                <div className="social-links">
                    <a href="#" className='animate__animated animate__fadeInLeft' style={{animationDelay: '3s'}}>
                        <img src={isBlack? linkedinWhiteLogo : linkedinBlackLogo} alt="" />
                    </a>
                    <a href="#" className='animate__animated animate__fadeInLeft' style={{animationDelay: '3.2s'}}>
                        <img src={isBlack? githubWhiteLogo : githubBlackLogo} alt=""/>
                    </a>
                    <a href="" className='animate__animated animate__fadeInLeft' style={{animationDelay: '3.5s'}}>
                        <img src={isBlack? twitterWhiteLogo : twitterBlackLogo} alt=""/>
                    </a>
                </div>
                <div className="showcase-main">
                    <div className="main-text">
                        
                        <h1 className="animate__animated animate__fadeInUp animate__delay-2s header">Hi, I'm Rabin</h1>
                        
                        <small className='animate__animated animate__fadeInUp sub-header' style={{animationDelay: '2.5s'}}>
                            <Typewriter
                                options={{
                                    strings: ['Frontend Developer', 'Programmer', 'Designer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </small>
                        <p className='animate__animated animate__fadeInUp primary-text' style={{animationDelay: '2.7s'}}>
                            High level experience in Web Design and developent knowledge,
                            producing<br /> quality work.
                        </p>

                        <a href="#" className='contact-btn animate__animated animate__fadeInUp' style={{animationDelay: '3.5s'}}>
                            Contact Me
                            <img src={mailPic} alt="" />
                        </a>
                    </div>

                    <div className="main-photo">
                        <img src={mainPhoto} alt="" className='animate__animated animate__bounceIn' style={{animationDelay: '4.5s'}}/>
                    </div>
                </div>
            </div>
            <div className="scroll-icon">
                <img src={isBlack? whiteMouseIcon : mouseIcon} alt="" className='animate__animated animate__fadeInUp' style={{animationDelay: '5s', transform: 'rotate(35deg)'}}/>
                <div className='animate__animated animate__fadeInUp' style={{animationDelay: '5.2s'}}>
                    Scroll down
                </div> 
                <img src={isBlack? downArrowWhiteIcon : downArrowIcon} alt="" className="animate__animated animate__fadeInUp animate__bounce down-arrow-icon" style={{animationDelay: '5.5s'}}/>
            </div>
        </div>
    )
}

export default Showcase;