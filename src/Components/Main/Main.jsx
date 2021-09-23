import React, { useState, useEffect } from 'react'
import CarouselSlider from '../CarouselSlider/CarouselSlider'
import Categories from '../Categories/Categories'
import Tags from '../Tags/Tags'
import HeroSlider from '../UploadBanner/HeroSlider'


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
            <div className='container'>
                <div className="row row-cols-1 row-cols-md-4">
                    <div className="col-md-3">
                        <Tags />
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <Categories />
                        </div>
                        <div className="row">
                            <div className="container my-3 mx-3 carousel">
                                <h2 className="slider_title">Recetas favoritas de todos los tiempos</h2>
                                <CarouselSlider carouselArr={recipes} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="container my-3 mx-3 carousel">
                                <h2 className="slider_title">Inspirate con nuestras recetas!</h2>
                                <CarouselSlider carouselArr={recipes} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
