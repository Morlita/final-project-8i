import React, {useState, useEffect} from 'react'
import CheckboxComponent from './CheckBoxComponent'

function NewTagsComponent() {

    const [tags, setTags] = useState([]);
    const [tagFilters, setTagFilters] = useState([])

    const getTagArray = async () => {

        await fetch(`https://polar-reaches-30197.herokuapp.com/tags/`)
            .then(response => response.json())
            .then(data => setTags(data))
            .catch(err => { console.log(err) })
    }

    useEffect(() => {
        getTagArray();
    }, [])

    const handleFilters = (filters) => {

        const newFilters = { ...tagFilters }

        console.log(newFilters)

        setTagFilters(newFilters)
    }
    return (

        <div>
            <CheckboxComponent 
                tagsArr={tags}
                handleFilters={filters => handleFilters(filters)}
            />
        </div>
    )
}

export default NewTagsComponent
