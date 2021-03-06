import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSlider.css'
import Logo from '../Navbar/Logo/kitchen-utensils-white.png'

function HeroSlider() {
    return (
        <section className="banner">
            <div className="banner-content">
                <img src={Logo} alt="Logo" />
                <div className='text-center p-3 mt-3'>
                    <h5>Sos experto en cocina molecular? Haces el mejor tiramisú del barrio?</h5>
                    <h5>Compartí con nosotros tus recetas!</h5>
                    <div className="mt-3 p-3">
                        <Link to='/addRecipe' className='btn rounded-pill'>Subir mi receta</Link>
                    </div>
                </div>
                <div className='text-center p-3 mt-3'>
                    <h5>Podes descubrir, guardar, y editar recetas!</h5>
                    <div className="mt-3 p-3">
                        <Link to='/displayall' className='btn rounded-pill'>Ver recetas</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSlider

