import React, { useState } from "react";
import AddInputSteps from "./AddInputSteps";
import AddImage from "./AddImage";

function AddRecipe() {
  const [recipe, setRecipe] = useState({
    title: "",
    time: "",
    timeFreezer: "",
    timeFridge: "",
    category: "",
    img: "",
    steps: "",
    otherImgs: ""
  });
  const [steps, setSteps] = useState([]);
  const [otherImgs, setOtherImgs] = useState([]);

  /*Set Information */
  const setRecipes = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };

  /* Add Step */
  const defaultStateSteps = {
    step: "",
  };
  const [rowSteps, setRowSteps] = useState([defaultStateSteps]);

  const handleOnAddSteps = () => {
    setRowSteps(rowSteps.concat(defaultStateSteps));
  };

  const handleRemoveSteps = (index) => {
    debugger
    const copyRowSteps = [...rowSteps];
    copyRowSteps.splice(index, 1);
    steps.splice(index, 1)
    setRowSteps(copyRowSteps);
  };

  /*const handleInputSteps = (event) => {
    const prueba = steps;
    prueba[event.target.dataset.index] = event.target.value;
    console.log("PRUEBA2", prueba)
    setSteps(prueba);
    console.log("PRUEBA", prueba)
    console.log("STEPS", steps)
  };*/

  const updateSteps = (index, text) => {
    const newSteps = steps
    newSteps[index] = text
    newSteps != [] ? setSteps(newSteps) : alert("Complete todos los campos")
    console.log("NEW STEPS", newSteps)
  }

  /* Add Img */
  const defaultStateImg = {
    step: "",
  };
  const [rowImg, setRowImg] = useState([defaultStateImg]);

  const handleOnAddImg = () => {
    setRowImg(rowImg.concat(defaultStateImg));
  };

  const handleRemoveImg = (index) => {
    const copyRowImg = [...rowImg];
    copyRowImg.splice(index, 1);
    setRowImg(copyRowImg);
  };

  const handleInputImg = (event) => {
    const prueba2 = otherImgs;
    prueba2[event.target.dataset.index] = event.target.value;
    setOtherImgs(prueba2);
    console.log(otherImgs);
  };

  /*Add Recipe */
  const add = () => {
    setRecipe(recipe.steps = steps)
    setRecipe(recipe.otherImgs = otherImgs)
    if (
      recipe.title === "" ||
      recipe.time === "" ||
      recipe.timeFreezer === "" ||
      recipe.timeFridge === "" ||
      recipe.img === "" ||
      recipe.steps.length === 0
    ) {
      alert("Complete todos los campos");
    } else if (
      recipe.time.length > 4 ||
      recipe.timeFreezer.length > 4 ||
      recipe.timeFridge.length > 4
    ) {
      alert("Los tiempos tienen que ser menos de 4 digitos");
    } else {
      console.log("Receta", recipe);
    }
  };

  return (
    <div className="App">
      <h1>Crea tu receta</h1>
      <div className="d-flex flex-column form-contact">
        {/* Recipe´s Name */}
        <label htmlFor="title" className="mb-1">
          Nombre
        </label>
        <input
          type="text"
          name="title"
          className="w-100 w-md-50 mb-3"
          value={recipe.title}
          onChange={setRecipes}
          maxLength="50"
        />

        {/* Recipe's Steps */}
        {rowSteps.map((row, index) => (
          <AddInputSteps
            remove={() => handleRemoveSteps(index)}
            index={index}
            key={index}
            value={steps[index]}
            updateSteps={updateSteps}
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

        {/* Recipe´s Preparation Time */}
        <label htmlFor="time" className="mb-1">
          Tiempo Estimado de Preparacion
        </label>
        <input
          type="number"
          name="time"
          className="w-100 w-md-50 mb-3"
          value={recipe.time}
          onChange={setRecipes}
          placeholder="5.30  2 horas  30 minutos"
        />

        {/* Recipe´s Freezer Time */}
        <label htmlFor="timeFreezer" className="mb-1">
          Tiempo Estimado de Duracion en el Freezer
        </label>
        <input
          type="number"
          name="timeFreezer"
          className="w-100 w-md-50 mb-3"
          value={recipe.timeFreezer}
          onChange={setRecipes}
          placeholder="5.30  2 horas  30 minutos"
        />

        {/* Recipe´s Fridge Time */}
        <label htmlFor="timeFridge" className="mb-1">
          Tiempo Estimado de Duracion en la Heladera
        </label>
        <input
          type="number"
          name="timeFridge"
          className="w-100 w-md-50 mb-3"
          value={recipe.timeFridge}
          onChange={setRecipes}
          placeholder="5.30  2 horas  30 minutos"
        />

        {/* Recipe´s Img */}
        <label htmlFor="img" className="mb-1">
          Imagen
        </label>
        <input
          type="img"
          name="img"
          className="w-100 w-md-50 mb-3"
          value={recipe.img}
          onChange={setRecipes}
          maxLength="600"
        />

        {/* Recipe's Other Imgs */}
        {rowImg.map((row, index) => (
          <AddImage
            remove={() => handleRemoveImg(index)}
            index={index}
            key={index}
            handleInputImg={handleInputImg}
            value={otherImgs[index]}
          />
        ))}

        <button
          className="btn btn-primary mt-3 mb-5 w-100 w-md-50"
          onClick={handleOnAddImg}
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

        {/* Recipe´s Category */}
        <label htmlFor="category">Categoria</label>
        <select
          className="mb-5 w-100 w-md-50"
          name="category"
          value={recipe.category}
          onChange={setRecipes}
        >
          <option value="Con carne">Con carne</option>
          <option value="Veggie">Veggie</option>
          <option value="Dulces">Dulces</option>
        </select>

        <a className="btn btn-primary w-25 mt-3 mb-5" onClick={add}>
          Agregar
        </a>
      </div>
    </div>
  );
}

export default AddRecipe;
