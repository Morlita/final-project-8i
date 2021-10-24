import React from 'react'
import { Link } from 'react-router-dom'
import './AboutUs.css'
import Clase from '../Img/clase.png'
import Group from '../Img/group.png'
import Rocket from '../Img/rocket.png'
import LeDiegue from '../Img/leDiegue.jpg'
import Flor from '../Img/flor.jpg'
import Loli from '../Img/loli.jpg'
import Euge from '../Img/euge.jpg'
import SantiC from '../Img/santiC.jpg'
import SantiJM from '../Img/santiJM.jpg'
import Gustavo from '../Img/gustavo.jpg'

function AboutUs() {
    return (
        <div className=''>
            <header className='about-us'>
                <div class="about-us-content">
                    <h1 className="text-center text-uppercase">comisión 8i</h1>
                </div>
            </header>
            <main>
                <section class="about-us-description p-3">
                    <div class="container card-deck">
                        <div class="row row-cols-md-3 row-cols-1">
                            <div class="col mt-3">
                                <div class="card text-center h-100">
                                    <img class="card-img-top mb-3" src={Clase} alt="Card image cap" />
                                    <div class="card-body p-1">
                                        <h3 class="card-title">Historia</h3>
                                        <p class="card-text">Desde sus inicios en Noviembre del 2020, y atravesando diferentes obstáculos, sus dedicados miembros consiguieron el título de desarrolladores Full Stack.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col mt-3">
                                <div class="card text-center h-100">
                                    <img class="card-img-top mb-3" src={Group} alt="Card image cap" />
                                    <div class="card-body p-1">
                                        <h3 class="card-title">Diversidad</h3>
                                        <p class="card-text">De 14 a 41 años, desde el colegio, facultad, hospital y estudio contable, sus miembros están unidos por un objetivo en común: centrar un div sin morir en el intento.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col mt-3">
                                <div class="card text-center h-100">
                                    <img class="card-img-top mb-3" src={Rocket} alt="Card image cap" />
                                    <div class="card-body p-1">
                                        <h3 class="card-title">Futuro</h3>
                                        <p class="card-text">Con nuevas herramientas, nuevos amigos, y una comunidad que no para de crecer, la historia de los alumnos de la comisión 8i recién empieza... </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="founder-info my-5 text-white p-4 background-blue">
                    <div class="container d-flex justify-content-md-between ">
                        <div class="member-pic d-flex align-items-center">
                            <img src={SantiC} alt="Foto de Santi Calvo" />
                        </div>
                        <div class="founder-bcg m-2 p-2 align-self-center">
                            <h3 class="font-weight-bolder">Santiago Calvo</h3>
                            <h5 class="mb-3">Master en Dirección de Empresas</h5>
                            <hr />
                            <p>Fundó LIAS en 1984, junto a la Arquitecta Mara David.</p>
                            <p>Bajo su dirección, LIAS se constituyó como el único laboratorio certificado del NOA.Aún hoy, se
                                mantiene líder en el mercado, con más de 700 clientes que lo eligen desde el primer día.</p>
                        </div>
                    </div>
                </section>
                <section class="developer-info text-white p-4 background-red">
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
                        <div class="member-pic d-flex align-items-center">
                            <img src={Loli} alt="Foto de Dolores Avila" />
                        </div>
                    </div>
                </section>
                <section class="founder-info my-5 text-white p-4 background-blue">
                    <div class="container d-flex justify-content-md-between ">
                        <div class="member-pic d-flex align-items-center">
                            <img src={SantiJM} alt="Foto de Santi Calvo" />
                        </div>
                        <div class="founder-bcg m-2 p-2 align-self-center">
                            <h3 class="font-weight-bolder">Santiago Jimenez Montilla</h3>
                            <h5 class="mb-3">Master en Dirección de Empresas</h5>
                            <hr />
                            <p>Fundó LIAS en 1984, junto a la Arquitecta Mara David.</p>
                            <p>Bajo su dirección, LIAS se constituyó como el único laboratorio certificado del NOA.Aún hoy, se
                                mantiene líder en el mercado, con más de 700 clientes que lo eligen desde el primer día.</p>
                        </div>
                    </div>
                </section>
                <section class="developer-info text-white p-4 background-red">
                    <div class="container  d-flex justify-content-md-between">
                        <div class="developer-bcg m-2 p-2 align-self-center">
                            <h3 class="">Eugenia Arias Fagalde</h3>
                            <h5>Médica Especialista en Anatomía Patológica</h5>
                            <h5 class="mb-3">Wannabe Developer</h5>
                            <p>Hija</p>
                            <hr />
                            <p>Nació y estudió en Tucumán.Luego de recibirse de médica, se mudó a Bs As para hacer la
                                residencia.Cuatro años después, se mudó a EEUU durante un año para hacer un fellowship en
                                Dermatopatología.Hace dos años está de vuelta en Bs As, y ahora quiere aprender programación.
                            </p>
                        </div>
                        <div class="member-pic d-flex align-items-center">
                            <img src={Euge} alt="Foto de Dolores Avila"/>
                        </div>
                    </div>
                </section>
                <section class="founder-info my-5 text-white p-4 background-blue">
                    <div class="container d-flex justify-content-md-between ">
                        <div class="member-pic d-flex align-items-center">
                            <img src={Gustavo} alt="Foto de Santi Calvo" />
                        </div>
                        <div class="founder-bcg m-2 p-2 align-self-center">
                            <h3 class="font-weight-bolder">Gustavo Leyria</h3>
                            <h5 class="mb-3">Master en Dirección de Empresas</h5>
                            <hr />
                            <p>Fundó LIAS en 1984, junto a la Arquitecta Mara David.</p>
                            <p>Bajo su dirección, LIAS se constituyó como el único laboratorio certificado del NOA.Aún hoy, se
                                mantiene líder en el mercado, con más de 700 clientes que lo eligen desde el primer día.</p>
                        </div>
                    </div>
                </section>
                <section class="developer-info text-white p-4 background-red">
                    <div class="container  d-flex justify-content-md-between">
                        <div class="developer-bcg m-2 p-2 align-self-center">
                            <h3 class="">Florencia Pistan</h3>
                            <h5>Médica Especialista en Anatomía Patológica</h5>
                            <h5 class="mb-3">Wannabe Developer</h5>
                            <p>Hija</p>
                            <hr />
                            <p>Nació y estudió en Tucumán.Luego de recibirse de médica, se mudó a Bs As para hacer la
                                residencia.Cuatro años después, se mudó a EEUU durante un año para hacer un fellowship en
                                Dermatopatología.Hace dos años está de vuelta en Bs As, y ahora quiere aprender programación.
                            </p>
                        </div>
                        <div class="member-pic d-flex align-items-center">
                            <img src={Flor} alt="Foto de Dolores Avila" />
                        </div>
                    </div>
                </section>
                <section class="founder-info my-5 text-white p-4 background-blue">
                    <div class="container d-flex justify-content-md-between ">
                        <div class="member-pic d-flex align-items-center">
                            <img src={LeDiegue} alt="Foto de Santi Calvo" />
                        </div>
                        <div class="founder-bcg m-2 p-2 align-self-center">
                            <h3 class="font-weight-bolder">Le Diegue</h3>
                            <h5 class="mb-3">Master en Dirección de Empresas</h5>
                            <hr />
                            <p>Fundó LIAS en 1984, junto a la Arquitecta Mara David.</p>
                            <p>Bajo su dirección, LIAS se constituyó como el único laboratorio certificado del NOA.Aún hoy, se
                                mantiene líder en el mercado, con más de 700 clientes que lo eligen desde el primer día.</p>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}

export default AboutUs
