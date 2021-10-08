import React from 'react';
import "../Tags/Tags.css";

function Tags() {
    const tags = ['Entrada', 'Plato principal', 'Dulce', 'Ensalada', 'Sopa', 'Tarta', 'Vegano', 'Vegetariano', 'Rápido y fácil', 'Plato Frío', 'Plato Caliente', 'Picante', 'Light', 'Para golosos', 'Sin TAAC', 'Parrilla', 'Agridulce', 'Desayuno', 'Snack', 'Económico', 'Salsa', 'Para niños'];

    return (
        <div className="d-flex justify-content-sm-center justify-content-md-start text-uppercase tag-acordeon w-75 rounded">
            <div className="container pb-3">
                <h4 className="text-center p-2 pt-3">También podes usar nuestros filtros...</h4>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <i className="bi bi-funnel h4 p-1 mb-1"></i> Seleccioná hasta tres opciones:
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body d-flex justify-content-evenly flex-wrap ">
                                {tags.map((item, index) => (
                                    <div key={index} class="form-check form-check-inline py-1">
                                        <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off" />
                                        <label class="btn btn-outline-secondary rounded-pill" for="btn-check-outlined">{item}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filter-button text-center pt-3 d-grid col-3 mx-auto">
                    <button type="button" class="btn btn-danger rounded-pill">Filtrar</button>
                </div>
            </div>
        </div>
    )
}

export default Tags;

