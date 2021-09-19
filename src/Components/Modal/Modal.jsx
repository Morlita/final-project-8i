function Modal(recipe) {
  console.log(recipe.recipe)
    return(
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title text-capitalize" id="exampleModalLabel">{recipe.recipe.title}</h3>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div>
              <div>
                <h5 className="d-inline fw-bold">Creador: <p className="d-inline fw-normal">INSERTAR USUARIO</p></h5>
              </div>
              <h5 className="fw-bold">Procedimiento:</h5>
              <ol>
                {/*recipe.recipe.steps.map((item, index) => (
                  <li key={index}>{item}</li>
                ))*/}
              </ol>
            </div>
            <div>
              <h5 className="fw-bold">Ingredientes:</h5>
              <ul>
                {/*recipe.recipe.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))*/}
              </ul>
            </div>
            <div>
              <h5 className="d-inline fw-bold">Categoria: <p className="d-inline fw-normal">{recipe.recipe.category}</p></h5>
            </div>
            <div>
              <h5 className="d-inline fw-bold">Tiempo de Preparacion: <p className="d-inline fw-normal">{recipe.recipe.time}</p></h5>
            </div>
            <div>
              <h5 className="d-inline fw-bold">Tiempo en el Freezer: <p className="d-inline fw-normal">{recipe.recipe.timeFreezer}</p></h5>
            </div>
            <div>
              <h5 className="d-inline fw-bold">Tiempo de Heladera: <p className="d-inline fw-normal">{recipe.recipe.timeFridge}</p></h5>
            </div>
            <div>
              <h5 className="d-inline fw-bold">Tiempo de Heladera: <p className="d-inline fw-normal">{recipe.recipe.timeFridge}</p></h5>
            </div>
            <div>
              <h5 className="fw-bold">Tags:</h5>
              <ul>
                {/*recipe.recipe.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))*/}
              </ul>
            </div>
            <div>
              <h5 className="d-inline fw-bold">Likes: <p className="d-inline fw-normal">{recipe.recipe.likes}</p></h5>
            </div>
            <div>
              <h5 className="d-inline fw-bold">Creado: <p className="d-inline fw-normal">{recipe.recipe.createdAt}</p></h5>
            </div>
            <div>
              <h5 className="d-inline fw-bold">Ultima Actualizacion: <p className="d-inline fw-normal">{recipe.recipe.updatedAt}</p></h5>
            </div>
          
          
            
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Modal;