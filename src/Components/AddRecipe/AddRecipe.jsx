import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AddInputSteps from "./AddInputSteps";
import AddInputIngredients from "./AddInputIngredients";
import Tags from "../Tags/Tags";
import './AddRecipe.css'

function AddRecipe() {

  const user = JSON.parse(localStorage.getItem("registerLogIn"));

  let history = useHistory();

  if(!user){
    history.push("/login");
    setTimeout(() => {
      alert("Inicie secion para subir una receta");
    }, 1000);
  }


  const [recipe, setRecipe] = useState({
    title: "",
    time: "",
    timeFreezer: "",
    timeFridge: "",
    category: "Con carne",
    img: "",
    steps: "",
    ingredients: "",
    tags: [],
    user: "",
  });

  const [steps, setSteps] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  let newTags = []
  let allTags = []

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
    steps.splice(index, 1);
    setRowSteps(copyRowSteps);
  };

  const updateSteps = (index, text) => {
    const newSteps = steps;
    newSteps[index] = text;
    newSteps != [] ? setSteps(newSteps) : alert("Complete todos los campos");
  };

  function validationSteps() {  //Revisar Funcionamiento con Diego
    console.log("P", steps)
    if(steps.length === 0){
      return true
    }
    const stepsResult = steps.filter(step => step === "");
    return stepsResult.length === 0 ? false : true
  }

  /* Add Ingredients */
  const defaultStateIngredients = {
    ingredients: "",
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
    ingredients.splice(index, 1);
    setRowIngredients(copyRowIngredients);
  };

  const updateIngredients = (index, text) => {
    const newIngredient = ingredients;
    newIngredient[index] = text;
    newIngredient != [] ? setIngredients(newIngredient) : alert("Complete todos los campos");
  };

  function validationIngredients() {  //Revisar Funcionamiento con Diego
    if(ingredients.length === 0){
      return true
    }
    const ingredientResult = ingredients.filter(ingredient => ingredient.ingredient === "" || ingredient.quantity === "");
    console.log("Ingredient", ingredientResult)
    return ingredientResult.length === 0 ? false : true
  }

  /*TAGS */
  const getTags = (arrayTags) => {
    allTags = arrayTags
    const result = allTags && allTags.filter(tag => tag.checked === true).map(tag => tag.name);
    newTags = result
  }


  /*Add Recipe */
  const add = () => {
    if (recipe.title === "" || recipe.time === "" || recipe.timeFreezer === "" || recipe.timeFridge === "" || recipe.img === "" || validationIngredients() || validationSteps()) {
      alert("Complete todos los campos");
      return;
    } else if(newTags.length < 1 || newTags.length > 3){
      alert("Debe elegir entre uno y tres filtros");
      return;
    }else {
      fetch("https://polar-reaches-30197.herokuapp.com/recipes", {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "x-access-token": user.token,
        },
        method: "POST",
        body: JSON.stringify({ ...recipe, steps: steps, ingredients: ingredients, user: user._id, tags: newTags }),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Su receta fue subida con exito y esta pendiente de aceptacion");
          setRecipe({
            title: "",
            time: "",
            timeFreezer: "",
            timeFridge: "",
            category: "Con carne",
            img: "",
            steps: "",
            ingredients: "",
            tags: [],
            user: "",
          });
          setRowSteps([defaultStateSteps]);
          setSteps([]);
        })
        .catch((err) => {
          setTimeout(() => {
            console.log(err);
            alert("Algo salio mal");
          }, 2000);
        });
    }
  };


  return (
    <div className="container my-4 add-recipe text-white rounded p-4">
      <h1 className='text-center p-2 rounded'>Subí tu receta</h1>
      <div className="d-flex flex-column form-contact">
        {/* Recipe´s Name */}
        <label htmlFor="title" className="mb-1">Nombre</label>
        <input type="text" name="title" className="w-100 w-md-50 mb-3" value={recipe.title} onChange={setRecipes} maxLength="50" placeholder="Ej: Galletitas de limón" />

        {/* Recipe's Ingredients */}
        {rowIngredients.map((row, index) => (
          <AddInputIngredients remove={() => handleRemoveIngredients(index)} index={index} key={index} value={ingredients[index]} updateIngredients={updateIngredients} />
        ))}
        <div class="d-grid gap-2 col-8 mx-auto col-md-5">
          <button className="btn btn-form-recipe my-3 btn-outline-light rounded-pill" onClick={handleOnAddIngredients}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
              <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
            </svg> <span className="p-2">Agregar ingrediente</span>
          </button>
        </div>

        {/* Recipe's Steps */}
        {rowSteps.map((row, index) => (
          <AddInputSteps remove={() => handleRemoveSteps(index)} index={index} key={index} value={steps[index]} updateSteps={updateSteps} />
        ))}
        
        <div class="d-grid gap-2 col-8 mx-auto col-md-5">
          <button className="btn btn-form-recipe my-3 btn-outline-light rounded-pill" onClick={handleOnAddSteps}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
              <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
            </svg><span className="p-2">Agregar Paso</span>
          </button>          
        </div>

        <div className="container d-flex flex-column w-75 p-2 mt-5 text-center">
          {/* Recipe´s Preparation Time */}
          <label htmlFor="time" className="mb-1"> Tiempo estimado de preparación</label>
          <input type="text" maxLength="15" name="time" className="mb-3" value={recipe.time} onChange={setRecipes} placeholder="Ej: 1 hora y 30 minutos" />

          {/* Recipe´s Freezer Time */}
          <label htmlFor="timeFreezer" className="mb-1"> Tiempo estimado de duración en el freezer
          </label>
          <input type="text" maxLength="15" name="timeFreezer" className="mb-3" value={recipe.timeFreezer} onChange={setRecipes} placeholder="Ej: 3 meses" />

          {/* Recipe´s Fridge Time */}
          <label htmlFor="timeFridge" className="mb-1"> Tiempo estimado de duración en la heladera
          </label>
          <input type="text" maxLength="15" name="timeFridge" className="mb-3" value={recipe.timeFridge} onChange={setRecipes} placeholder="Ej: 4 días" />

          {/* Recipe´s Img */}
          <label htmlFor="img" className="mb-1">Imagen</label>
          <input type="img" name="img" className="mb-3" value={recipe.img} onChange={setRecipes} maxLength="600" placeholder="Inserta la URL (https://...) de tu imagen" />

          {/* Recipe´s Category */}
          <label htmlFor="category">Seleccióna la categoría principal</label>
          <select className="mb-5 p-2" name="category" value={recipe.category} onChange={setRecipes}>
            <option value="Con carne">Con carne</option>
            <option value="Veggie">Veggie</option>
            <option value="Dulces">Dulces</option>
          </select>
        </div>

        {/*Recipe's Tag */}
        <Tags sendTags={getTags} />
        <div class="d-grid gap-2 col-8 mx-auto col-md-5">
          <button className="btn btn-form-recipe my-3 btn-danger rounded-pill" onClick={add}>Agregar</button>
        </div>
      </div>
    </div>
  );
}

export default AddRecipe;
