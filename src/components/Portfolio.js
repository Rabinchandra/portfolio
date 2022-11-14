import {Carousel} from '3d-react-carousal';
import netflixGif from '../img/netflix.gif';
import photographyGif from '../img/photography.gif';
import covidGif from '../img/covid.gif';
import instagramGif from '../img/instagram.gif';
import whatsappGif from '../img/whatsapp.gif';
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Project = ({img, title, description, url}) => {
  return (
    <div className="project-slide" style={{borderRadius: '12px'}}>
      <img src={img} alt="" />
      <div>
        <h2>{title}</h2>
        <p>
          {description}
        </p>
        <a href={url} className="button" target="_blank">Visit site <i className="fa fa-chevron-right"></i></a>
      </div>
    </div>
  )
}

const Portfolio = ({isBlack}) => {
  let slides = [
    <Project title={"Netflix Clone"} img={netflixGif} description={"A full mobile responsive website with Sign up and Sign  functionality"} url="https://rabinnetflix.vercel.app/"/>,
    <Project title={"Newton Photography"} img={photographyGif} description={"A  photography website having Admin login feature"} url="https://newtonksh.netlify.app/"/>,
    <Project title={"Instagram Clone"} img={instagramGif} description={"An Instagram clone app where you can upload, like and comment on photos"} url="https://rabincovid19tracker.netlify.app/"/>,
    <Project title={"WhatsApp Clone"} img={whatsappGif} description={"A simple WhatsApp clone app where you can have chat by login"} url="https://rabinwhatsappclone.netlify.app/"/>,
    <Project title={"Covid 19 Tracker"} img={covidGif} description={"A Covid 19 tracker app where you can find info on covid"} url="https://rabincovid19tracker.netlify.app/"/>,
  ];
  return (
    <div className={isBlack?"portfolio text-white":"portfolio"} id="portfolio">
      <AnimationOnScroll animateIn="animate__fadeInUp"  style={{animationDelay: '.5s'}} animateOnce={true}>
        <h1 className="header">Portfolio</h1>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp"  style={{animationDelay: '.7s'}} animateOnce={true}>
        <small className="sub-header">Some of My Best Works</small>
      </AnimationOnScroll>
      
      <AnimationOnScroll animateIn="animate__fadeInUp"  style={{animationDelay: '.5s'}} animateOnce={true}>
        {isBlack? <Carousel slides={slides} /> : (<div><Carousel slides={slides}/></div>)}
      </AnimationOnScroll>
    </div>

  )
}

export default Portfolio