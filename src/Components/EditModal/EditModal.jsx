function EditModal({recipe}) {   
    console.log("Edit", recipe) 
    return(
        <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 className="modal-title text-capitalize" id="exampleModalLabel">{recipe.title}</h3>
                    </div>
                    <div class="modal-body">
                        <div>
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
                        <h5 className="fw-bold">Ingredientes:</h5>
                        <ul>
                            {recipe.ingredients &&
                                recipe.ingredients.map((item, index) => (
                                    <li key={index}>{item.ingredient} <span className='float-end'>{item.quantity} {item.unit}.</span> </li>
                                ))}
                        </ul>
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
export default EditModal;