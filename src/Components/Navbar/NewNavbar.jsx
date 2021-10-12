import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './Logo/kitchen-utensils-white.png';
import Avatar from './Avatar.jpg';

const NewNavbar = () => {
  const user = JSON.parse(localStorage.getItem("registerLogIn"));

  const logOut = () => {
    localStorage.removeItem('registerLogIn');
    localStorage.removeItem('userToken');
    localStorage.removeItem('logedUser');
    window.location.reload(true);
  }

  return (
    <nav class="navbar navbar-expand-md navbar-dark sticky-top shadow-lg new-navbar">
      <div class="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="logo recetapp" className="recetapp-logo me-3" />
          Recetapp</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
          <div className="d-flex flex-column-reverse flex-md-row">
            <form className="d-flex align-items-center justify-content-center">
              <div class="button-in btn rounded-pill">
                <input className="input-border text-white" type="search" placeholder="Buscar receta..." aria-label="Search" />
                <button className="search-button" type="submit"><i class="bi bi-search text-white"></i></button>
              </div>
            </form>
            <ul class="navbar-nav me-md-auto mb-2 mb-lg-0 mx-auto flex-column-reverse flex-md-row">
              <li className="nav-item dropdown align-self-center">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorías
                </Link>
                <ul className="dropdown-menu text-center" aria-labelledby="navbarScrollingDropdown">
                  <li><Link className="dropdown-item" to='/categories/Con Carne'>Con Carne</Link></li>
                  <li><Link className="dropdown-item" to='/categories/veggie'>Veggie</Link></li>
                  <li><Link className="dropdown-item" to='/categories/dulces'>Dulces</Link></li>
                </ul>
              </li>
              {!user ? <div class="navbar-nav me-md-auto mb-2 mb-lg-0 mx-auto flex-column-reverse flex-md-row">
                <li className="nav-item">
                  <Link to='/login' className="nav-link"><span><i className="bi bi-person-circle"></i></span>Ingresar</Link>
                </li>
                <li className="nav-item register-button">
                  <Link to='/signin' className="nav-link fw-bold">Registarme</Link>
                </li>
              </div>: <div className="navbar-avatar nav-item dropdown"> 
                      <Link className="nav-link dropdown-toggle" to="#" id="userDropDown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src={Avatar} alt="Avatar" className="avatar rounded-circle"/><span>Hola! {user.name} {user.lastName} </span></Link>
                        <ul className="dropdown-menu text-center" aria-labelledby="navbarScrollingDropdown">
                          <li><Link className="dropdown-item" to='/userprofile'>Mi Perfil</Link></li>
                          <li><Link className="dropdown-item" to='/'>Agregar Receta</Link></li>
                          {user.role === "admin" ? <li><Link className="dropdown-item" to='/admin/recipes'>Admin</Link></li>: false}
                          <li><button className="dropdown-item" onClick={logOut}>Salir</button></li>
                        </ul>  
                      </div>
                
              }
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NewNavbar

