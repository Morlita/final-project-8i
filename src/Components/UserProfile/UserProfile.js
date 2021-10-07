import React, {useState, useEffect} from "react";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import ProfileCard from "../ProfileCard/ProfileCard";
import Tags from "../Tags/Tags";

function UserProfile(){

    const loggedUser = JSON.parse(localStorage.getItem("logedUser"));
    const loggedToken = JSON.parse(localStorage.getItem("registerLogIn")).token;

    const [profile, setProfile] = useState({});

    const [tiempoCumplido, setTiempoCumplido] = useState(false);

    const user = async()=>{
        try{
          let resp = await fetch("https://polar-reaches-30197.herokuapp.com/user/"+loggedUser, {
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json",
                "x-access-token": loggedToken
                }
            });
            let data = await resp.json();

            setProfile(data)

        }
        catch (error) {
            console.log(error);
        }
       
    }

    useEffect(()=>{
        user()
        console.log(profile)
    },[])

     

if(!!Object.keys(profile).length && !profile.message){

    return (
        
        
        <div className='container'>
            {console.log(!!Object.keys(profile).length || !profile.message)}
            <div className="row">
             {profile.name && profile.lastName?<ProfileCard name={profile.name} lastName={profile.lastName}/> :null}
            </div>
            {console.log(profile)}
            <div className="row row-cols-1 row-cols-md-4">
                <div className="col-md-3">
                    <Tags />
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div className="container my-3 mx-3 carousel">
                            <h2 className="slider_title">mis recetas</h2>
                            <CarouselSlider carouselArr={profile.myRecipes}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container my-3 mx-3 carousel">
                            <h2 className="slider_title">recetas favoritas</h2>
                            <CarouselSlider carouselArr={profile.myFavorites}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
else{

    setTimeout(() => {
        setTiempoCumplido(true)
    }, 3000);

    return(
        tiempoCumplido?<h1>ocurrio un error</h1>:<h1>Cargando</h1>
    )
   

}
    

}

export default UserProfile