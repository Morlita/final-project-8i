function ProfileCard(){

    return(
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src="https://previews.123rf.com/images/yupiramos/yupiramos1609/yupiramos160918229/62774255-trabajador-chef-de-dise%C3%B1o-de-iconos-ilustraci%C3%B3n-vectorial-car%C3%A1cter-avatar.jpg" className="img-fluid rounded-start" alt="..." style={{height: "250px"}}/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h3 className="card-title">santiago jimenez montilla</h3>
                    <p className="card-text ">recetas (3)</p>
                    <p className="card-text ">favoritos (5)</p>
                    <p className="card-text ">comentarios (2)</p>
                    {/* <p className="card-text text-center"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard