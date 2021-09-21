import React, { useState, useEffect } from "react";
import MediumCard from "../Card/MediumCard";

function CategoriesCardComponent() {

    const [cards, setCards] = useState([])

    useEffect(() => {

        fetch("https://polar-reaches-30197.herokuapp.com/recipes/", { // se ejecuta 2 veces
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data) // me trae data 2 veces
                setCards(data) // lo setea como objeto vacio
            })
            .catch(err => { console.log(err) })
    }, [])
    
    return (

        <div className='container'>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                {cards && cards.map(({_id, title, time, img, likes}) => (
                    <MediumCard id={_id} title={title} time={time} img={img} likes={likes} />
                ))}
            </div>

        </div>


    );


}


export default CategoriesCardComponent;