import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";


function Like({recipeId, reloadFlag, setReloadFlag}) {

    let history = useHistory();


    const user = JSON.parse(localStorage.getItem("registerLogIn"));
    const tokenUser = JSON.parse(localStorage.getItem("userToken"));
    const URL = process.env.REACT_APP_DB_URL + 'user/like';
    
    const [hasLiked, setHasLiked] = useState(false)
    
    const getRecipe = async () => {
        
        try {

            const resp = await fetch(`https://polar-reaches-30197.herokuapp.com/recipes/${recipeId}`)
            const data = await resp.json();
            const usersLikes = await data.usersLikes.find(like => like._id === user._id);
            if(usersLikes){
                setHasLiked(true)
            }

        } catch (error) {
            console.log(error);
        }       
    }

    useEffect(() => {

        getRecipe();
        setHasLiked(false)

    }, [reloadFlag])   

    const handleLike = async ()=> {
        if(!user){
            history.push("/login");
            alert("Inicie secion para dar Me Gusta");
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
    
            setHasLiked(!hasLiked)
    
            if(setReloadFlag){
                setReloadFlag(!reloadFlag)
            }
        }
    }

    return (
        
        <div>
            <button type="button" className={`btn rounded-pill m-1 shadow ${ hasLiked? 'btn-danger': 'btn-outline-danger'}`} onClick={handleLike}><i className="bi bi-heart"></i> <span className='d-none d-md-block'>Me gusta!</span></button>
        </div>
    )
}

export default Like
