import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-md">
            <div class="container-fluid">    
                <a class="navbar-brand text-dark align-self-center" href="#">RecetApp</a>         
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-md-flex align-items-center justify-content-between p-2" id="navbarSupportedContent">
                    <form class="d-flex align-items-center mt-2">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div className="d-flex align-middle text-center mt-2" >
                        <div className="rounded-pill">
                            <Link className="nav-link" to="signin">Sing In</Link>
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