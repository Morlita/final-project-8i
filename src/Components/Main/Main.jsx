import React, { useState, useEffect } from 'react'
import CarouselSlider from '../CarouselSlider/CarouselSlider'
import Categories from '../Categories/Categories'
import Tags from '../Tags/Tags'
import HeroSlider from '../UploadBanner/HeroSlider'
import "./Main.css"


function Main() {

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


    // tengo que pasarle la info a cada carousel con esta data, me falta lo de los que tienen más likes

    return (

        <div>
            <HeroSlider />
            <div className='container main-container'>
                <div className="row">
                    <Categories />
                </div>
                <div className="row pt-3 rounded tags pb-5">
                    <Tags />
                </div>
                <div className="row carousel-row">
                    <div className="container py-4 px-5 carousel my-4 favs">
                        <h2 className="slider_title mb-0">Estas son las más votadas de todos los tiempos!</h2>
                        <h3 className="text-center mb-3"><i class="bi bi-star"></i></h3>
                        <CarouselSlider carouselArr={recipes} />
                        <div className="p-1 my-2 d-grid col-4 mx-auto">
                            <button type="button" class="btn btn-danger rounded-pill">Ver todas las más votadas</button>
                        </div>
                    </div>
                </div>
                <div className="row carousel-row">
                    <div className="container py-4 px-5 carousel my-4 all">
                        <h2 className="slider_title mb-0">Y si buscas inspiración... aquí están todas las recetas!</h2>
                        <h3 className="text-center mb-3"><i class="bi bi-journal-bookmark"></i></h3>
                        <CarouselSlider carouselArr={recipes} />
                        <div className="p-1 my-2 d-grid col-4 mx-auto">
                            <button type="button" class="btn btn-danger rounded-pill">Ver todas las recetas</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main
