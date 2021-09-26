import React, { useState, useEffect } from "react";
import Modal from "../../Modal/Modal";
import ButtonAccept from "../ButtonAccept/ButtonAccept";
import ButtonReject from "../ButtonReject/ButtonReject";

function Admin() {
  const [recipes, setRecipes] = useState([]);
  //const [users, setUsers] = useState([]);
  const [fetchFlag, setFetchFlag] = useState("");
  let [reference, setReference] = useState("");

  recipes.sort((a, b) => a.accepted > b.accepted);

  const getRecipes = async () => {
    await fetch("https://polar-reaches-30197.herokuapp.com/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((err) => {
        console.log(err);
        alert("Algo salio mal");
      });
  };

  /* List all recipes */
  useEffect(() => {
    getRecipes();
  }, [fetchFlag]);

  console.log(recipes);

  /*SETEAR EL INDEX*/

  const setIndice = (index) => {
    reference = recipes[index];
    setReference(reference);
  };

  /*Delete*/
  const remove = (index) => {
    fetch(
      `https://polar-reaches-30197.herokuapp.com/recipes/${recipes[index]._id}`,
      {
        method: "DELETE",
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json",
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDE4MTFkZWVhYTQwODAzMjIyOTAxZiIsImlhdCI6MTYzMTY4OTMwMywiZXhwIjoxNjMxNzc1NzAzfQ.zYvdpjTq4wJrul5dPEKP43Hrd35JsJYjpNWhfLcj4BQ",
        },
      }
    ).then((response) => setFetchFlag(response.json()));
  };

  return (
    <div>
      <h3>Recetas</h3>

      {/*TABLA */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Pasos</th>
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((item, index) => (
            <tr key={index}>
              <td className="col-3">{item.title}</td>
              <td className="col col-sm-6 col-md-5 col-lg-3">
                <ol>
                  {item.steps.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </td>
              <td className="col col-sm-2">{item.accepted}</td>
              <td className="col-1 col-lg-3">
                {recipes[index].accepted == "pending" ? (
                  <div className="d-flex">
                    <ButtonAccept recipe={item} setFetchFlag={setFetchFlag}/>
                    <ButtonReject recipe={item} setFetchFlag={setFetchFlag}/>
                  </div>
                ) : recipes[index].accepted == "rejected" ? (
                  <ButtonAccept recipe={item} setFetchFlag={setFetchFlag}/>
                ) : (
                  <ButtonReject recipe={item} setFetchFlag={setFetchFlag}/>
                )}

                <button
                  type="button"
                  className="btn btn-primary w-20 me-3 mb-1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => setIndice(index)}
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

                <button
                  className="btn btn-danger w-20 mb-1"
                  onClick={() => remove(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal recipe={reference} />
    </div>
  );
}

export default Admin;
