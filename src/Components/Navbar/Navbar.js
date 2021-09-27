import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import './Navbar.css';

function Navbar() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('')
    // hacer que cambie cuando cambia el link

    const handleChange = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }

    const filter = (info) => {
        let searchResult = 
    }

    return (
        <nav className="navbar navbar-dark navbar-expand-md sticky-top ">
            <div className="container-fluid">     
                <Link className="text-white h2 text-decoration-none p-2" to="/">RecetApp</Link>        
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-md-flex align-items-center justify-content-end p-2" id="navbarSupportedContent">
                    <form className="d-flex align-items-center">
                        <input className="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleChange}/>
                        <button className="btn btn-outline-light rounded-pill" type="submit">Search</button>
                    </form>
                    <div className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/categories/Con%20carne">Con carne</Link></li>
                            <li><Link className="dropdown-item" to="/categories/veggie">Veggie</Link></li>
                            <li><Link className="dropdown-item" to="/categories/dulces">Dulces</Link></li>
                        </ul>
                    </div>
                    <div className="d-flex align-middle text-center" >
                        <div className="">
                            <Link className="nav-link" to="/signin">Registrarme</Link>
                        </div>  
                        <div className="ms-2">
                            <Link className="nav-link" to="/login"><span><i class="bi bi-person-circle"></i></span> Ingresar</Link>
                        </div> 
                    </div>
                </div>
            </div>
        </nav>   
    );
}

export default Navbar;