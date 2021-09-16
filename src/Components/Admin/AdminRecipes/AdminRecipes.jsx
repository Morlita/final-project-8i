import React, { useState, useEffect } from "react";

function Admin() {  
    const [recipes, setRecipes] = useState([]);
    const [recipe, setRecipe] = useState({
        title: "",
        img: "",
        ingredients: [],
        category: "",
        time: "",
        likes: undefined,
        steps: [],
        timeFridge: "",
        timeFreezer: "",
    });

    /* List all recipes */
    useEffect(() => {
        fetch('https://polar-reaches-30197.herokuapp.com/recipes')
            .then(response => response.json())
            .then(data => setRecipes(data))
            .then(console.log(recipes));
    }, []);

    
    const watchInput = (event) => {
        setRecipe({ ...recipe, [event.target.name]: event.target.value });
    };

    /*Add a new recipe */
    const add = () => {
        fetch('https://polar-reaches-30197.herokuapp.com/recipes', {
         headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(recipe)
        })
        .then(response => response.json())
        .then(newData => {
            setRecipes([...recipes, newData]);
            setRecipe({
                title: "",
                img: "",
                ingredients: [],
                category: "",
                time: "",
                likes: "",
                steps: [],
                timeFridge: "",
                timeFreezer: "",
            });
        })
    };

    return(
        <div>
            <h2>Recetas</h2>

            {/*FORM*/}
            <div className="row">
                <form className="d-flex flex-column align-items-center form-contact justify-content-center">

                    <label htmlFor="" >Titulo</label>
                    <input type="text" name="title" className="w-50" value={recipe.title} onChange={watchInput}/>

                    <label htmlFor="" >Img</label>
                    <input type="text" name="img" className="w-50" value={recipe.img} onChange={watchInput}/>

                    <label htmlFor="" >Ingredientes</label>
                    <input type="text" name="ingredients" className="w-50" value={recipe.ingredients} onChange={watchInput}/>

                    <label htmlFor="" >Categoria</label>
                    <input type="text" name="category" className="w-50" value={recipe.category} onChange={watchInput}/>

                    <label htmlFor="" >Tiempo</label>
                    <input type="text" name="time" className="w-50" value={recipe.time} onChange={watchInput}/>

                    <label htmlFor="" >Likes</label>
                    <input type="text" name="likes" className="w-50" value={recipe.likes} onChange={watchInput}/>

                    <label htmlFor="" >Pasos</label>
                    <input type="text" name="steps" className="w-50" value={recipe.steps} onChange={watchInput}/>

                    <label htmlFor="" >Tiempo Heladera</label>
                    <input type="text" name="timeFridge" className="w-50" value={recipe.timeFridge} onChange={watchInput}/>

                    <label htmlFor="" >Tiempo Freezer</label>
                    <input type="text" name="timeFreezer" className="w-50" value={recipe.timeFreezer} onChange={watchInput}/>

                    <a className="btn btn-primary w-25 mt-3 mb-5" onClick={() => add}>Add</a>
                </form>
            </div>

            {/*TABLA */}
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Titulo</th>
                    <th scope="col">Img</th>
                    <th scope="col">Ing</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Tiempo Preparacion</th>
                    <th scope="col">Likes</th>
                    <th scope="col">Pasos</th>
                    <th scope="col">Tiempo Heladera</th>
                    <th scope="col">Tiempo Freezer</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map((item, index) => (
                        <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.img}</td>
                        <td>{item.ingredients}</td>
                        <td>{item.category}</td>
                        <td>{item.time}</td>
                        <td>{item.likes}</td>
                        <td>{item.steps}</td>
                        <td>{item.timeFridge}</td>
                        <td>{item.timeFreezer}</td>
                        <td>
                            <button className="btn btn-danger w-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>
                            </button>
                            <button className="btn btn-secondary w-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
                                </svg>
                            </button>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Admin;