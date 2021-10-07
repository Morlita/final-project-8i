function ProfileCard(props){

    return(
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src="https://trello.com/1/cards/6132b0dce9417a02fc485e4f/attachments/614ba89423e8142e46e0b335/download/Captura_de_pantalla_2021-09-22_190405.jpg" className="img-fluid rounded-start" alt="..." style={{height: "250px"}}/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h3 className="card-title">{props.name} {props.lastName}</h3>
                    <p className="card-text ">recetas (3)</p>
                    <p className="card-text ">favoritos (5)</p>
                    <p className="card-text ">comentarios (2)</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard