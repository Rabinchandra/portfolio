import htmlIcon from '../img/html.png';
import cssIcon from '../img/css.png';
import jsIcon from '../img/js.png';
import reactIcon from '../img/react-icon.png';
import firebaseIcon from '../img/firebase.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Skills = ({isBlack}) => {
    return (
        <div className="skills" id="skills">
            <AnimationOnScroll animateIn="animate__fadeInUp"  style={{animationDelay: '.5s'}} animateOnce={true}>
                <h1 className="header">Skills</h1>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp"  style={{animationDelay: '.7s'}} animateOnce={true}>
                <small className="sub-header" >My Technical Level</small>
            </AnimationOnScroll>

            <div className={isBlack? "wrapper text-white" : "wrapper"}>

                <AnimationOnScroll animateIn="animate__fadeInUp" className='box box-1' style={{animationDelay: '.5s'}} animateOnce={true}>
                    <div>
                        <img src={htmlIcon} alt="" />
                        <h1>HTML</h1>
                        <p>Basic</p>
                    </div>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInUp" className='box box-2' style={{animationDelay: '.7s'}} animateOnce={true}>
                    <div>
                        <img src={cssIcon} alt="" />
                        <h1>CSS</h1>
                        <p>Intermediate</p>
                    </div>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInUp" className='box box-3' style={{animationDelay: '.9s'}} animateOnce={true}> 
                    <div>
                        <img src={jsIcon} alt="" />
                        <h1>JavaScript</h1>
                        <p>Advanced</p>
                    </div>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInUp" className='box box-4' style={{animationDelay: '1s'}} animateOnce={true}> 
                    <div>
                        <img src={reactIcon} alt="" />
                        <h1>React</h1>
                        <p>Basic</p>
                    </div>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInUp" className='box box-5' style={{animationDelay: '1s'}} animateOnce={true}> 
                    <div>
                        <img src={firebaseIcon} alt="" />
                        <h1>Firebase</h1>
                        <p>Basic</p>
                    </div>
                </AnimationOnScroll>

            </div>
        </div>
    )
}

export default Skills;