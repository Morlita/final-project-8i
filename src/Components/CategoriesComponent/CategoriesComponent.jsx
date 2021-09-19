import React, { useState, useEffect } from 'react'
import CarouselSlider from '../CarouselSlider/CarouselSlider'
import { useParams } from "react-router-dom";
import MediumCard from '../MediumCard/MediumCard'


function CategoriesComponent() {

    let { category } = useParams();
    console.log(useParams());


    const [categoryCards, setCategoryCards] = useState([]);

    const getRecipesByCategory = async () => {
        const resp = await fetch(`https://polar-reaches-30197.herokuapp.com/recipes/search?search=${category}&field=category`)
        const data = await resp.json();
        setCategoryCards(data)
    }
    useEffect(() => {
        getRecipesByCategory();
    }, [])


    return (
        <div className='container'>
            <div className="row p-3 text-center my-2">
                <h1>Todas nuestras recetas <span className='text-capitalize'>{category}</span></h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 my-2">
                {categoryCards && categoryCards.map(({ _id, title, time, img, likes }) => (
                    <MediumCard id={_id} title={title} time={time} img={img} likes={likes} />
                ))}
            </div>
            <div className="row">
                <div className="container my-3 mx-3 carousel">
                    <h3>Otras recetas { category }</h3>
                    <CarouselSlider carouselArr={categoryCards} />
                </div>

            </div>
        </div>
    )
}

export default CategoriesComponent