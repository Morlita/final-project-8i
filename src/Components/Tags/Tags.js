import React, {useState, useEffect} from 'react';
import "../Tags/Tags.css";

function Tags() {
   
    const [tags, setTags] = useState([]);

    const getTagArray = async () => {

        await fetch(`https://polar-reaches-30197.herokuapp.com/tags/`)
            .then(response => response.json())
            .then(data => setTags(data))
            .catch(err => { console.log(err) })
    }

    useEffect(() => {
        getTagArray();
    }, [])

    const [checked, setChecked] = useState(false);

    const handleChange = (e)=> {
        let isChecked = e.target.checked;
        setTags(
            tags.map(data=> {
                data.checked = !isChecked;
                return data;
            })
        )
        setChecked(!checked);
    }


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
                                {tags && tags.map(({name, id}) => (
                                    <div key={id} class="form-check form-check-inline py-1">
                                        <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off"  onChange={handleChange}/>
                                        <label class="btn btn-outline-secondary rounded-pill" for="btn-check-outlined">{name}</label>
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

