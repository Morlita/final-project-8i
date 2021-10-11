import React from 'react'
import { Link } from 'react-router-dom'
import './Page404.css'

function Page404() {
    return (
        <section className="not-found-banner">
            <div className="not-found-banner-content">
                <h1 className="p-1 text-center">404</h1>
                <div className='text-center p-3 mt-3'>
                    <h2>Ups!</h2>
                    <h4>No encontramos lo que buscabas...</h4>
                    <div className="mt-3 p-3">
                        <Link to='/' className='btn rounded-pill btn-outline-light'>Volver al inicio</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page404
