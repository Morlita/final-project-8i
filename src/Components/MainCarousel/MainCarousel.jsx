import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import CarouselSlider from '../CarouselSlider/CarouselSlider'
import LikeImg from '../Navbar/Logo/heart-white.png'
import RecipeImg from '../Navbar/Logo/recipe-book.png'
import '../Buttons/Buttons.css'

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
    const filterByLikes = acceptedRecipes.filter(recipe => recipe.likes >= 5);

    return (
        <div className='container'>
            <div className="row carousel-row px-2">
                <div className="container py-4 px-5 carousel my-4 favs">
                    <h2 className="slider_title mt-1"><span ><img src={LikeImg} className='heart-car mx-1' alt="heart" /></span> Tentate con las recetas más votadas <span ><img src={LikeImg} className="heart-car mx-1" alt="heart" /></span></h2>
                    <CarouselSlider carouselArr={filterByLikes} />
                    <div className="p-1 my-2 d-grid col-md-5 mx-auto mt-4">
                        <Link to={{
                            pathname:'/displayfavs',
                            state: {filterByLikes: filterByLikes} 
                        }}
                            className="btn btn-danger rounded-pill" type='button'>Ver todas las más votadas</Link>
                    </div>
                </div>
            </div>
            <div className="row carousel-row px-2">
                <div className="container py-4 px-5 carousel my-4 all">
                    <h2 className="slider_title mt-1"><span ><img src={RecipeImg} className='heart-car mx-1' alt="heart" /></span> Y si buscas inspiración... aquí están todas las recetas!<span ><img src={RecipeImg} className='heart-car mx-1' alt="heart" /></span> </h2>
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
