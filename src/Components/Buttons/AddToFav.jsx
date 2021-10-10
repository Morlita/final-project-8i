import React from 'react'
import { useHistory } from "react-router-dom";


function AddToFav({recipeId}) {

    let history = useHistory();

    const user = JSON.parse(localStorage.getItem("registerLogIn"));
    const tokenUser = JSON.parse(localStorage.getItem("userToken"));
    const URL = process.env.REACT_APP_DB_URL + 'user/addToFavs';
    
    const handleAddToFav = async ()=> {
        if(!user){
            history.push("/login");
            alert("Inicie secion para dar guardar una receta");
        }else{
            await fetch( URL, {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token' : tokenUser
                },
                body: JSON.stringify({
                    recipeId: recipeId,
                    userId: user._id
                })
            });
        }
    }

    return (
        <div>
            <button type="button" className="btn rounded-pill btn-outline-danger m-1 shadow" onClick={handleAddToFav}><i className="bi bi-bookmark-heart"></i> <span className='d-none d-md-block'>Guardar</span></button> 
        </div>
    )
}

export default AddToFav

