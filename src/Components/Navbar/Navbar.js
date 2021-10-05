import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './Logo/kitchen-utensils-white.png'

function Navbar() {
    // hacer que cambie cuando cambia el link

    return (
        <nav className="navbar navbar-dark navbar-expand-md sticky-top shadow-lg">
            <div className="container-fluid">
                <Link className="h2 text-decoration-none p-2 recetapp-logo" to="/"> <img src={Logo} alt="Logo" className='p-2 mt-1'/> RecetApp </Link>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-md-flex align-items-center justify-content-end p-2" id="navbarSupportedContent">
                    <form className="d-flex align-items-center">
                        <div class="button-in btn rounded-pill">
                            <input className="" type="search" placeholder="Buscar receta..." aria-label="Search" />
                            <button className="search-button" type="submit"><i class="bi bi-search text-white"></i></button>
                        </div>
                    </form>
                    <div className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorías
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/categories/Con%20carne">Con carne</Link></li>
                            <li><Link className="dropdown-item" to="/categories/veggie">Veggie</Link></li>
                            <li><Link className="dropdown-item" to="/categories/dulces">Dulces</Link></li>
                        </ul>
                    </div>
                    <div className="d-flex align-middle text-center" >
                        <div className="">
                            <Link className="nav-link btn rounded-pill register-buttton" to="/signin">Registrarme</Link>
                        </div>
                        <div className="ms-2">
                            <Link className="nav-link" to="/login"><span><i className="bi bi-person-circle"></i></span> Ingresar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;