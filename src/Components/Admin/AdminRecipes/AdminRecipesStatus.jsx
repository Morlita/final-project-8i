import ButtonAccept from "../ButtonAccept/ButtonAccept";
import ButtonReject from "../ButtonReject/ButtonReject";

function AdminRecipesStatus({ recipe, index, setFetchFlag, remove, setRecipe }) {
  return (
    <tr key={index}>
      <td className="col-3">{recipe.title}</td>
      <td className="col col-sm-2">{recipe.accepted}</td>
      <td className="col-1 col-lg-3">
        {recipe.accepted === "accepted" ? (
          <ButtonReject recipe={recipe} setFetchFlag={setFetchFlag} />
        ) : recipe.accepted === "pending" ? (
          <div>
            <ButtonReject recipe={recipe} setFetchFlag={setFetchFlag} />
            <ButtonAccept recipe={recipe} setFetchFlag={setFetchFlag} />
          </div>
        ) : (
          <ButtonAccept recipe={recipe} setFetchFlag={setFetchFlag} />
        )}

        <button
          type="button"
          className="btn btn-primary w-20 me-3 mb-1"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => setRecipe(recipe._id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-bar-expand"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M3.646 10.146a.5.5 0 0 1 .708 0L8 13.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-4.292a.5.5 0 0 0 .708 0L8 2.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zM1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8z"
            />
          </svg>
        </button>

        <button
          className="btn btn-danger w-20 mb-1"
          onClick={() => remove(recipe._id)}
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
  );
}

export default AdminRecipesStatus;
