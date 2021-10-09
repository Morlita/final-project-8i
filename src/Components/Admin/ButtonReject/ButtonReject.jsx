function ButtonReject(props) {

  const userToken = JSON.parse(localStorage.getItem("userToken"));

    const reject = (recipe) => {
        fetch(`https://polar-reaches-30197.herokuapp.com/recipes/${recipe._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": userToken,
          },
          body: JSON.stringify({ ...recipe, accepted: "rejected" }),
        }).then((response) => {
          props.setFetchFlag(response.json());
        });
      };
      
    return(
        <button
        className="btn btn-secondary w-20 me-3 mb-1"
        onClick={() => reject(props.recipe)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
        </svg>
      </button>
    )
}

export default ButtonReject;