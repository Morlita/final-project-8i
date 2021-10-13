import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import MediumCard from '../MediumCard/MediumCard'

function DisplayRecipes() {

    const location = useLocation();
    const { tags } = location.state;
    const checked = tags.filter(tag => tag.checked === true).map(tag => tag._id);
    const dataTags = JSON.stringify({tags: checked});
    const [recipes, setRecipes] = useState([]);

    const getRecipes = async () => {
        if (checked.length > 0) {
            const resp = await fetch(`https://polar-reaches-30197.herokuapp.com/recipes/tag`, {   
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },             
                method: "POST",
                body: dataTags
            })
            const data = await resp.json();
            setRecipes(data)
        }
        else {
            const resp = await fetch(`https://polar-reaches-30197.herokuapp.com/recipes/`)
            const data = await resp.json();
            setRecipes(data)
        }

    }

    useEffect(() => {
        getRecipes();
    }, [])
    
    const acceptedRecipes = recipes.filter( recipe => recipe.accepted === 'accepted')
  

    return (
        <div className='container'>
            <div className="row p-3 text-center my-2">
                <h1>Todas nuestras recetas <span className='text-capitalize'>{recipes.name}</span></h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 my-2">
                {acceptedRecipes && acceptedRecipes.map(({ _id, title, time, img, likes }) => (
                    <MediumCard key={_id} id={_id} title={title} time={time} img={img} likes={likes} />
                ))}
            </div>
        </div>
    )
}

export default DisplayRecipes
