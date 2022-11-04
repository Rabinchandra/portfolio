import blackMoonIcon from '../img/black_half_moon_icon.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-name animate__bounceIn">Rabin</div>
            <div className="nav-links">
                <a href="#" className='animate__animated animate__fadeInDown' style={{animationDelay: '1s'}}>Home</a>
                <a href="#" className='animate__animated animate__fadeInDown' style={{animationDelay: '1.1s'}}>About</a>
                <a href="#" className='animate__animated animate__fadeInDown' style={{animationDelay: '1.2s'}}>Skills</a>
                <a href="#" className='animate__animated animate__fadeInDown' style={{animationDelay: '1.3s'}}>Services</a>
                <a href="#" className='animate__animated animate__fadeInDown' style={{animationDelay: '1.4s'}}>Portfolio</a>
                <a href="#" className='animate__animated animate__fadeInDown' style={{animationDelay: '1.5s'}}>Contact</a>
                <img src={blackMoonIcon} title="Change color"  className='animate__animated animate__fadeInDown' style={{animationDelay: '1.6s'}}/>
            </div>
        </nav>
    )
}

export default Navbar;