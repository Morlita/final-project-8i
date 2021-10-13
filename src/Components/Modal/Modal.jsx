import moment from "moment";

function Modal({recipe}) {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title text-capitalize" id="exampleModalLabel">
              {recipe.title}
            </h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div>
              <div>
                <h5 className="d-inline fw-bold">
                  Creador:{" "}
                  <p className="d-inline fw-normal">{recipe.user && recipe.user.name} {recipe.user && recipe.user.lastName}</p>
                </h5>
              </div>
              <h5 className="fw-bold">Procedimiento:</h5>
              <ol>
                {recipe.steps &&
                  recipe.steps.map((item, index) => (
                    <li key={index} className="text-capitalize">
                      {item}
                    </li>
                  ))}
              </ol>
            </div>
            <div>
              <h5 className="fw-bold">Ingredientes:</h5>
              <ul>
                {recipe.ingredients &&
                  recipe.ingredients.map((item, index) => (
                      <li key={index}>{item.ingredient} <span className='float-end'>{item.quantity} {item.unit}.</span> </li>
                  ))}
              </ul>
            </div>
            <div>
              <h5 className="d-inline fw-bold">
                Categoria:{" "}
                <p className="d-inline fw-normal">{recipe.category}</p>
              </h5>
            </div>
            <div>
              <h5 className="d-inline fw-bold">
                Tiempo de Preparacion:{" "}
                <p className="d-inline fw-normal">{recipe.time}</p>
              </h5>
            </div>
            <div>
              <h5 className="d-inline fw-bold">
                Tiempo en el Freezer:{" "}
                <p className="d-inline fw-normal">
                  {recipe.timeFreezer}
                </p>
              </h5>
            </div>
            <div>
              <h5 className="d-inline fw-bold">
                Tiempo de Heladera:{" "}
                <p className="d-inline fw-normal">{recipe.timeFridge}</p>
              </h5>
            </div>
            <div>
              <h5 className="d-inline fw-bold">
                Tiempo de Heladera:{" "}
                <p className="d-inline fw-normal">{recipe.timeFridge}</p>
              </h5>
            </div>
            <div>
              <h5 className="fw-bold">Tags:</h5>
              <ul>
                {recipe.tags &&
                  recipe.tags.map((item, index) => (
                    <li key={index} className="text-capitalize">
                      {item.name}
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <h5 className="d-inline fw-bold">
                Likes:{" "}
                <p className="d-inline fw-normal">{recipe.likes}</p>
              </h5>
            </div>
            <div>
              <h5 className="d-inline fw-bold">
                Creado:{" "}
                <p className="d-inline fw-normal">{moment(recipe.createdAt).format("DD/MM/YYYY, HH:MM")}</p>
              </h5>
            </div>
            <div>
              <h5 className="d-inline fw-bold">
                Ultima Actualizacion:{" "}
                <p className="d-inline fw-normal">{moment(recipe.updateAt).format("DD/MM/YYYY, HH:MM")}</p>
              </h5>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
