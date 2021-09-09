import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">    
                <a class="navbar-brand text-white" href="#">RecetApp</a>         
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex justify-content-center">
                        <input class="form-control me-2 align-self-center" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success align-self-center" type="submit">Search</button>
                    </form>
                    <div className="d-flex">
                        <div className="rounded-pill">
                            <Link className="nav-link" to="signin">Sig In</Link>
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