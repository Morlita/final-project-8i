import React, { useState, useEffect } from 'react'
import MediumCard from '../MediumCard/MediumCard'

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
        <div>
            {acceptedRecipes && acceptedRecipes.map(({ _id, title, time, img, likes }) => (
                    <MediumCard key={_id} id={_id} title={title} time={time} img={img} likes={likes} />
                ))}
        </div>
    )
}

export default DisplayAllAcceptedRecipes
