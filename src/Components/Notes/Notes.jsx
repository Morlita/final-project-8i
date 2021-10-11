import {React, useState, useEffect} from 'react'

function Notes({recipeId, reloadFlag, setReloadFlag}) {

    const user = JSON.parse(localStorage.getItem("registerLogIn"));
    const tokenUser = JSON.parse(localStorage.getItem("userToken"));

    const [userFavorites, setUserFavorites] = useState([]);

    const [note, setNote] = useState({
        notes: ""
    });

    const getUser = async () => {
        if(user){
            await fetch(`http://polar-reaches-30197.herokuapp.com/user/${user.email}`, {
            headers: {
            'Content-Type': 'application/json',
            'x-access-token' : tokenUser
        }})
        .then((response) => response.json())
        .then((data) => {
            setUserFavorites(data.myFavorites)
            console.log(data)
        })
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
    }, [reloadFlag])

    const favorites = (element) => element._id === recipeId;
    const result = userFavorites.some(favorites)

    const setNoteObj = (val) => {
        setNote(val.target.value)
        console.log(note);
    }

    const addNote = async () => {
        if(note === "" || note === null || note === " "){
            alert("Realice un comentario antes")
        }else {
            await fetch( "https://polar-reaches-30197.herokuapp.com/notes", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'x-access-token' : tokenUser
            },
            body: JSON.stringify({
                content: note,
                recipe: recipeId,
                user: user._id
            })
        })
        .then((response) => setReloadFlag(response.json()))
        .then(data => {
            alert("Nota Agregada")
            setNote({
                notes: ""
            })
        })}
    }

    return(
        <div>
            {result ? 
            <div>
                <textarea name="notes" value={note.notes} cols="30" rows="10" onChange={setNoteObj} maxLength="500" placeholder="Tu Nota"></textarea>
                <button type="button" class="btn btn-primary" onClick={addNote}>Agregar</button>
            </div>
            : false}
        </div>
    )
}

export default Notes;