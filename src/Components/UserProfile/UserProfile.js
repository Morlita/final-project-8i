import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import ProfileCard from "../ProfileCard/ProfileCard";
import Tags from "../Tags/Tags";

function UserProfile(){

    let history = useHistory();


    const user = JSON.parse(localStorage.getItem("registerLogIn"));


    const [recipes, setRecipes] = useState([]);
    
    const getRecipes = async () => {
        try {
            const resp = await fetch(`https://polar-reaches-30197.herokuapp.com/recipes/`);
            const data = await resp.json();
            const randomRecipes = shuffleRecipes(data)
            setRecipes(randomRecipes);
                        
        } catch (error) {
            console.log(error);
        }
    }   

    useEffect(() => {
        if (!user) {
            history.push("/login");
            alert("Inicie secion para visualizar esta Pagina");
        }else{
            getRecipes()       
        }
    }, [])

    const shuffleRecipes = (array) => {
        let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }


    return (


        
        <div className='container'>
            <div className="row">
                <ProfileCard />
            </div>
            <div className="row row-cols-1 row-cols-md-4">
                {/* <div className="col-md-3">
                    <Tags />
                </div> */}
                <div className="col-md-9">
                    <div className="row">
                        <div className="container my-3 mx-3 carousel">
                            <h2 className="slider_title">mis recetas</h2>
                            <CarouselSlider carouselArr={recipes}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container my-3 mx-3 carousel">
                            <h2 className="slider_title">recetas favoritas</h2>
                            <CarouselSlider carouselArr={recipes}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default UserProfile