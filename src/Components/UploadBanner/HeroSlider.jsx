import React from 'react';
import './HeroSlider.css'

function HeroSlider() {
    return (
        <section className="banner">
            <div className="banner-content">
                <h1>Bienvenido a RecetApp</h1>
                <div className='text-center p-3 mt-3'>
                    <h5>Podes descubrir, guardar, y editar recetas!</h5>
                    <div className="mt-3 p-3">
                        <a href="#">Ver recetas</a>
                    </div>
                </div>
                <div className='text-center p-3 mt-3'>
                    <h5>Sos experto en cocina molecular? Haces el mejor tiramisú del barrio?</h5>
                    <h5>Compartí con nosotros tus recetas!</h5>
                    <div className="mt-3 p-3">
                        <a href="#">Subir mi receta</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSlider

