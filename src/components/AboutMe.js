import {AnimationOnScroll} from 'react-animation-on-scroll';
import photo from '../img/developer-2-black-white.png';

const AboutMe = () => {
    return (
        <div className="about-me" style={{marginBottom: '1000px'}}>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                <h1 className="header">About Me</h1>
            </AnimationOnScroll>          
            <AnimationOnScroll animateIn="animate__fadeInUp" style={{animationDelay: '.5s'}} animateOnce={true}>
                <small className="sub-header">My Introduction</small>
            </AnimationOnScroll>
            <div className="about-me-main">
                    <AnimationOnScroll animateIn="animate__bounceIn" style={{animationDelay: '1s'}} animateOnce={true}>
                <div className="photo">
                        <img src={photo} alt="" />
                </div>
                    </AnimationOnScroll>
                <div className="primary-text">
                    <AnimationOnScroll animateIn="animate__fadeInUp" style={{animationDelay: ''}} animateOnce={true}>
                        <p>
                            Web Developer with extensive knowledge and years of experience, 
                            working in web technologies and UI/UX Design delivering quality work.
                        </p>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__fadeInUp" style={{animationDelay: ''}} animateOnce={true}>
                        <div>
                            <button className="download-cv-btn">Download CV</button>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>      
        </div>
    )
}

export default AboutMe;