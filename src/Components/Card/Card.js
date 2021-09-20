function Card(props){
    
    return(
        <div className="card col-sm-3 col-md-4 border border-white" >
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text"> {props.time} - likes {props.likes}</p>
                <h5 className="card-title">{props.title}</h5>
            </div>
        </div>
        
    );
}

export default Card;