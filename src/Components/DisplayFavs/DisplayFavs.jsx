import React from 'react'
import MediumCard from '../MediumCard/MediumCard'
import { useLocation } from 'react-router-dom'

function DisplayFavs() {

    const location = useLocation();
    const mostLiked = location.state.filterByLikes;


    return (
        <div className="container display-all">
            <div className="row p-3 text-center my-2">
                <h1 className='p-2 rounded'>Las más votadas</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-2">
                {mostLiked && mostLiked.map(({ _id, title, time, img, likes, category }) => (
                        <MediumCard key={_id} id={_id} title={title} time={time} img={img} likes={likes} category={category} />
                    ))}
            </div>
        </div>
    )
}

export default DisplayFavs
