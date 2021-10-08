import React, { useState } from "react";
import AddInputSteps from "./AddInputSteps";
import AddImage from "./AddImage";
import AddInputIngredients from "./AddInputIngredients";

function AddRecipe() {
  const [recipe, setRecipe] = useState({
    title: "",
    time: "",
    timeFreezer: "",
    timeFridge: "",
    category: "Con carne",
    img: "",
    steps: "",
    otherImgs: "",
    ingredients: "",
    tags: [],
    user: "61422ef3257c69006799ed27"
  });
  const [step, setSteps] = useState([]);
  const [otherImgs, setOtherImgs] = useState([]);
  const [ingredients, setIngredients] = useState([]);

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
    const copyRowSteps = [...rowSteps];
    copyRowSteps.splice(index, 1);
    step.splice(index, 1);
    setRowSteps(copyRowSteps);
  };

  const updateSteps = (index, text) => {
    const newSteps = step;
    newSteps[index] = text;
    newSteps != [] ? setSteps(newSteps) : alert("Complete todos los campos");
    console.log("NEW STEPS", newSteps);
  };

  /* Add Img */
  const defaultStateImg = {
    img: "",
  };
  const [rowImg, setRowImg] = useState([defaultStateImg]);

  const handleOnAddImg = () => {
    setRowImg(rowImg.concat(defaultStateImg));
  };

  const handleRemoveImg = (index) => {
    const copyRowImg = [...rowImg];
    copyRowImg.splice(index, 1);
    otherImgs.splice(index, 1);
    setRowImg(copyRowImg);
  };

  const updateImg = (index, text) => {
    const newImg = otherImgs;
    newImg[index] = text;
    newImg != [] ? setOtherImgs(newImg) : alert("Complete todos los campos");
    console.log("NEW Img", newImg);
  };

  /* Add Ingredients */
  const defaultStateIngredients = {
    ingredients: "",
  };
  const [rowIngredients, setRowIngredients] = useState([defaultStateIngredients]);

  const handleOnAddIngredients = () => {
    setRowIngredients(rowIngredients.concat(defaultStateIngredients));
  };

  const handleRemoveIngredients = (index) => {
    const copyRowIngredients = [...rowIngredients];
    copyRowIngredients.splice(index, 1);
    ingredients.splice(index, 1);
    setRowIngredients(copyRowIngredients);
  };

  const updateIngredients = (index, text) => {
    const newIngredient = ingredients;
    newIngredient[index] = text;
    newIngredient != [] ? setIngredients(newIngredient) : alert("Complete todos los campos");
    console.log("NEW Ingredients", newIngredient);
  };

  /*Add Recipe */
  const add = () => {
    if (
      recipe.title === "" ||
      recipe.time === "" ||
      recipe.timeFreezer === "" ||
      recipe.timeFridge === "" ||
      recipe.img === "" 
    ) {
      alert("Complete todos los campos");
      return;
    } 
     else {
      fetch('https://polar-reaches-30197.herokuapp.com/recipes', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDE4MTFkZWVhYTQwODAzMjIyOTAxZiIsImlhdCI6MTYzMTY4OTMwMywiZXhwIjoxNjMxNzc1NzAzfQ.zYvdpjTq4wJrul5dPEKP43Hrd35JsJYjpNWhfLcj4BQ'
            },
            method: 'POST',
            body: JSON.stringify({...recipe, steps: step, otherImgs: otherImgs, ingredients: ingredients})
        })
        .then(response => response.json())
        .then(data => {
          setRecipe([{...recipe, data}]);
          alert("Receta Agregada =)")
        })
        .catch((err) => {
          console.log(err)
          alert("Algo salio mal")
        })
    }
  };

  console.log("AGREGAR", recipe)

  return (
    <div className="container">
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
        
        {/* Recipe's Ingredients */}
        {rowIngredients.map((row, index) => (
          <AddInputIngredients
            remove={() => handleRemoveIngredients(index)}
            index={index}
            key={index}
            value={ingredients[index]}
            updateIngredients={updateIngredients}
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
            className="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
          </svg>
        </button>

        {/* Recipe's Steps */}
        {rowSteps.map((row, index) => (
          <AddInputSteps
            remove={() => handleRemoveSteps(index)}
            index={index}
            key={index}
            value={step[index]}
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
            className="bi bi-plus-lg"
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
          type="text"
          maxLength="15"
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
          type="text"
          maxLength="15"
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
          type="text"
          maxLength="15"
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
            value={otherImgs[index]}
            updateImg={updateImg}
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
            className="bi bi-plus-lg"
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

        <button className="btn btn-primary w-25 mt-3 mb-5" onClick={add}>
          Agregar
        </button>
      </div>
    </div>
  );
}

export default AddRecipe;
