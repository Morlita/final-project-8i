import React, { useState } from "react";
import AddInputSteps from "./AddInputSteps";
import AddInputIngredients from "./AddInputIngredients";

function AddRecipe() {

    /*STEPS */
  const defaultStateSteps = {
    step: "",
  };
  const [rowSteps, setRowSteps] = useState([defaultStateSteps]);

  const handleOnAddSteps = () => {
    setRowSteps(rowSteps.concat(defaultStateSteps));
  };

  const handleRemoveSteps = (index) => {
    const copyRowSteps = [...rowSteps];
    copyRowSteps.splice(index, 1);
    setRowSteps(copyRowSteps);
  };

  /*INGREDIENTS */
  const defaultStateIngredients = {
    ingredient: "",
    cuantity: "",
  };
  const [rowIngredients, setRowIngredients] = useState([defaultStateIngredients]);

  const handleOnAddIngredients = () => {
    setRowIngredients(rowIngredients.concat(defaultStateIngredients));
  };

  const handleRemoveIngredients = (index) => {
    const copyRowIngredients = [...rowIngredients];
    copyRowIngredients.splice(index, 1);
    setRowIngredients(copyRowIngredients);
  };


  return (
    <div className="App">
      <h1>Crea tu receta</h1>
        <div className="d-flex flex-column form-contact align-items-center">
            <label htmlFor="" className="mb-1">Nombre</label>
            <input type="text" name="name" className="w-50 mb-3" />

            {rowSteps.map((row, index) => (
                <AddInputSteps {...row} remove={() => handleRemoveSteps(index)} key={index} />
            ))}

            <button className="btn btn-primary mt-3 mb-5 align-self-center" onClick={handleOnAddSteps}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
                </svg>
            </button>

            {rowIngredients.map((row, index) => (
                <AddInputIngredients {...row} remove={() => handleRemoveIngredients(index)} key={index} />
            ))}

            <button className="btn btn-primary mt-3 mb-5 align-self-center" onClick={handleOnAddIngredients}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
                </svg>
            </button>


            <label htmlFor=""  className="mb-1">Tiempo Estimado de Preparacion</label>
            <input type="number" name="value" className="w-50 mb-3" />

            <label htmlFor=""  className="mb-1">Tiempo Estimado de Duracion en el Freezer</label>
            <input type="number" name="rateUSD" className="w-50 mb-3" />

            <label htmlFor=""  className="mb-1">Tiempo Estimado de Duracion en la Heladera</label>
            <input type="number" name="notas" className="w-50 mb-3" />

            <label htmlFor="">Categoria</label>
            <select className="mb-5">
                <option value="Con carne">Con carne</option>
                <option value="Veggie">Veggie</option>
                <option value="Dulces">Dulces</option>
            </select>

            

            <a className="btn btn-primary w-25 mt-3 mb-5">Agregar</a>
        </div>

      

    </div>
  );
}

export default AddRecipe;