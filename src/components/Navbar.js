import blackMoonIcon from '../img/black_half_moon_icon.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-name">Rabin</div>
            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Skills</a>
                <a href="#">Services</a>
                <a href="#">Portfolio</a>
                <a href="#">Contact</a>
                <img src={blackMoonIcon} title="Change color" />
            </div>
        </nav>
    )
}

export default Navbar;