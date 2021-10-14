import {useState} from "react"
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './Logo/kitchen-utensils-white.png';
import CookerWhite from '../Navbar/Logo/cooker-white.png'

const NewNavbar = () => {
  const user = JSON.parse(localStorage.getItem("registerLogIn"));
  const logOut = () => {
    localStorage.removeItem('registerLogIn');
    localStorage.removeItem('userToken');
    localStorage.removeItem('logedUser');
    window.location.reload(true);
  }

  const [term, setTerm] = useState({
    search: ""
  })

  const setTermObj = (event) => {
    setTerm({ [event.target.name]: event.target.value });
  }
 

  return (
    <nav className="navbar navbar-expand-md navbar-dark sticky-top shadow-lg new-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex justify-content-center align-items-center" to="/">
          <img src={Logo} alt="logo recetapp" className="recetapp-logo me-3" />
          Recetapp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
          <div className="d-flex flex-column-reverse flex-md-row">
            <form className="d-flex align-items-center justify-content-center">
              <div className="button-in btn rounded-pill">
                <input className="input-border text-white" type="search" placeholder="Buscar receta..." aria-label="Search" name="search" value={term.search} onChange={setTermObj} maxLength="30"/>
                <Link className="search-button" type="button" 
                  to={{
                    pathname: `/?search=${term.search}`,
                    state: { term: term.search }
                  }}
                  >
                  <i class="bi bi-search text-white"></i>
                </Link>
              </div>
            </form>
            <ul className="navbar-nav me-md-auto mb-2 mb-lg-0 mx-auto flex-column-reverse flex-md-row">
              <li className="nav-item dropdown align-self-center">
                <Link className="nav-link dropdown-toggle text-center" to="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorías
                </Link>
                <ul className="dropdown-menu text-center" aria-labelledby="navbarScrollingDropdown">
                  <li><Link className="dropdown-item" to='/categories/Con Carne'>Con Carne</Link></li>
                  <li><Link className="dropdown-item" to='/categories/veggie'>Veggie</Link></li>
                  <li><Link className="dropdown-item" to='/categories/dulces'>Dulces</Link></li>
                </ul>
              </li>
              {!user ? <div className="navbar-nav me-md-auto mb-2 mb-lg-0 mx-auto flex-column-reverse flex-md-row">
                <li className="nav-item">
                  <Link to='/login' className="nav-link"><span><i className="bi bi-person-circle"></i></span>Ingresar</Link>
                </li>
                <li className="nav-item register-button">
                  <Link to='/signin' className="nav-link fw-bold">Registrarme</Link>
                </li>
              </div>: <div className="navbar-avatar nav-item dropdown"> 
                      <Link className="nav-link dropdown-toggle" to="#" id="userDropDown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src={CookerWhite} alt="Avatar" className="avatar rounded-circle m-1 p-1"/><span>Hola! {user.name} {user.lastName} </span></Link>
                        <ul className="dropdown-menu text-center" aria-labelledby="navbarScrollingDropdown">
                          <li><Link className="dropdown-item" to='/userprofile'>Mi Perfil</Link></li>
                          <li><Link className="dropdown-item" to='/addRecipe'>Agregar Receta</Link></li>
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

