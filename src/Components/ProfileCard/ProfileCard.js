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
                <table class="table container">
                    <thead>
                        <tr className="row">
                            <th className="col-8">Nombre</th>
                            <th className="col-4 d-flex flex-nowrap">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.recipes && recipes.map((item, index) => (
                            <tr className="row" key={index}>
                                <td className="col-8">{item.title.substr(-20, 20)}...</td>
                                <td className="col-4 d-flex flex-nowrap">{item.accepted}</td>
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