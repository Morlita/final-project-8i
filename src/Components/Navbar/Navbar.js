import { Link } from 'react-router-dom';

function Navbar(){
    return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                <a className="navbar-brand text-white">RecetApp</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" to="main">Main</Link>
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
                    <img src="https://image.flaticon.com/icons/png/512/1384/1384053.png" alt="" />
                    <img src="https://image.flaticon.com/icons/png/512/124/124021.png" alt="" />
                    <img src="https://image.flaticon.com/icons/png/512/174/174855.png" alt="" />
                </div>
                </div>
            </nav>
    );
}

export default Navbar;