function EditModal({recipe}) {   
    console.log("Edit", recipe) 
    return(
        <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-capitalize"> Editar Receta</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <div>
                                <label htmlFor="title" className="d-inline fw-bold">
                                Titulo Actual:{" "}
                                    <p className="d-inline fw-normal">{recipe.title}</p>
                                </label>
                            </div>
                            <div>
                                <input type="text" name="title" id="title" maxLength="30" placeholder="Ej: Galletitas de limón"/>
                            </div>
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
                            <div>
                                <label htmlFor="category" className="d-inline fw-bold">
                                    Categoria:{" "}
                                    <p className="d-inline fw-normal">{recipe.category}</p>
                                </label>
                            </div>
                            <div>
                                <select className="mb-5 p-2" name="category">
                                    <option value="Con carne">Con carne</option>
                                    <option value="Veggies">Veggie</option>
                                    <option value="Dulces">Dulces</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="time" className="d-inline fw-bold">
                                    Tiempo de Preparacion:{" "}
                                    <p className="d-inline fw-normal">{recipe.time}</p>
                                </label>
                            </div>
                            <div>
                                <input type="text" maxLength="15" name="time" className="mb-3" placeholder="Ej: 1 hora y 30 minutos" /> 
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="timeFreezer" className="d-inline fw-bold">
                                    Tiempo en el Freezer:{" "}
                                    <p className="d-inline fw-normal">
                                    {recipe.timeFreezer}
                                    </p>
                                </label>
                            </div>
                            <div>
                                <input type="text" maxLength="15" name="timeFreezer" className="mb-3" placeholder="Ej: 3 meses" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="timeFridge" className="d-inline fw-bold">
                                    Tiempo de Heladera:{" "}
                                    <p className="d-inline fw-normal">{recipe.timeFridge}</p>
                                </label>
                            </div>
                            <div>
                                <input type="text" maxLength="15" name="timeFridge" className="mb-3" placeholder="Ej: 4 días" />
                            </div>
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
    )
}
export default EditModal;