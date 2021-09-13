function Card(props){
    return(
        <div className="card col-sm-3 col-md-4 border border-white" style={{margin: "0px 0px 5px 0px",}}>
           {/*  <img src={props.img} class="card-img-top" alt="..." /> */}
            <img src=" https://www.westcentralfoodservice.com/wp-content/uploads/2019/04/5-food-trends-2019-no-title.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                {/* <p class="card-text">{props.tiempo} - {props.likes}</p> */}
                <p className="card-text"> 10 min - 4 likes</p>
                {/* <h5 class="card-title">{props.titulo}</h5> */}
                <h5 className="card-title"> sanguchito</h5>
            </div>
        </div>
    );
}

export default Card;