import React, { useState, useEffect } from 'react'
import MediumCard from '../MediumCard/MediumCard'
import './DisplayAllAcceptedRecipes.css'

function DisplayAllAcceptedRecipes() {
    
    const [allAcceptedRecipes, setAllAcceptedRecipes] = useState([])


    const getRecipes = async () => {
            const resp = await fetch(`https://polar-reaches-30197.herokuapp.com/recipes/`)
            const data = await resp.json();
            const randomRecipes = shuffleRecipes(data)
            setAllAcceptedRecipes(randomRecipes)
    }

    useEffect(() => {
        getRecipes();
    }, [])

    const shuffleRecipes = (array) => {
        let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    
    const acceptedRecipes = allAcceptedRecipes.filter( recipe => recipe.accepted === 'accepted')

    return (
        <div className="container display-all">
            <div className="row p-3 text-center my-2">
                <h1 className='p-2 rounded'>Todas nuestras recetas</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-2">
                {acceptedRecipes && acceptedRecipes.map(({ _id, title, time, img, likes, category }) => (
                        <MediumCard key={_id} id={_id} title={title} time={time} img={img} likes={likes} category={category} />
                    ))}
            </div>
        </div>
    )
}

export default DisplayAllAcceptedRecipes
