import React, { useState } from "react";

function AddInputIngredients({ remove, index, updateIngredients }) {
  const [ingredient, setIngredient] = useState({
    ingredient: "",
    quantity: "",
    unit: "Kg"
  });

  const ingredientValue = (event) => {
    const value = { ...ingredient, [event.target.name]: event.target.value }
    setIngredient(value);
    updateIngredients(index, value);
    console.log("INGREDIENTE", value)
  };

  return (
    <div className="d-flex flex-column form-contact w-100 w-md-50">
      <label htmlFor="">Ingrediente </label>
      <div className="d-flex">
        <input
          type="text"
          name="ingredient"
          className="w-50 me-2"
          data-index={index}
          value={ingredient.ingredient}
          onChange={ingredientValue}
          maxLength="100"
        ></input>
        <input
          type="number"
          placeholder=" Cantidad"
          className="w-25 me-2"
          name="quantity"
          className="w-50 me-2"
          data-index={index}
          value={ingredient.quantity}
          onChange={ingredientValue}
        />
        <select className="w-25"
          name="unit"
          data-index={index}
          value={ingredient.unit}
          onChange={ingredientValue}
        >
          <option value="Kg">Kg</option>
          <option value="G">G</option>
          <option value="Unidad/es">unidad/es</option>
          <option value="Lt">Lt</option>
          <option value="Cucharada">cda</option>
          <option value="Cucharadita">cdt</option>
          <option value="ml">ml</option>
          <option value="Taza">taza</option>
          <option value="Pizca">pizca</option>
        </select>
        <button type="button" className="btn btn-danger ms-2" onClick={remove}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default AddInputIngredients;
