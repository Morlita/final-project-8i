import React, { useState, useEffect } from 'react'
import CarouselSlider from '../CarouselSlider/CarouselSlider'
import foodpic1 from '../CarouselSlider/CarouselImg/foodpic (1).jpg'
import './Recipe.css'

function Recipe( props ) {
    // así o paso el id en la ruta??

    const [recipe, setRecipe] = useState({})

    useEffect(()=> {
        fetch(`http://localhost:5000/recipes/${props.id}`)
            .then(response=> response.json())
            .then(data=> setRecipe(data))
            .catch(err => {console.log(err)})
    }, [])

    // recipe.img, recipe.name, etc

    return (
        <div className='container recipe-component py-2'>
            <article className='container'>
                <div className="row  py-3">
                    <div className="card border-0">
                        <img src={foodpic1} className='rounded' alt="" />
                        <div className="card-img-overlay d-flex align-items-end ms-3">
                            <h1 className="h3">Galletas de Chocolate <span>5 likes</span> <span>20-25 minutos</span> </h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-md-4">
                        <h4 className='p-2 ms-2'>Ingredientes</h4>
                        <ul className='py-2'>
                            <li>Manteca <span className='float-end'>100 grs.</span> </li>
                            <li>Harina <span className='float-end'>150 grs.</span> </li>
                            <li>Azúcar <span className='float-end'>50 grs.</span> </li>
                            <li>Chips de chocolate <span className='float-end'>100 grs.</span> </li>
                        </ul>
                    </div>
                    <div className="col-md-1 vl d-sm-none d-md-block"></div>
                    <div className="col col-md-7">
                        <h4 className='p-2 ms-2'>Preparación</h4>
                        <ol className='py-2'>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto libero dolore harum excepturi magni culpa rerum ipsam et ea, aut maxime eos autem quibusdam numquam possimus quae corporis a consequuntur!</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto libero dolore harum excepturi magni culpa rerum ipsam et ea, aut maxime eos autem quibusdam numquam possimus quae corporis a consequuntur!</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto libero dolore harum excepturi magni culpa rerum ipsam et ea, aut maxime eos autem quibusdam numquam possimus quae corporis a consequuntur!</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto libero dolore harum excepturi magni culpa rerum ipsam et ea, aut maxime eos autem quibusdam numquam possimus quae corporis a consequuntur!</li>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto libero dolore harum excepturi magni culpa rerum ipsam et ea, aut maxime eos autem quibusdam numquam possimus quae corporis a consequuntur!</li>
                        </ol>
                    </div>
                </div>
            </article>
            <hr />
            <div className="container">
                <h3 className='p-2'>También te puede interesar...</h3>
                <CarouselSlider />
            </div>
        </div>
    )
}

export default Recipe
