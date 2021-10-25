import React from 'react'
import './OurMission.css'
import LikeImg from '../Navbar/Logo/heart-white.png'

function AboutUs() {
    return (
        <div className="our-mission">
            <div className="our-mission-content">
                <div className="container text-center">
                    <h1 className="text-center text-capitalize">nuestra misión</h1>
                    <h3 className="m-4" >Recetapp nació  de la unión del gusto por la comida casera, y el encanto de transmitir y compartir tradiciones.</h3>
                    <h5 className="mb-5">Si sos un apasionado de la cocina o estas buscando nuevos sabores, en Recetapp vas a encontrar tu receta ideal. Contamos con un sistema de categorias y tags para que tu búsqueda sea lo mas rápida y efectiva posible.</h5>
                    <h3 className="fw-bold love">Nuestra web crece día a día gracias a la comunidad de usuarios que comparten sus mejores recetas!</h3>
                    <img src={LikeImg} alt="heart" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs