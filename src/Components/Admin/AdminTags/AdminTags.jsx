import React, { useState, useEffect } from "react";

function AdminTags() {
  const [tags, setTags] = useState([]);
  const [fetchFlag, setFetchFlag] = useState("");
  let [reference, setReference] = useState("");
  const [tag, setTag] = useState({
    name: "",
  });

  const getTags = async () => {
    await fetch("https://polar-reaches-30197.herokuapp.com/tags", {
      headers: {
        "Content-Type": "application/json",
        "x-access-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDE4MTFkZWVhYTQwODAzMjIyOTAxZiIsImlhdCI6MTYzMTY4OTMwMywiZXhwIjoxNjMxNzc1NzAzfQ.zYvdpjTq4wJrul5dPEKP43Hrd35JsJYjpNWhfLcj4BQ",
      },
    })
      .then((response) => response.json())
      .then((data) => setTags(data))
      .catch((err) => {
        console.log(err);
        alert("Algo salio mal");
      });
  };

  const setTagsObj = (event) => {
    setTag({ ...tag, [event.target.name]: event.target.value });
    console.log(tag);
  };

  /*Add Tags */
  const add = () => {
    if (tag.name == ""){
        alert("Complete todos los campos");
    }else{
      fetch('https://polar-reaches-30197.herokuapp.com/tags', {
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(tag)
    })
    .then(response => response.json())
    .then(newTag => {
        setTags([...tags, newTag]);
        setTag({
            name: "",
        });
    })
    } 
};

  /*Delete*/
  const remove = (index) => {
    debugger;
    fetch(`https://polar-reaches-30197.herokuapp.com/tags/${tags[index]._id}`, {
      method: "DELETE",
      body: JSON.stringify(),
    }).then((response) => setFetchFlag(response.json()));
  };

  /* List all Tags */
  useEffect(() => {
    getTags();
  }, [fetchFlag]);

  const setIndex = (index) => {
    setReference(index);
  };

  return (
    <div className="container">
      <h2>Tags</h2>
      <div>
        <label htmlFor="name" className="mx-3">
          Nuevo tag
        </label>
        <input type="text" name="name" maxLength="15" onChange={setTagsObj} />
        <button className="btn btn-primary w-20 mb-1 mx-3" onClick={add} type="button">
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
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Tags</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tags && tags.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <button
                  className="btn btn-primary w-20 mb-1 mx-3"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => setIndex(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pen-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTags;
