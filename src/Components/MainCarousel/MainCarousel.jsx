import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import CarouselSlider from '../CarouselSlider/CarouselSlider'

function MainCarousel() {

    const [recipes, setRecipes] = useState([]);

    const getRecipes = async () => {
        try {
            const resp = await fetch(`https://polar-reaches-30197.herokuapp.com/recipes/`);
            const data = await resp.json();
            const randomRecipes = shuffleRecipes(data)
            setRecipes(randomRecipes);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getRecipes()
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

    const acceptedRecipes = recipes.filter(recipe => recipe.accepted === 'accepted')
    const filterByLikes = acceptedRecipes.filter(recipe => recipe.likes >= 2);

    return (
        <div className='container'>
            <div className="row carousel-row px-2">
                <div className="container py-4 px-5 carousel my-4 favs">
                    <h2 className="slider_title mb-0">Tentate con las recetas más votadas</h2>
                    <h3 className="text-center mb-3"><i className="bi bi-heart"></i></h3>
                    <CarouselSlider carouselArr={filterByLikes} />
                    <div className="p-1 my-2 d-grid col-md-5 mx-auto mt-4">
                        <button type="button" className="btn btn-danger rounded-pill">Ver todas las más votadas</button>
                    </div>
                </div>
            </div>
            <div className="row carousel-row px-2">
                <div className="container py-4 px-5 carousel my-4 all">
                    <h2 className="slider_title mb-0">Y si buscas inspiración... aquí están todas las recetas!</h2>
                    <h3 className="text-center mb-3"><i className="bi bi-journal-bookmark"></i></h3>
                    <CarouselSlider carouselArr={acceptedRecipes} />
                    <div className="p-1 my-2 d-grid col-md-5 mx-auto mt-4">
                        <Link to='/displayall' className='btn btn-danger rounded-pill' type='button'>Ver todas las recetas</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCarousel
