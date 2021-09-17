function Card(props){
    return(
        <div className="card col-sm-3 col-md-4 border border-white" style={{margin: "0px 0px 5px 0px",}}>
            <img src={props.img} class="card-img-top" alt="..." />
            <div className="card-body">
                <p class="card-text">{props.tiempo} - {props.likes}</p>
                <h5 class="card-title">{props.titulo}</h5>
            </div>
        </div>
    );
}

export default Card;