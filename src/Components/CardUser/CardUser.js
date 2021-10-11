import { Link } from "react-router-dom";
function cardUser(props){
    return(
    <div className="container">
            <div className="card">
                    <img src="https://bluerestobar.com/wp-content/uploads/sites/18/2020/07/Triple-Cheese-Burger-5.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">{props.title}</p>
                        <p className="card-text">{props.category}</p>
                    </div>
            </div>
    </div>
    )
   
}

export default cardUser;