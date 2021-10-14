import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import CarouselSlider from '../CarouselSlider/CarouselSlider'
import './Recipe.css'
import Share from '../Buttons/Share'
import Like from '../Buttons/Like'
import AddToFav from '../Buttons/AddToFav'
import AddComment from '../AddComment/AddComment'
import Notes from "../Notes/Notes"
import moment from 'moment'


function Recipe() {

    const [recipe, setRecipe] = useState({})
    
    const [reloadFlag, setReloadFlag] = useState(false); // investigar useMemo o useCallback

    const location = useLocation();

    const idURL = window.location.pathname.split("/").pop();        

    const getRecipe = async () => {

        await fetch(`https://polar-reaches-30197.herokuapp.com/recipes/${idURL}`)
            .then(response => response.json())
            .then(data => setRecipe(data))
            .catch(err => { console.log(err) })
    }

    useEffect(() => {
        getRecipe();
    }, [reloadFlag, location])

    const { category, createdAt, img, ingredients, likes, otherImgs, steps, tags, time, timeFreezer, timeFridge, title, updatedAt, _id, user} = recipe;
    console.log(recipe)
    // USER viene el id del usuario, tengo que hacer un get de usuarios para saber el nombre...

    return (
        <div className='container recipe-component py-2 mt-4 rounded'>
            <article className='container'>
                <div className="row p-2">
                    <div className="social d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className='me-auto'>
                            <span><i className="bi bi-person-circle fs-4 m-1"></i></span>
                            By <span className='fst-italic'>{user && user.name} {user && user.lastName}</span>
                        </h6>
                        <Share title={title}/>
                        <Like recipeId={idURL} reloadFlag={reloadFlag} setReloadFlag={setReloadFlag}/>
                        <AddToFav recipeId={idURL}/>
                    </div>
                </div>
                <div className="row py-3 grid">
                    <div className="card border-0 item">
                        <img src={img} className='rounded' alt="Recipe" />
                        <h1 className="h3 label">{title} <span className='float-end mx-1'><i className="bi bi-alarm p-1"></i> {time}</span> <span className='float-end'><i className="bi bi-heart p-1"></i> {likes}</span> </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-md-4">
                        <h4 className='p-2 ms-2'>Ingredientes</h4>
                        <ul className='py-2'>
                            {ingredients && ingredients.map(({ingredient, quantity, unit}, index) => (
                                <li key={index}>{ingredient} <span className='float-end'>{quantity} {unit}.</span> </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-1 vl d-sm-none d-md-block"></div>
                    <div className="col col-md-7">
                        <h4 className='p-2 ms-2'>Preparación</h4>
                        <ol className='py-2'>
                            {steps && steps.map((step, index) => (
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
                <h6> <span></span>Subido el <span>{moment(createdAt).format('DD/MM/YYYY')}</span> </h6>
            </article>
            <hr />
            <AddComment recipeId={idURL} reloadFlag={reloadFlag} setReloadFlag={setReloadFlag}/>
            <hr />
            <Notes recipeId={idURL} reloadFlag={reloadFlag} setReloadFlag={setReloadFlag}/>
            <div className="container">
                <h3 className='p-2'>También te puede interesar...</h3>
                <CarouselSlider reloadFlag={reloadFlag} setReloadFlag={setReloadFlag} />
            </div>
        </div>
    )
}

export default Recipe
