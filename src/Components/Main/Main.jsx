import React, { useState, useEffect } from 'react'
import CarouselSlider from '../CarouselSlider/CarouselSlider'
import Categories from '../Categories/Categories'
import Tags from '../Tags/Tags'
import UploadRecipeBanner from '../UploadBanner/UploadBanner'


function Main() {

    const [recipes, setRecipes] = useState([]);

    const getRecipes = async () => {
        try {
            const resp = await fetch(`https://polar-reaches-30197.herokuapp.com/recipes/`);
            const data = await resp.json();
            setRecipes(data);
                        
        } catch (error) {
            console.log(error);
        }
    }
    
    

    useEffect(() => {
        getRecipes()
       
    }, [])
    
 
    // tengo que pasarle la info a cada carousel con esta data

    return (
        <div className='container'>
            <div className="row">
                <div className="h-75 d-inline-block">
                    <UploadRecipeBanner />
                </div>
            </div>
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
                            <CarouselSlider />
                        </div>
                    </div>
                    <div className="row">
                        <div className="container my-3 mx-3 carousel">
                            <h2 className="slider_title">Inspirate con nuestras recetas!</h2>
                            <CarouselSlider />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
