import {
    Link
  } from "react-router-dom";

function Admin() {
    return(
        <div className="d-flex flex-row-reverse">
            <li class="list-unstyled dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Information
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link class="dropdown-item" to="/admin/recipes">Recetas</Link></li>
                    <li><Link class="dropdown-item" to="/admin/users">Usuarios</Link></li>
                </ul>
            </li>
        </div>
    )
}

export default Admin;