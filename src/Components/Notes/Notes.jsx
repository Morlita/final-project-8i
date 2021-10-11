import {React, useState, useEffect} from 'react'

function Notes({recipeId}) {

    const user = JSON.parse(localStorage.getItem("registerLogIn"));
    const tokenUser = JSON.parse(localStorage.getItem("userToken"));

    const [userFavorites, setUserFavorites] = useState([]);

    const getUser = async () => {
        if(user){
            await fetch(`http://polar-reaches-30197.herokuapp.com/user/${user.email}`, {
            headers: {
            'Content-Type': 'application/json',
            'x-access-token' : tokenUser
        }})
        .then((response) => response.json())
        .then((data) => setUserFavorites(data.myFavorites))
        .catch((err) => {
            console.log(err);
            alert("Algo salio mal");
        });
        }else{
            console.log("NO ESTA LOGUEADO")
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    const favorites = (element) => element._id === recipeId;
    const result = userFavorites.some(favorites)
    console.log("USER", result)

    console.log(favorites)
    //console.log("FAV", favorites && favorites.lenght)

    return(

        <textarea name="notes" cols="30" rows="10">Notas</textarea>
    )
}

export default Notes;