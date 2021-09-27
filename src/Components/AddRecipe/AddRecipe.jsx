import React, { useState } from "react";
import AddInputSteps from "./AddInputSteps";
import AddInputIngredients from "./AddInputIngredients";

function AddRecipe() {
  const [recipe, setRecipe] = useState({
    title: "",
    time: "",
    timeFreezer: "",
    timeFridge: "",
    category: "",
    img: "",
    steps: ""
  });

  const [steps, setSteps] = useState([]);

  console.log(recipe);

  /*ADD A NEW STEP */
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

  const handleInput = (event) => {
    console.log(event.target.dataset)
    const prueba = steps;
    prueba[event.target.dataset.index] = event.target.value; 
    console.log("PRUEBAA", prueba)
    setSteps(prueba);
    console.log(steps);
  };

  /*ADD A NEW INGREDIENT */
  const defaultStateIngredients = {
    ingredient: "",
    cuantity: "",
  };
  const [rowIngredients, setRowIngredients] = useState([
    defaultStateIngredients,
  ]);

  const handleOnAddIngredients = () => {
    setRowIngredients(rowIngredients.concat(defaultStateIngredients));
    
  };

  const handleRemoveIngredients = (index) => {
    const copyRowIngredients = [...rowIngredients];
    copyRowIngredients.splice(index, 1);
    setRowIngredients(copyRowIngredients);
  };

  /*COPY INFORMATION */
  const setRecipes = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
    console.log(recipe);
  };

  return (
    <div className="App">
      <h1>Crea tu receta</h1>
      <div className="d-flex flex-column form-contact">
        <label htmlFor="" className="mb-1">
          Nombre
        </label>
        <input
          type="text"
          name="title"
          className="w-100 w-md-50 mb-3"
          value={recipe.title}
          onChange={setRecipes}
        />

        {rowSteps.map((row, index) => (
          <AddInputSteps
            remove={() => handleRemoveSteps(index)}
            index={index}
            key={index}
            handleInput={handleInput}
            value={steps[index]}
          />
        ))}

        <button
          className="btn btn-primary mt-3 mb-5 w-100 w-md-50"
          onClick={handleOnAddSteps}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
          </svg>
        </button>

        {rowIngredients.map((row, index) => (
          <AddInputIngredients
            {...row}
            remove={() => handleRemoveIngredients(index)}
            key={index}
          />
        ))}

        <button
          className="btn btn-primary mt-3 mb-5 w-100 w-md-50"
          onClick={handleOnAddIngredients}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
          </svg>
        </button>

        <label htmlFor="" className="mb-1">
          Tiempo Estimado de Preparacion
        </label>
        <input
          type="number"
          name="time"
          className="w-100 w-md-50 mb-3"
          value={recipe.time}
          onChange={setRecipes}
        />

        <label htmlFor="" className="mb-1">
          Tiempo Estimado de Duracion en el Freezer
        </label>
        <input
          type="number"
          name="timeFreezer"
          className="w-100 w-md-50 mb-3"
          value={recipe.timeFreezer}
          onChange={setRecipes}
        />

        <label htmlFor="" className="mb-1">
          Tiempo Estimado de Duracion en la Heladera
        </label>
        <input
          type="number"
          name="timeFridge"
          className="w-100 w-md-50 mb-3"
          value={recipe.timeFridge}
          onChange={setRecipes}
        />

        <label htmlFor="" className="mb-1">
          Imagen
        </label>
        <input
          type="img"
          name="img"
          className="w-100 w-md-50 mb-3"
          value={recipe.img}
          onChange={setRecipes}
        />

        <label htmlFor="">Categoria</label>
        <select className="mb-5 w-100 w-md-50" name="category" value={recipe.category} onChange={setRecipes}>
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
