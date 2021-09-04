
import React from 'react'
import meat from '../Images/meat.jpg'
import veggie from '../Images/veggie.jpg'
import dessert from '../Images/dessert.jpg'

function Categories() {

    
    return (
        <div className='container'>
            <div className="row p-2 gy-3">                
                <div className="col-12 col-md-4">
                    <div class="card bg-dark text-white shadow border-0">
                        <img src={meat} class="card-img" alt="meat-category"></img>
                        <div class ="card-img-overlay d-flex flex-column justify-content-center">
                        <h5 class ="card-title text-center ">PLATOS CON CARNE</h5>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div class="card bg-dark text-white shadow border-0">
                        <img src={veggie} class="card-img" alt="veggie-category"></img>
                        <div class ="card-img-overlay d-flex flex-column justify-content-center">
                        <h5 class ="card-title text-center ">PLATOS VEGGIE</h5>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div class="card bg-dark text-white shadow border-0">
                        <img src={dessert} class="card-img" alt="dessert-category"></img>
                        <div class ="card-img-overlay d-flex flex-column justify-content-center">
                        <h5 class ="card-title text-center ">POSTRES</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories

//falta link a la página donde van todas las recetas que tengan su categoría