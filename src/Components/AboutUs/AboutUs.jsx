import React from 'react'

function AboutUs() {
    return (
        <div className='container'>
            <header>
                <div class="about-us-header-img">
                    <div class="container d-flex flex-column justify-content-between h-100">
                        <a href="index.html" class="text-decoration-none">
                            <div class="about-us-header-text text-center text-white w-100">
                                <h1 class="p-4">Recetapp</h1>
                            </div>
                        </a>
                    </div>
                </div>
            </header>
            <main>
                <section class="about-us-description mt-3 p-3">
                    <div class="container card-deck">
                        <div class="row row-cols-md-3 row-cols-1">
                            <div class="col">
                                <div class="card text-center">
                                    <img class="card-img-top mb-3" src="img/plant.svg" alt="Card image cap" />
                                    <div class="card-body p-1">
                                        <h3 class="card-title">Historia</h3>
                                        <p class="card-text">Hace 36 años estamos comprometidos al servicio de nuestros
                                            clientes.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card text-center">
                                    <img class="card-img-top mb-3" src="img/badge.svg" alt="Card image cap" />
                                    <div class="card-body p-1">
                                        <h3 class="card-title">Calidad</h3>
                                        <p class="card-text">Contamos con un sistema de calidad certificado bajo las normas
                                            ISO 9001.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card text-center">
                                    <img class="card-img-top mb-3" src="img/creativity.svg" alt="Card image cap" />
                                    <div class="card-body p-1">
                                        <h3 class="card-title">Actualización</h3>
                                        <p class="card-text">Nos destacamos por estar siempre a la vanguardia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="founder-info p-4 background-green">
                    <div class="container d-flex justify-content-md-between ">
                        <div class="founder-pic">
                            <img src="img/CarlosAvila.JPG" alt="Foto de Carlos Avila" />
                        </div>
                        <div class="founder-bcg m-2 p-2 align-self-center">
                            <h3 class="font-weight-bolder">Ingeniero Carlos Alberto Ávila</h3>
                            <h5 class="mb-3">Master en Dirección de Empresas</h5>
                            <hr />
                            <p>Fundó LIAS en 1984, junto a la Arquitecta Mara David.</p>
                            <p>Bajo su dirección, LIAS se constituyó como el único laboratorio certificado del NOA.Aún hoy, se
                                mantiene líder en el mercado, con más de 700 clientes que lo eligen desde el primer día.</p>
                        </div>
                    </div>
                </section>
                <section class="developer-info p-4">
                    <div class="container  d-flex justify-content-md-between">
                        <div class="developer-bcg m-2 p-2 align-self-center">
                            <h3 class="">Dolores Ávila</h3>
                            <h5>Médica Especialista en Anatomía Patológica</h5>
                            <h5 class="mb-3">Wannabe Developer</h5>
                            <p>Hija</p>
                            <hr />
                            <p>Nació y estudió en Tucumán.Luego de recibirse de médica, se mudó a Bs As para hacer la
                                residencia.Cuatro años después, se mudó a EEUU durante un año para hacer un fellowship en
                                Dermatopatología.Hace dos años está de vuelta en Bs As, y ahora quiere aprender programación.
                            </p>
                        </div>
                        <div class="developer-pic">
                            <img src="img/loli-1.jpg" alt="Foto de Dolores Avila" />
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}

export default AboutUs
