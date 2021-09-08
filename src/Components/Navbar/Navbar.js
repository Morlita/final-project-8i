import { Link } from 'react-router-dom';
import facebook from './Images/facebook.png';
import instagram from './Images/instagram.png';
import twitter from './Images/twitter.png';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand text-white">RecetApp</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="main">Main</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="signin">Sigin</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="/"></Link>
                        </li>
                    </ul>
                </div>
                <div className="rrss">
                    <img src={facebook} alt="" className="rounded-circle" />
                    <img src={twitter} alt="" className="rounded-circle ms-2" />
                    <img src={instagram} alt="" className="rounded-circle ms-2" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;