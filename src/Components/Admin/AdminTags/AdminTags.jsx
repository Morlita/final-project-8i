import React, { useState, useEffect } from "react";

function AdminTags() {
  const [tags, setTags] = useState([]);
  const [fetchFlag, setFetchFlag] = useState("");

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

  /*Delete*/
  const remove = (index) => {
    debugger
    fetch(
      `https://polar-reaches-30197.herokuapp.com/tags/${tags[index]._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDE4MTFkZWVhYTQwODAzMjIyOTAxZiIsImlhdCI6MTYzMTY4OTMwMywiZXhwIjoxNjMxNzc1NzAzfQ.zYvdpjTq4wJrul5dPEKP43Hrd35JsJYjpNWhfLcj4BQ",
        },
        body: JSON.stringify(),
      }
    ).then((response) => setFetchFlag(response.json()));
  };

  console.log(tags)

  /* List all Tags */
  useEffect(() => {
    getTags();
  }, [fetchFlag]);

  return (
    <div className="container">
      <h2>Tags</h2>
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
