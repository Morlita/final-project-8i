import { Link } from "react-router-dom";
import './Admin.css'

function Admin() {
  return (
    <div className="container d-flex justify-content-center">
      <ul class="nav nav-pills">
        <li class="nav-item m-2">
          <Link className="btn btn-danger text-uppercase fw-bold p-3 rounded-pill mt-3" to="/admin/recipes">
            Recetas
          </Link>
        </li>
        <li class="nav-item m-2">
          <Link className="btn btn-danger text-uppercase fw-bold p-3 rounded-pill mt-3" to="/admin/users">
            Usuarios
          </Link>
        </li>
        <li class="nav-item m-2">
          <Link className="btn btn-danger text-uppercase fw-bold p-3 rounded-pill mt-3" to="/admin/tags">
            Tags
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Admin;
