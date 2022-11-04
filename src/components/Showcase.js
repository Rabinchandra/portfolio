import githubBlackLogo from '../img/github-black.png';
import linkedinBlackLogo from '../img/linkedin-black.png';
import twitterBlackLogo from '../img/twitter-black.png';
import mailPic from '../img/mail.png';
import mainPhoto from '../img/main-photo-color.png';
import Typewriter from 'typewriter-effect';

const Showcase = () => {
    return (
        <div className={"showcase"}>
            <div className="wrapper">
                <div className="social-links">
                    <a href="#">
                        <img src={linkedinBlackLogo} alt="" />
                    </a>
                    <a href="">
                        <img src={githubBlackLogo} alt=""/>
                    </a>
                    <a href="">
                        <img src={twitterBlackLogo} alt=""/>
                    </a>
                </div>
                <div className="showcase-main">
                    <div className="main-text">
                        
                        <h1 className="animate__animated animate__fadeInUp animate__delay-2s">Hi, I'm Rabin</h1>
                        
                        <small className='animate__animated animate__fadeInUp' style={{animationDelay: '2.5s'}}>
                            <Typewriter
                                options={{
                                    strings: ['Frontend Developer', 'Programmer', 'Designer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </small>
                        <p className='animate__animated animate__fadeInUp' style={{animationDelay: '2.7s'}}>
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
        </div>
    )
}

export default Showcase;