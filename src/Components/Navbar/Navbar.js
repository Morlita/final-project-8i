import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md sticky-top">
            <div className="container-fluid">     
                <Link className="navbar-brand text-white h1" to="/">RecetApp</Link>        
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-md-flex align-items-center justify-content-between p-2" id="navbarSupportedContent">
                    <div className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="http://localhost:5000/recipes/carne">Con carne</Link></li>
                            <li><Link className="dropdown-item" to="http://localhost:5000/recipes/veggie">Veggie</Link></li>
                            <li><Link className="dropdown-item" to="http://localhost:5000/recipes/postres">Postres</Link></li>
                        </ul>
                    </div>
                    <form className="d-flex align-items-center mt-2">
                        <input className="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success rounded-pill" type="submit">Search</button>
                    </form>
                    <div className="d-flex align-middle text-center mt-2" >
                        <div className="rounded-pill">
                            <Link className="nav-link" to="/signin">Sing In</Link>
                        </div>  
                        <div className="rounded-pill ms-2">
                            <Link className="nav-link" to="/login">Log In</Link>
                        </div> 
                    </div>
                </div>
            </div>
        </nav>   
    );
}

export default Navbar;