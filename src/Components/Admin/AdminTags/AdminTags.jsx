import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import '../Admin.css'

function AdminTags() {
  let history = useHistory();

  const user = JSON.parse(localStorage.getItem("registerLogIn"));
  const userToken = JSON.parse(localStorage.getItem("userToken"));

  const [tags, setTags] = useState([]);
  const [fetchFlag, setFetchFlag] = useState("");
  const [tag, setTag] = useState({
    name: "",
  });

  const getTags = async () => {
    await fetch("https://polar-reaches-30197.herokuapp.com/tags", {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": userToken,
      },
    })
      .then((response) => response.json())
      .then((data) => setTags(data))
      .catch((err) => {
        setTimeout(() => {
          console.log(err);
          alert("Algo salio mal");
        }, 2000);
      });
  };

  const setTagsObj = (event) => {
    setTag({ ...tag, [event.target.name]: event.target.value });
  };

  /*Add Tags */
  const add = () => {
    if (tag.name === "") {
      alert("Complete todos los campos");
    } else {
      fetch("https://polar-reaches-30197.herokuapp.com/tags", {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(tag),
      })
        .then((response) => response.json())
        .then((newTag) => {
          setTags([...tags, newTag]);
          setTag({
            name: "",
          });
        });
    }
  };

  /*Delete*/
  const remove = (index) => {
    fetch(`https://polar-reaches-30197.herokuapp.com/tags/${tags[index]._id}`, {
      method: "DELETE",
      body: JSON.stringify(),
    }).then((response) => setFetchFlag(response.json()));
  };

  /* List all Tags */
  useEffect(() => {
    if (!user) {
      history.push("/login");
      alert("Inicie secion para visualizar esta Pagina");
    } else if (user.role === "user") {
      history.push("/");
      alert("No tiene los permisos necesarios para acceder a esta pagina");
    } else {
      getTags();
    }
  }, [fetchFlag]);

  return (
    <div className="container">
      <h2 className='text-center shadow border-bottom-0 rounded p-2 text-uppercase m-3 tag-title'>Tags</h2>
      <div class="input-group my-4 p-4 shadow rounded border border-success">
        <input type="text" className="form-control border border-success" placeholder="Agregar TAG (Ej: 'legumbre')" aria-label="New tag" aria-describedby="button-addon2" value={tag.name} maxLength="15" onChange={setTagsObj} name="name"/>
        <button 
          className ="btn btn-success" 
          type ="button" 
          id="button-addon2"
          onClick={add}
          ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          className="bi bi-plus-lg"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
        </svg></button>
      </div>
      <div className="container p-4 shadow rounded">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Tags</th>
              <th scope="col" className='text-end'>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {tags &&
              tags.map((item, index) => (
                <tr key={index}>
                  <td className='text-capitalize'>{item.name}</td>
                  <td className='text-end'>
                    <button
                      className="btn btn-danger w-20 mb-1"
                      onClick={() => remove(index)}
                    >
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
                          fill-Rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminTags;
