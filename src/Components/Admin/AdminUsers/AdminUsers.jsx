import React, { useState, useEffect } from "react";

function Admin() {  
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({
        name: "",
        lastName: "",
        email: [],
        password: "",
        role: "",
        myRecipes: undefined,
        myFavorites: [],
        notes: "",
        timeFreezer: "",
    });

    /* List all recipes */
    useEffect(() => {
        fetch('https://polar-reaches-30197.herokuapp.com/')
            .then(response => response.json())
            .then(data => setRecipes(data));

    }, []);

    
    const watchInput = (event) => {
        setRecipe({ ...recipe, [event.target.name]: event.target.value });
    };

    /*Add a new recipe */
    const add = () => {
        fetch('https://polar-reaches-30197.herokuapp.com/', {
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
                            <button className="btn btn-danger">Eliminar</button>
                            <button className="btn btn-secondary mx-3">Editar</button>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Admin;