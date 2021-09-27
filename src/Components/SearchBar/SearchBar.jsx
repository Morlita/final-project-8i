import React, { useState, useEffect } from "react";

function SearchBar(props) {
    const [recipes, setRecipes] = useState([])

    const getRecipes = async () => {
        await fetch("https://polar-reaches-30197.herokuapp.com/recipes")
          .then((response) => response.json())
          .then((data) => setRecipes(data))
          .catch((err) => {
            console.log(err);
            alert("Algo salio mal");
          });
      };

      console.log(recipes)
    
      /* List all recipes */
      useEffect(() => {
        getRecipes();
      }, []);

    const filter = (term) => {
        let result = recipes.filter((element) => {
            if(element.title.toString().toLowerCase().includes(props.search.toLowerCase())){
                return element;
            }
        })
    }
    return(
        <h1>Hola</h1>
    )
}

export default SearchBar;