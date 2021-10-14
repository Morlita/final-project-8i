import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import MediumCard from '../MediumCard/MediumCard'

function DisplaySearchRecipes() {

    const location = useLocation();
    const { term } = location.state;
    const [results, setResults] = useState([])

    useEffect(() => {
        fetch(`https://polar-reaches-30197.herokuapp.com/recipes/search?search=${term}&field=title`)
        .then((response) => response.json())
        .then(data => setResults(data))
    }, [])


    return(
        <div className='container'>
            <div className="row p-3 text-center my-2">
                <h1>Todas nuestras recetas <span className='text-capitalize'>{term}</span></h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 my-2">
                {results && results.length === 0 ? 
                <div>
                    <h4>No tenemos ninguna receta con {term} por favor intente con otra palabra o subala usted</h4>
                </div>: 
                results.map(({ _id, title, time, img, likes }) => (
                    <MediumCard key={_id} id={_id} title={title} time={time} img={img} likes={likes} />
                ))}
            </div>
        </div>
    )
}

export default DisplaySearchRecipes;