import React, { useState, useEffect } from "react";

function AdminUsers() {  
    const [users, setUsers] = useState([]);
    const [fetchFlag, setFetchFlag] = useState('');

    const getUsers = async () => {
        await fetch('http://polar-reaches-30197.herokuapp.com/user', {
            headers:{
                "Content-Type": "application/json",
                "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDE4MTFkZWVhYTQwODAzMjIyOTAxZiIsImlhdCI6MTYzMTY4OTMwMywiZXhwIjoxNjMxNzc1NzAzfQ.zYvdpjTq4wJrul5dPEKP43Hrd35JsJYjpNWhfLcj4BQ"
            }})
        .then(response => response.json())
        .then(data  => setUsers(data))
        .catch(err => alert('Algo salio mal', err))
    }

    console.log(users)
    
    /* List all users */
    useEffect(() => {
        getUsers();
    }, [fetchFlag]);

    /*Delete*/
    const remove = (index) => {
        fetch(`https://polar-reaches-30197.herokuapp.com/user/${users[index]._id}`, {
            method: 'DELETE',
            body: JSON.stringify(null) 
        })
            .then(response => setFetchFlag(response.json()));
    };

    return(
        <div>
            <h2>Usuarios</h2>
            {/*TABLA */}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col" className="d-none d-sm-table-cell">Email</th>
                        <th scope="col">Rol</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.lastName}</td>
                            <td className="d-none d-sm-table-cell">{item.email}</td>
                            <td>{item.role}</td>
                            <td>
                                <button className="btn btn-danger w-20 mb-1" onClick={() => remove(index)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
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

export default AdminUsers;