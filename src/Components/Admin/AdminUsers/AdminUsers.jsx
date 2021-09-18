import React, { useState, useEffect } from "react";

function AdminUsers() {  
    const [users, setUsers] = useState([]);

    /* List all recipes */
    useEffect(() => {
        fetch('https://polar-reaches-30197.herokuapp.com/user')
            .then(response => response.json())
            .then((data) => {
                console.log("USUARIOS ", data)
                setUsers(data)
            })
    }, []);

    return(
        <div>
            <h2>Usuarios</h2>
            {/*TABLA */}
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contraseña</th>
                    </tr>
                </thead>
                <tbody>
                    {/*recipes.map((item, index) => (
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
                    ))*/}
                </tbody>
            </table>
        </div>
    )
}

export default AdminUsers;