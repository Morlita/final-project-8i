import { Link } from 'react-router-dom'
import '../DisplayAllAcceptedRecipes/DisplayAllAcceptedRecipes.css'
import LikeImg from '../Navbar/Logo/heart.png'
import ClockImg from '../Navbar/Logo/clock-black.png'
import '../Buttons/Buttons.css'

function MediumCard({ id, time, likes, title, img , category}) {

    return (

        <div className="col">
            <div className="card shadow-lg h-100" key={id}>
                <Link to={`/recipe/${id}`} className='text-decoration-none'>
                <img src={img} className="card-img-top medium-card-top" alt="dish presentation" />
                <div className="card-body text-center d-flex flex-column justify-content-between">
                    <h4 className="card-title text-capitalize pb-3 title-rec">{title}</h4>
                    <h5 className="card-title pb-3 text-muted title-rec">{category}</h5>
                    <div className="d-flex justify-content-center flex-column">
                        <p className="card-text mx-2"><img src={ClockImg} className='like-png' alt="likes" />{time}</p>
                        <p className="card-text mx-2"><img src={LikeImg} className='like-png' alt="likes" />{likes}</p>
                    </div>
                </div>
                </Link>
            </div>
        </div>


    );
}

export default MediumCard;