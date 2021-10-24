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
                            <h5 class="mb-3">Desarrolador Full Stack</h5>
                            <h5 class="mb-3">Músico</h5>
                            <hr />
                            <p>Con 29 años, Santi domina React y la guitarra por igual. Generoso, colaborador y trabajador.</p>
                            <p>Actualmente trabaja en Rolling Code y otras empresas.</p>
                        </div>
                    </div>
                </section>
                <section class="developer-info text-white p-4 background-red">
                    <div class="container  d-flex justify-content-md-between">
                        <div class="developer-bcg m-2 p-2 align-self-center">
                            <h3 class="">Dolores Ávila</h3>
                            <h5>Médica Especialista en Anatomía Patológica</h5>
                            <h5 class="mb-3">Wannabe Developer</h5>
                            <hr />
                            <p>Con 35 años, Loli es médica especialista en patología quirúrgica y dermatopatología. Con ganas de cambiar de profesión, empezó a estudiar programación. Repostera aficionada</p>
                            <p>Actualmente trabaja en el Sanatorio Güemes de Palermo</p>
                        </div>
                        <div class="member-pic d-flex align-items-center">
                            <img src={Loli} alt="Foto de Loli" />
                        </div>
                    </div>
                </section>
                <section class="founder-info my-5 text-white p-4 background-blue">
                    <div class="container d-flex justify-content-md-between ">
                        <div class="member-pic d-flex align-items-center">
                            <img src={SantiJM} alt="Foto de Santi JM" />
                        </div>
                        <div class="founder-bcg m-2 p-2 align-self-center">
                            <h3 class="font-weight-bolder">Santiago Jimenez Montilla</h3>
                            <h5 class="mb-3">Padre</h5>
                            <hr />
                            <p>Con 21 años, Santi es desarrolador Full stack, pero front-end si le dan a elegir. Trabajador responsable, un bebé recién nacido no le impidió realizar todas sus tareas en el proyecto.</p>
                        </div>
                    </div>
                </section>
                <section class="developer-info text-white p-4 background-red">
                    <div class="container  d-flex justify-content-md-between">
                        <div class="developer-bcg m-2 p-2 align-self-center">
                            <h3 class="">Eugenia Arias Fagalde</h3>
                            <h5>Alumna del Colego NC</h5>
                            <h5 class="mb-3">Aficionada  a la robótica</h5>
                            <hr />
                            <p>Con 14 años, Euge cursa 3° año del colegio. Participa de olimpíadas matemáticas y hace cursos de robótica. Odia las presentaciones orales.</p>
                            <p>Que su edad no te confunda... fue el pilar fundamental de responsabilidad y ejecución en este proyecto.</p>
                        </div>
                        <div class="member-pic d-flex align-items-center">
                            <img src={Euge} alt="Foto de Euge"/>
                        </div>
                    </div>
                </section>
                <section class="founder-info my-5 text-white p-4 background-blue">
                    <div class="container d-flex justify-content-md-between ">
                        <div class="member-pic d-flex align-items-center">
                            <img src={Gustavo} alt="Foto de Gustavo" />
                        </div>
                        <div class="founder-bcg m-2 p-2 align-self-center">
                            <h3 class="font-weight-bolder">Gustavo Leyria</h3>
                            <h5 class="mb-3">Contador</h5>
                            <h5 class="mb-3">Postgrado en Dirección de Empresas y Análisis Bursátil</h5>
                            <hr />
                            <p>Con 41 años, tiene experiencia en liderar proyectos de gran escala y es consultor de empresas públicas. Sus hobbies incluyen correr y hacer degustaciones gastronómicas.</p>
                            <p>Tester del equipo, y experto subidor de recetas (pero no las prueben...puede que no tengan las cantidades precisas).</p>
                        </div>
                    </div>
                </section>
                <section class="developer-info text-white p-4 background-red">
                    <div class="container  d-flex justify-content-md-between">
                        <div class="developer-bcg m-2 p-2 align-self-center">
                            <h3 class="">Florencia Pistan</h3>
                            <h5>Desarroladora Full Stack</h5>
                            <h5 class="mb-3">Tutora</h5>
                            <hr />
                            <p>Dejó la agronomía para dedicarse a la tecnología e informática. Gran tutora, siempre disponible y predispuesta, lista para compartirte el video exacto que necesitabas.</p>
                            <p>10/10 would recommend.</p>
                        </div>
                        <div class="member-pic d-flex align-items-center">
                            <img src={Flor} alt="Foto de Flor" />
                        </div>
                    </div>
                </section>
                <section class="founder-info my-5 text-white p-4 background-blue">
                    <div class="container d-flex justify-content-md-between ">
                        <div class="member-pic d-flex align-items-center">
                            <img src={LeDiegue} alt="Foto de Diego" />
                        </div>
                        <div class="founder-bcg m-2 p-2 align-self-center">
                            <h3 class="font-weight-bolder">Le Diegue</h3>
                            <h5 class="mb-3">Desarrolador Full Stack Senior</h5>
                            <h5 class="mb-3">Mentor</h5>
                            <hr />
                            <p>Con 30 años, LeDiegue tomó las riendas de la comisión 8i y los dirigió al éxito. Mentor predispuesto y atento a las necesidades del grupo.</p>
                            <p>Aficionado a las motos, y ex adicto a pedidos ya, Diego supo guiar a sus alumnos a la finalización exitosa de este proyecto, llamado <span className='fst-italic fw-bold text-danger fs-5'>RecetApp</span>.</p>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}

export default AboutUs
