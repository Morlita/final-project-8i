import React from 'react';
import bannerLarge from './Images/bannerImg.jpg';

function UploadRecipeBanner() {
    return (
        <div className='container p-3 banner-text' >
            <div className="card border-0" style={{ heigth: 20 }}>
                <img src={bannerLarge} className="card-img" alt="upload your recipe in three simple steps" ></img>
                <div className="card-img-overlay">
                    <div className="container h-100 d-flex flex-column justify-content-end">
                        <div className="">
                            <h3 className='col-5 mx-auto text-center h4'>Si sos experto en Creme Brulee, o simplemente haces mejor sanguchito del barrio</h3>
                            <h1 className="card-title col-8 mx-auto text-center h2 pb-3">Compartí con nosotros tu receta en tres simples pasos!</h1>
                        </div>
                        <div className="d-flex">
                            <div className='col-md-4 p-2'>
                                <h2 className='fw-bold'>1</h2>
                                <h5>Registrate como usuario y crea tu perfil  (es gratis!)</h5>
                                <p className="card-text">También te permitirá agendar tus recetas favoritas y hacer anotaciones, votar, y mucho más!</p>
                            </div>
                            <div className='col-md-4 p-2'>
                                <h2 className='fw-bold'>2</h2>
                                <h5>Anotá los ingredientes, cantidades, y pasos a seguir.</h5>
                            </div>
                            <div className='col-md-4 p-2'>
                                <h2 className='fw-bold'>3</h2>
                                <h5>Subí una foto, o elegí de nuestro archivo. Apretá enviar, y listo!</h5>
                                <p className="card-text">(Recibirás un email de confirmación cuando publiquemos tu receta)</p>
                            </div>
                        </div>
                        <div className="p-2">
                            <div class="d-grid col-6 mx-auto">
                                <button class="btn btn-success bg-gradient mb-1" type="button">Registrate y comenzá ahora!!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadRecipeBanner

//main in md and large devices