import '../UserProfile/UserProfile.css'
import Chef from '../Img/chef.png'

function ProfileCard(props){

    return(
        <div className="card mb-3 profile-card p-3 w-75 mx-auto">
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img src={Chef} className="img-fluid rounded " alt="avatar"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h2 className="card-title h1">{props.name} {props.lastName}</h2>
                    <p className="card-text ">Mis recetas ({props.numeroRecetas})</p>
                    <p className="card-text ">Mis favoritos ({props.numeroFav})</p>
                    <p className="card-text ">Mis notas ({props.notas})</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard