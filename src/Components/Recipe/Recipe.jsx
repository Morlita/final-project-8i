import React, { useState, useEffect } from 'react'
import CarouselSlider from '../CarouselSlider/CarouselSlider'
import foodpic1 from '../CarouselSlider/CarouselImg/foodpic (1).jpg'
import './Recipe.css'

function Recipe() {
    

    const [recipe, setRecipe] = useState({})

    const idURL = window.location.pathname.split("/").pop();

    const getRecipes = async ()=> {
        await fetch(`https://polar-reaches-30197.herokuapp.com/recipes/${idURL}`)
            .then(response=> response.json())
            .then(data=> setRecipe(data))
            .catch(err => {console.log(err)})
    }

    useEffect(()=> {
        getRecipes();
    }, [])

    const {category, createdAt, img, ingredients, likes, otherImgs, steps, tags, time, timeFreezer, timeFridge, title, updatedAt, v , id} = recipe;

    console.log('ingr:', ingredients)

    return (
        <div className='container recipe-component py-2'>
            <article className='container'>
                <div className="row  py-3 grid">
                    <div className="card border-0 item">
                        <img src={foodpic1} className='rounded' alt="" />
                        <h1 className="h3 label">{title} <span className='float-end mx-1'><i class="bi bi-alarm p-1"></i> {likes} likes</span> <span className='float-end'><i class="bi bi-star p-1"></i> {time} </span> </h1>                        
                    </div>
                </div>
                <div className="row">
                    <div className="col col-md-4">
                        <h4 className='p-2 ms-2'>Ingredientes</h4>
                        <ul className='py-2'>
                            {ingredients && ingredients.map((ingr, index)=> (
                                <li key={index}>{ingr} <span className='float-end'>100 grs.</span> </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-1 vl d-sm-none d-md-block"></div>
                    <div className="col col-md-7">
                        <h4 className='p-2 ms-2'>Preparación</h4>
                        <ol className='py-2'>
                            {steps && steps.map((step, index)=> (
                                <li key={index}>{step}</li>
                            ))}                            
                        </ol>
                    </div>
                </div>
            </article>
            <hr />
            <article className='container'>
                <h6> <span></span>Conservación en freezer: <span>{timeFreezer}</span></h6>
                <h6> <span></span>Conservación en heladera: <span>{timeFridge}</span> </h6>
                <h6> <span></span>Subido el <span>{createdAt}</span> </h6>
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
