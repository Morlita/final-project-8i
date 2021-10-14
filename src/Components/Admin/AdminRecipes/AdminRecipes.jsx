import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Modal from "../../Modal/Modal";
import AdminRecipesStatus from "./AdminRecipesStatus";

function Admin() {
  let history = useHistory();

  const user = JSON.parse(localStorage.getItem("registerLogIn"));
  const userToken = JSON.parse(localStorage.getItem("userToken"));

  const [recipes, setRecipes] = useState([]);
  const [fetchFlag, setFetchFlag] = useState("");
  let [reference, setReference] = useState("");

  /* List all recipes */

  const getRecipes = async () => {
    await fetch("https://polar-reaches-30197.herokuapp.com/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((err) => {
        setTimeout(() => {
          alert("Algo salio mal");
        }, 2000);
      });
  };

  useEffect(() => {
    if (!user) {
      history.push("/login");
      alert("Inicie secion para visualizar esta Pagina");
    } else if (user.role === "user") {
      history.push("/");
      alert("No tiene los permisos necesarios para acceder a esta pagina");
    } else {
      getRecipes();
    }
  }, [fetchFlag]);

  /*Set Recipe*/

  const setRecipe = (id) => {
    const newReference = recipes.find(recipe => recipe._id === id);
    setReference(newReference);
  };

  /*Filter Recipes*/
  const accept = recipes.filter((p) => p.accepted === "accepted");
  const reject = recipes.filter((p) => p.accepted === "rejected");
  const pendant = recipes.filter((p) => p.accepted === "pending");

  /*Delete*/
  const remove = (id) => {
    const deleteRecipe = recipes.find(recipe => recipe._id === id);
    fetch(
      `https://polar-reaches-30197.herokuapp.com/recipes/${deleteRecipe._id}`,
      {
        method: "DELETE",
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json",
          "x-access-token": userToken,
        },
      }
    ).then((response) => setFetchFlag(response.json()));
  };

  return (
    <div className="container">
      <h3>Recetas</h3>

      {/*TABLA */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <h5>Recetas Pendientes</h5>
          {pendant &&
            pendant.map((item, index) => (
              <AdminRecipesStatus
                id="pendant"
                title="pendant"
                recipe={item}
                index={index}
                setFetchFlag={setFetchFlag}
                remove={remove}
                setRecipe={setRecipe}
              />
            ))}
          <h5>Recetas Aceptadas</h5>
          {accept &&
            accept.map((item, index) => (
              <AdminRecipesStatus
                id="accept"
                recipe={item}
                index={index}
                setFetchFlag={setFetchFlag}
                remove={remove}
                setRecipe={setRecipe}
              />
            ))}
          <h5>Recetas Rechazadas</h5>
          {reject &&
            reject.map((item, index) => (
              <AdminRecipesStatus
                id="reject"
                recipe={item}
                index={index}
                setFetchFlag={setFetchFlag}
                remove={remove}
                setRecipe={setRecipe}
              />
            ))}
        </tbody>
      </table>
      <Modal recipe={reference} />
    </div>
  );
}

export default Admin;
