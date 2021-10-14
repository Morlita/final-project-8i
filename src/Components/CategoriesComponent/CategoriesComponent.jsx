import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import MediumCard from '../MediumCard/MediumCard'
import '../DisplayAllAcceptedRecipes/DisplayAllAcceptedRecipes.css'


function CategoriesComponent() {

    let { category } = useParams();


    const [categoryCards, setCategoryCards] = useState([]);

    const getRecipesByCategory = async () => {
        const resp = await fetch(`https://polar-reaches-30197.herokuapp.com/recipes/search?search=${category}&field=category`)
        const data = await resp.json();
        setCategoryCards(data)
    }
    useEffect(() => {
        getRecipesByCategory();
    }, [category])

    const acceptedRecipes = categoryCards.filter( recipe => recipe.accepted === 'accepted')


    return (
        <div className='container'>
            <div className="row p-3 text-center my-2">
                <h1 className='display-all'>Todas nuestras recetas <span className='text-capitalize'>{category}</span></h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 my-2">
                {acceptedRecipes && acceptedRecipes.map(({ _id, title, time, img, likes }) => (
                    <MediumCard key={_id} id={_id} title={title} time={time} img={img} likes={likes} />
                ))}
            </div>
        </div>
    )
}

export default CategoriesComponent
