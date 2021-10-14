import React, { useState, useEffect } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import './UserProfile.css'
import MediumCard from '../MediumCard/MediumCard'
import { Link } from "react-router-dom";


function UserProfile() {

    const loggedUser = JSON.parse(localStorage.getItem("logedUser"));
    const loggedToken = JSON.parse(localStorage.getItem("registerLogIn")).token;

    const [profile, setProfile] = useState({});

    const user = async () => {
        try {
            let resp = await fetch("https://polar-reaches-30197.herokuapp.com/user/" + loggedUser, {
                headers: {
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
    console.log('loli', profile)
    useEffect(() => {
        user()
    }, [])


    if (!!Object.keys(profile).length && !profile.message) {

        return (

            <div className='container my-4'>
                {console.log(!!Object.keys(profile).length || !profile.message)}
                <div className="row text-center p-2">
                    {profile.name && profile.lastName ? <ProfileCard name={profile.name} lastName={profile.lastName} numeroRecetas={profile.myRecipes.length} numeroFav={profile.myFavorites.length} notas={profile.notes.length} /> : null}
                </div>
                <div className="row my-3 my-recipes rounded p-2 mx-1">
                    <div className="col col-md-4 border border-light rounded"><h3 className="">Mis recetas</h3></div>
                    <div className="col col-md-8">
                        {profile.myRecipes.length ? profile.myRecipes.map((item, index) => <MediumCard key={item._id} title={item.title} category={item.category} time={item.time} likes={item.likes} img={item.img} id={item._id} />) : <div className='p-2'>
                            <h5>No tienes recetas subidas aún</h5>
                            <Link to={'/addRecipe'} className='btn btn-light rounded-pill'> Pero podes subirla AHORA!!</Link>
                        </div>}
                    </div>
                </div>
                <div className="row my-3 my-recipes rounded p-2 mx-1">
                    <div className="col col-md-4 border border-light rounded"><h3 className="">Mis recetas favoritas</h3></div>
                    <div className="col col-md-8">
                        {profile.myFavorites.length ? profile.myFavorites.map((item, index) => <MediumCard key={item._id} title={item.title} category={item.category} time={item.time} likes={item.likes} img={item.img} id={item._id} />) : <h5>No tienes recetas favoritas</h5>}
                    </div>
                </div>


            </div>
        )
    }
    else {
        return (<h1>Ocurrio un error</h1>)
    }

}

export default UserProfile