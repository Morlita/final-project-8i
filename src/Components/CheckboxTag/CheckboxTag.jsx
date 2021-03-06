import React, {useState, useEffect} from 'react';
import "../Tags/Tags.css";

function CheckboxTag({ data, index, count, handleCheckbox}) {

    const [checked, setChecked] = useState(data.checked || false);
    
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
    

    return (
        <div className="form-check form-check-inline py-1">
            <input type="checkbox" className="btn-check" id={`btn-check-outlined-${index}`} autocomplete="off" checked={checked} onChange={handleChange} />
            <label className="btn btn-outline-secondary rounded-pill" for={`btn-check-outlined-${index}`}>{data.name}</label>
        </div>
    )
}

export default CheckboxTag;

