import React, {useState} from 'react'

function AddComment() {

    const [data, setData] = useState(null);
    const [comment, setComment] = useState(false);

    const getData = (val) => {
        setData(val.target.value)
        setComment(false)
        console.log(data);
    }
    // POST data to endpoint

    return (
        <div className='container d-flex justify-content-center'>
            <form action="" className=''>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingAddComment" aria-describedby="addComent" onChange={getData}></textarea>
                    <label for="floatingAddComment">Danos tu opinión!</label>
                    <div id="floatingAddComment" className="form-text">
                        Tu comentario nos interesa! Contanos qué te pareció la receta (máx. 500 caracteres).
                    </div>
                </div>
                <div className="text-center mt-2">
                    <button type="submit" className="btn btn-outline-secondary rounded-pill" onClick={()=> setComment(true)}>Enviar comentario</button>
                </div>
            </form>
        </div>
    )
}

export default AddComment
