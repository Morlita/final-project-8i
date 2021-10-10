function ButtonAccept(props) {
  const userToken = JSON.parse(localStorage.getItem("userToken"));

  const accept = (recipe) => {
    fetch(`https://polar-reaches-30197.herokuapp.com/recipes/${recipe._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": userToken
      },
      body: JSON.stringify({...recipe, accepted: "accepted"}),
    }).then((response) => {
      props.setFetchFlag(response.json());
    });
  };
  return (
    <button
      className="btn btn-success w-20 me-3 mb-1"
      onClick={() => accept(props.recipe)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-check-lg"
        viewBox="0 0 16 16"
      >
        <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z" />
      </svg>
    </button>
  );
}

export default ButtonAccept;
