import React, {useState, useEffect} from 'react'

function Like({recipeId, reloadFlag, setReloadFlag}) {

    const idLoli= '614669e60fab352db951c448';
    const URL = process.env.REACT_APP_DB_URL + 'user/like';
    
    const [hasLiked, setHasLiked] = useState(false)
    
    const getRecipe = async () => {
        
        try {

            const resp = await fetch(`https://polar-reaches-30197.herokuapp.com/recipes/${recipeId}`)
            const data = await resp.json();
            const usersLikes = await data.usersLikes.find(id => id === idLoli);
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
        await fetch( URL, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'x-access-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzIwMDQ5MzYsImV4cCI6MTYzMjA5MTMzNn0.2jb_fc6bNt9XEG5LTjr_oep0eXQyzlyEEXgqm0HWfxU'
            },
            body: JSON.stringify({
                recipeId: recipeId,
                userId: idLoli
            })
        });

        setHasLiked(!hasLiked)

        if(setReloadFlag){
            setReloadFlag(!reloadFlag)
        }
    }

    return (
        
        <div>
            <button type="button" className={`btn rounded-pill m-1 shadow ${ hasLiked? 'btn-danger': 'btn-outline-danger'}`} onClick={handleLike}><i className="bi bi-heart"></i> <span className='d-none d-md-block'>Me gusta!</span></button>
        </div>
    )
}

export default Like
