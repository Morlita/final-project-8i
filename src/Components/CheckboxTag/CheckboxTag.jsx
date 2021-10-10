import React, {useState, useEffect} from 'react';
import "../Tags/Tags.css";

function Tags({ data, index, count, handleCheckbox}) {

    const [checked, setChecked] = useState(data.checked || false);
    let chosenTags = [];

    const handleChange = () => {
        const data = !checked;
        if(data){
            if(count < 3){
                setChecked(data);
                handleCheckbox(index, data);
            }
        } else {
            setChecked(data);
            handleCheckbox(index, data);
        }
    }

    const handleTags = (e) => {
        const checked = e.target.checked;
        if(checked){
            chosenTags.push(index);            
            console.log('checked', checked)

        }

    }
    

    return (
        <div class="form-check form-check-inline py-1">
            <input type="checkbox" class="btn-check" id={`btn-check-outlined-${index}`} autocomplete="off" checked={checked} onChange={handleChange} onClick={(e)=> {handleTags(e)}}/>
            <label class="btn btn-outline-secondary rounded-pill" for={`btn-check-outlined-${index}`}>{data.name}</label>
        </div>
    )
}

export default Tags;

