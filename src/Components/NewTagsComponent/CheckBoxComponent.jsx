import React, { useState } from 'react';
import {Link} from 'react-router-dom'



function CheckBox({tagsArr, handleFilters}) {

    const [Checked, setChecked] = useState([])

    const handleToggle = (value) => {

        const currentIndex = Checked.indexOf(value);
        
        const newChecked = [...Checked];
       
        if (currentIndex === -1 && newChecked.length <= 2) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
        handleFilters(newChecked)
        //update this checked information into Parent Component 
        console.log('Checked', Checked)
    }
    
    return (

        <div>
            <div className="d-flex justify-content-sm-center justify-content-md-start text-uppercase tag-acordeon w-75 rounded">
                <div className="container pb-3">
                    <h4 className="text-center p-2 pt-3">NUEVO FILTRO</h4>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <i className="bi bi-funnel h4 p-1 mb-1"></i> Seleccioná hasta tres opciones:
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body d-flex justify-content-evenly flex-wrap ">
                                    {tagsArr && tagsArr.map((item, index) => (
                                        <div className="form-check form-check-inline py-1" key={index}>
                                            <input 
                                                id={`btn-check-outlined-${index}`} 
                                                class="btn-check" 
                                                type="checkbox" 
                                                autocomplete="off" 
                                                checked={Checked.indexOf(item._id) === -1 ? false : true}
                                                onChange={() => handleToggle(item._id)} 
                                            />
                                            <label class="btn btn-outline-secondary rounded-pill" for={`btn-check-outlined-${index}`}>{item.name}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center pt-3 d-grid col-3 mx-auto" >
                        <Link 
                            to={{
                                pathname: `/displayrecipes`,
                                state: {Checked: Checked}
                            }}
                            type="button" 
                            className="filter-button btn btn-danger rounded-pill">Filtrar
                        </Link>                                       
                    </div>
                </div>
            </div>
        </div>
    )
  
}

export default CheckBox
