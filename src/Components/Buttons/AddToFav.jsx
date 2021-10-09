import React from 'react'

function AddToFav({recipeId}) {

    const idLoli= '614669e60fab352db951c448';
    const URL = process.env.REACT_APP_DB_URL + 'user/addToFavs';
    
    const handleAddToFav = async ()=> {
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
    }

    return (
        <div>
            <button type="button" className="btn rounded-pill btn-outline-danger m-1 shadow" onClick={handleAddToFav}><i className="bi bi-bookmark-heart"></i> <span className='d-none d-md-block'>Guardar</span></button> 
        </div>
    )
}

export default AddToFav

