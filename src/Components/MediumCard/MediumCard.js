import foodpic3 from '../CarouselSlider/CarouselImg/foodpic (3).jpg'
import { Link } from 'react-router-dom'

function MediumCard({ id, time, likes, title, img }) {

    return (

        <div className="card border-white" key={id}>
            <Link to={`/recipe/${id}`} className='text-decoration-none'>
            <img src={foodpic3} className="card-img-top" alt="dish presentation" />
            <div className="card-body">
                <div class="d-flex">
                    <p className="card-text mx-2"><span><i className="mb-1 bi bi-stopwatch"></i></span>{time}</p>
                    <p className="card-text mx-2"><span><i className="mb-1 bi bi-star"></i></span>{likes}</p>
                </div>
                <h4 className="card-title text-capitalize">{title}</h4>
            </div>
            </Link>
        </div>


    );
}

export default MediumCard;