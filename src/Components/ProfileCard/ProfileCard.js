import '../UserProfile/UserProfile.css'
import Chef from '../Img/chef.png'

function ProfileCard(props){

    console.log(props.recipes)

    const recipes = props.recipes.filter(recipe => recipe.accepted === "pending" || recipe.accepted === "rejected");

    return(
        <div className="card mb-3 profile-card p-3 w-75 mx-auto">
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img src={Chef} className="img-fluid rounded " alt="avatar"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h2 className="card-title h1">{props.name} {props.lastName}</h2>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.recipes && recipes.map((item, index) => (
                            <tr className="d-flex flex-wrap">
                                <td>{item.title}</td>
                                <td>{item.accepted}</td>
                            </tr>     
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard