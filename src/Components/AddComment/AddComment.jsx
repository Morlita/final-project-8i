import React, {useState, useEffect} from 'react'

function AddComment({recipeId, reloadFlag, setReloadFlag}) {

    const [data, setData] = useState(null);
    const [comments, setComments] = useState([]);
    const tokenUser = JSON.parse(localStorage.getItem("userToken"));
    const user = JSON.parse(localStorage.getItem("registerLogIn"));

    const getData = (val) => {
        setData(val.target.value)
        console.log(data);
    }

    const getComments = () => {
        fetch(`https://polar-reaches-30197.herokuapp.com/comments/${recipeId}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token' : tokenUser
              }
        })
            .then(response => response.json())
            .then(data => setComments(data))
            .catch(err => console.log(err))
    }
 
    const setComment = async () => {
        await fetch( "https://polar-reaches-30197.herokuapp.com/comments", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'x-access-token' : tokenUser
            },
            body: JSON.stringify({
                content: data,
                recipeId: recipeId,
                userId: user._id
            })
        })
        .then((response) => setReloadFlag(response.json()))
    }
    // POST data to endpoint

    useEffect(() => {
        getComments();
    }, [reloadFlag])

    return (
        <div className="container">
            <div className='d-flex justify-content-center'>
                <form action="" className=''>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingAddComment" aria-describedby="addComent" onChange={getData}></textarea>
                        <label htmlFor="floatingAddComment">Danos tu opinión!</label>
                        <div id="floatingAddComment" className="form-text">
                            Tu comentario nos interesa! Contanos qué te pareció la receta (máx. 500 caracteres).
                        </div>
                    </div>
                    <div className="text-center mt-2">
                        <button type="button" className="btn btn-outline-secondary rounded-pill" onClick={()=> setComment()}>Enviar comentario</button>
                    </div>
                </form>   
            </div>
            <div>
                <h4 className="mt-3">Comentarios:</h4>
                {comments && comments.map(({userName, userLastName, content}, index) => (
                    <p key={index}><span className="fw-bold">{userName} {userLastName}</span> {content}</p>
                ))}
            </div>
        </div>
        
    )
}

export default AddComment
