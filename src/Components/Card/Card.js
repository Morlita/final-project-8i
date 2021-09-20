import foodpic3 from '../CarouselSlider/CarouselImg/foodpic (3).jpg'

function Card(props){
    
    return(
        <div className="card col-sm-3 col-md-4 border" >
            <img src={foodpic3} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text"> {props.time} - likes {props.likes}</p>
                <h5 className="card-title">{props.title}</h5>
            </div>
        </div>
        
    );
}

export default Card;