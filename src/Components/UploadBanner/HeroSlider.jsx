import React from 'react';
import './HeroSlider.css'

function HeroSlider() {
    return (
        <section class="banner">
            <div class="banner-content">
                <h1>Bienvenido a RecetApp</h1>
                <div className='text-center p-3'>
                    <h4>Podes descubrir, guardar, y editar recetas!</h4>
                    <div className="mt-3 p-3">
                        <a href="#">Ver recetas</a>
                    </div>
                </div>
                <div className='text-center p-3'>
                    <h4>Sos experto en cocina molecular? Haces el mejor tiramisú del barrio?</h4>
                    <h4>Compartí con nosotros tus recetas!</h4>
                    <div className="mt-3 p-3">
                        <a href="#">Subir mi receta</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSlider

