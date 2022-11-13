import uiDesignerGif from '../img/ui-designer.gif';
import frontEndGif from '../img/front-end.gif';
import rightArrowIcon from '../img/right-arrow.png';
import rightArrowWhiteIcon from '../img/right-arrow-white.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Services = ({isBlack}) => {
    return (
        <div className="services" id="services">
            <AnimationOnScroll animateIn="animate__fadeInUp"  style={{animationDelay: '.5s'}} animateOnce={true}>
                <h1 className="header">Services</h1>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp"  style={{animationDelay: '.7s'}} animateOnce={true}>
                <small className="sub-header">What I offer</small>
            </AnimationOnScroll>

            <div className="wrapper">
                <AnimationOnScroll animateIn="animate__fadeInUp"  style={{animationDelay: '.5s'}} animateOnce={true}>
                    <div className="box">
                        <img src={uiDesignerGif} alt="" />
                        <h1>UI/UX<br/>Designer</h1>
                        <p>
                            View More 
                            <img src={isBlack?rightArrowWhiteIcon:rightArrowIcon} alt="" />
                        </p>
                    </div>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInUp"  style={{animationDelay: '.7s'}} animateOnce={true}>
                    <div className="box">
                        <img src={frontEndGif} alt="" />
                        <h1>Frontend <br/>Development</h1>
                        <p>
                            View More 
                            <img src={isBlack?rightArrowWhiteIcon:rightArrowIcon} alt="" />
                        </p>
                    </div>
                </AnimationOnScroll>
            </div>
        </div>
    );
}

export default Services;