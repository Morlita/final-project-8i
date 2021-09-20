import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-md sticky-top">
            <div class="container-fluid">     
                <Link className="navbar-brand text-white h1" to="/">RecetApp</Link>        
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-md-flex align-items-center justify-content-between p-2" id="navbarSupportedContent">
                    <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link class="dropdown-item" to="http://localhost:5000/recipes/carne">Con carne</Link></li>
                            <li><Link class="dropdown-item" to="http://localhost:5000/recipes/veggie">Veggie</Link></li>
                            <li><Link class="dropdown-item" to="http://localhost:5000/recipes/postres">Postres</Link></li>
                        </ul>
                    </div>
                    <form class="d-flex align-items-center mt-2">
                        <input class="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success rounded-pill" type="submit">Search</button>
                    </form>
                    <div className="d-flex align-middle text-center mt-2" >
                        <div className="rounded-pill">
                            <Link className="nav-link" to="/signin">Sing In</Link>
                        </div>  
                        <div className="rounded-pill ms-2">
                            <Link className="nav-link" to="login">Log In</Link>
                        </div> 
                    </div>
                </div>
            </div>
        </nav>   
    );
}

export default Navbar;