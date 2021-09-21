import React, {useState, useEffect} from 'react'
import CarouselSlider from '../CarouselSlider/CarouselSlider'
import { useParams } from "react-router-dom";


function CategoriesComponent() {

    let { category } = useParams();
    console.log(useParams());


    const [categoryCards, setCategoryCards] = useState([]);

    const getRecipesByCategory = async ()=> {
        const resp = await fetch(`https://polar-reaches-30197.herokuapp.com/recipes/search?search=${category}&field=category`)
        const data = await resp.json();
        setCategoryCards(data)
    }
    useEffect(() => {
        getRecipesByCategory();
    }, [])
    
    console.log('arr', categoryCards);

    return (
        <div className='container'>
            <div className="row">
                <h1>Todas nuestras recetas <span>{}</span></h1>
            </div>
            <div className="row">
                Ca
            </div>
            <div className="row">
                <h3>Otras recetas {}</h3>
                <CarouselSlider />
            </div>
        </div>
    )
}

export default CategoriesComponent
