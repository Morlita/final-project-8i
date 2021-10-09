import { Link } from 'react-router-dom';
import './Navbar.css';
import  Logo from './Logo/kitchen-utensils-white.png';

const NewNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-md sticky-top shadow-lg new-navbar">
        <div className="container-fluid text-center">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="logo recetapp" className="recetapp-logo me-3"/>
            Recetapp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-md-flex align-items-center justify-content-end" id="navbarScroll">
          <form className="d-flex align-items-center justify-content-center">
                        <div class="button-in btn rounded-pill">
                            <input className="input-border text-white" type="search" placeholder="Buscar receta..." aria-label="Search" />
                            <button className="search-button" type="submit"><i class="bi bi-search text-white"></i></button>
                        </div>
                    </form>
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorías
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><Link className="dropdown-item" to="#">Con Carne</Link></li>
                  <li><Link className="dropdown-item" to="#">Veggie</Link></li>
                  <li><Link className="dropdown-item" to="#">Dulces</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#"><span><i className="bi bi-person-circle"></i></span>Ingresar</Link>
              </li>
              <li className="nav-item register-button">
                <Link className="nav-link fw-bold">Registarme</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NewNavbar
