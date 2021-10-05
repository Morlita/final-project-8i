import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="d-flex flex-row-reverse">
      <li className="list-unstyled dropdown">
        <a
          className="nav-link dropdown-toggle"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Information
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link className="dropdown-item" to="/admin/recipes">
              Recetas
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/admin/users">
              Usuarios
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/admin/tags">
              Tags
            </Link>
          </li>
        </ul>
      </li>
    </div>
  );
}

export default Admin;
